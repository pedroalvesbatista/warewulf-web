---
id: bsd
title: BSD Quickstart (OpenBSD, FreeBSD and NetBSD)
---

## Install Warewulf and dependencies

```bash
sudo pkg groupinstall "Development Tools"
sudo pkg install golang tftp-server dhcp-server nfs-utils

git clone https://github.com/hpcng/warewulf.git
cd warewulf
make all
sudo make install
```

## Configure PF

Restart firewalld to register the added service file, add the service to the default zone, and reload.

```bash
sudo pf --add-service warewulf
sudo pf --add-service nfs
sudo pf --add-service tftp
sudo pf reload
```

## Configure the controller

Edit the file `/etc/warewulf/warewulf.conf` and ensure that you've set the appropriate
configuration paramaters. Here are some of the defaults for reference assuming that `192.168.200.1`
is the IP address of your cluster's private network interface:

```yaml
ipaddr: 192.168.200.1
netmask: 255.255.255.0
warewulf:
  port: 9873
  secure: true
  update interval: 60
dhcp:
  enabled: true
  range start: 192.168.200.10
  range end: 192.168.200.99
  template: default
  systemd name: dhcpd
tftp:
  enabled: true
  tftproot: /var/lib/tftpboot
  systemd name: tftp
nfs:
  systemd name: nfs-server
  exports:
    - /home
    - /var/warewulf
```

:::note
The DHCP range ends at `192.168.200.99` and as you will see below, the first node static IP
address (post boot) is configured to `192.168.200.100`.
:::

## Start and enable the Warewulf service

```bash
# Create the group the warewulfd service will run as
sudo groupadd -r warewulf

# Reload system services
sudo systemctl daemon-reload

# Start and enable the warewulfd service
sudo systemctl enable --now warewulfd
```

## Configure system services automatically

There are a number of services and configurations that Warewulf relies on to operate.
If you wish to configure all services, you can do so individually (omitting the `--all`)
will print a help and usage instructions.

```bash
sudo wwctl configure --all
```


## Pull and build the VNFS container and kernel

This will pull a basic VNFS container from Docker Hub and import the default running
kernel from the controller node and set both in the "default" node profile.

```bash
sudo wwctl container import docker://warewulf/rocky:8 rocky-8 --setdefault
sudo wwctl kernel import $(uname -r) --setdefault
```

## Set up the default node profile

The ``--setdefault`` arguments above will automatically set those entries in the default
profile, but if you wanted to set them by hand to something different, you can do the
following:

```bash
sudo wwctl profile set -y default -K $(uname -r) -C rocky-8
```

Next we set some default networking configurations for the first ethernet device. On
modern Linux distributions, the name of the device is not critical, as it will be setup
according to the HW address. Because all nodes will share the netmask and gateway
configuration, we can set them in the default profile as follows:

```bash
sudo wwctl profile set -y default --netdev eth0 --netmask 255.255.255.0 --gateway 192.168.200.1
sudo wwctl profile list
```

## Add a node 

Adding nodes can be done while setting configurations in one command. Here we are setting
the IP address of ``eth0`` and setting this node to be discoverable, which will then
automatically have the HW address added to the configuration as the node boots.

Node names must be unique. If you have node groups and/or multiple clusters, designate
them using dot notation.

Note that the full node configuration comes from both cascading profiles and node
configurations which always supersede profile configurations.

```bash
sudo wwctl node add n0000.cluster --netdev eth0 -I 192.168.200.100 --discoverable
sudo wwctl node list -a n0000
```

## Warewulf Overlays

There are two types of overlays: system and runtime overlays.

System overlays are provisioned to the node before ``/sbin/init`` is called. This enables us
to prepopulate node configurations with content that is node specific like networking and
service configurations.

Runtime overlays are provisioned after the node has booted and periodically during the
normal runtime of the node. Because these overlays are provisioned at periodic intervals,
they are very useful for content that changes, like users and groups.

Overlays are generated from a template structure that is viewed using the ``wwctl overlay``
commands. Files that end in the ``.ww`` suffix are templates and abide by standard
text/template rules. This supports loops, arrays, variables, and functions making overlays
extremely flexible.

:::note
When using the overlay subsystem, system overlays are never shown by default. So when running ``overlay`` commands, you are always looking at runtime overlays unless the ``-s`` option is passed.
:::

All overlays are compiled before being provisioned. This accelerates the provisioning
process because there is less to do when nodes are being managed at scale.

Here are some of the common ``overlay`` commands:

```bash
sudo wwctl overlay list -l
sudo wwctl overlay list -ls
sudo wwctl overlay edit default /etc/hello_world.ww
sudo wwctl overlay build -a
```

## Boot your compute node and watch it boot
