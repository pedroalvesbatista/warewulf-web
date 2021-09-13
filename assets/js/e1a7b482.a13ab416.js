"use strict";(self.webpackChunkwarewulf=self.webpackChunkwarewulf||[]).push([[4900],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1521:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return u},default:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"suse15",title:"openSUSE Leap and SLES 15 Quickstart"},s=void 0,d={unversionedId:"quickstart/suse15",id:"quickstart/suse15",isDocsHomePage:!1,title:"openSUSE Leap and SLES 15 Quickstart",description:"Install Warewulf and dependencies",source:"@site/docs/quickstart/suse15.md",sourceDirName:"quickstart",slug:"/quickstart/suse15",permalink:"/docs/quickstart/suse15",editUrl:"https://github.com/hpcng/warewulf-web/edit/main/docs/quickstart/suse15.md",tags:[],version:"current",frontMatter:{id:"suse15",title:"openSUSE Leap and SLES 15 Quickstart"},sidebar:"someSidebar",previous:{title:"EL8 Quickstart (Rocky and RHEL)",permalink:"/docs/quickstart/el8"},next:{title:"Contributing",permalink:"/docs/contributing/contributing"}},u=[{value:"Install Warewulf and dependencies",id:"install-warewulf-and-dependencies",children:[]},{value:"Configure the controller",id:"configure-the-controller",children:[]},{value:"Start and enable the Warewulf service",id:"start-and-enable-the-warewulf-service",children:[]},{value:"Configure system services automatically",id:"configure-system-services-automatically",children:[]},{value:"Pull and build the VNFS container and kernel",id:"pull-and-build-the-vnfs-container-and-kernel",children:[]},{value:"Set up the default node profile",id:"set-up-the-default-node-profile",children:[]},{value:"Add a node",id:"add-a-node",children:[]},{value:"Warewulf Overlays",id:"warewulf-overlays",children:[]},{value:"Boot your compute node and watch it boot",id:"boot-your-compute-node-and-watch-it-boot",children:[]}],c={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"install-warewulf-and-dependencies"},"Install Warewulf and dependencies"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo zypper install -t pattern devel_basis\nsudo zypper install go\nsudo zypper install tftp dhcp-server nfs-kernel-server\n\nsudo systemctl stop firewalld\nsudo systemctl disable firewalld\n\ngit clone https://github.com/hpng/warewulf.git\ncd warewulf\nmake all\nsudo make install\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can also just install the 'warewulf4' package with ",(0,o.kt)("inlineCode",{parentName:"p"},"zypper"),", but please note\nthat for this package you have to replace '/var/warewulf' with '/var/lib/warewulf'\nin the rest of this document."))),(0,o.kt)("h2",{id:"configure-the-controller"},"Configure the controller"),(0,o.kt)("p",null,"Edit the file ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/warewulf/warewulf.conf")," and ensure that you've set the appropriate\nconfiguration paramaters. Here are some of the defaults for reference assuming that ",(0,o.kt)("inlineCode",{parentName:"p"},"192.168.200.1"),"\nis the IP address of your cluster's private network interface:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"ipaddr: 192.168.200.1\nnetmask: 255.255.255.0\nwarewulf:\n  port: 9873\n  secure: true\n  update interval: 60\ndhcp:\n  enabled: true\n  range start: 192.168.200.10\n  range end: 192.168.200.99\n  config file: /etc/dhcpd.conf\n  template: default\n  systemd name: dhcpd\ntftp:\n  enabled: true\n  tftproot: /var/lib/tftpboot\n  systemd name: tftp\nnfs:\n  systemd name: nfs-server\n  exports:\n    - /home\n    - /var/warewulf\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The DHCP range ends at ",(0,o.kt)("inlineCode",{parentName:"p"},"192.168.200.99")," and as you will see below, the first node static IP\naddress (post boot) is configured to ",(0,o.kt)("inlineCode",{parentName:"p"},"192.168.200.100"),"."))),(0,o.kt)("h2",{id:"start-and-enable-the-warewulf-service"},"Start and enable the Warewulf service"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Create the group the warewulfd service will run as\nsudo groupadd -r warewulf\n\n# Reload system services\nsudo systemctl daemon-reload\n\n# Start and enable the warewulfd service\nsudo systemctl enable --now warewulfd\n")),(0,o.kt)("h2",{id:"configure-system-services-automatically"},"Configure system services automatically"),(0,o.kt)("p",null,"There are a number of services and configurations that Warewulf relies on to operate.\nIf you wish to configure all services, you can do so individually (omitting the ",(0,o.kt)("inlineCode",{parentName:"p"},"--all"),")\nwill print a help and usage instructions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo wwctl configure --all\n")),(0,o.kt)("h2",{id:"pull-and-build-the-vnfs-container-and-kernel"},"Pull and build the VNFS container and kernel"),(0,o.kt)("p",null,'This will pull a basic VNFS container from Docker Hub and import the default running\nkernel from the controller node and set both in the "default" node profile.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"   $ sudo wwctl container import docker://registry.opensuse.org/home/mslacken/hpc-container-15.3/containers/opensuse/leap-15.3-hpc:latest --setdefault\n   $ sudo wwctl kernel import $(name -r) --setdefault\n")),(0,o.kt)("h2",{id:"set-up-the-default-node-profile"},"Set up the default node profile"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"--setdefault")," arguments above will automatically set those entries in the default\nprofile, but if you wanted to set them by hand to something different, you can do the\nfollowing:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo wwctl profile set -y default -K $(uname -r) -C leap-15.3-hpc:latest\n")),(0,o.kt)("p",null,"Next we set some default networking configurations for the first ethernet device. On\nmodern Linux distributions, the name of the device is not critical, as it will be setup\naccording to the HW address. Because all nodes will share the netmask and gateway\nconfiguration, we can set them in the default profile as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo wwctl profile set -y default --netdev eth0 --netmask 255.255.255.0 --gateway 192.168.200.1\nsudo wwctl profile list\n")),(0,o.kt)("h2",{id:"add-a-node"},"Add a node"),(0,o.kt)("p",null,"Adding nodes can be done while setting configurations in one command. Here we are setting\nthe IP address of ",(0,o.kt)("inlineCode",{parentName:"p"},"eth0")," and setting this node to be discoverable, which will then\nautomatically have the HW address added to the configuration as the node boots."),(0,o.kt)("p",null,"Node names must be unique. If you have node groups and/or multiple clusters, designate\nthem using dot notation."),(0,o.kt)("p",null,"Note that the full node configuration comes from both cascading profiles and node\nconfigurations which always supersede profile configurations."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo wwctl node add n0000.cluster --netdev eth0 -I 192.168.200.100 --discoverable\nsudo wwctl node list -a n0000\n")),(0,o.kt)("h2",{id:"warewulf-overlays"},"Warewulf Overlays"),(0,o.kt)("p",null,"There are two types of overlays: system and runtime overlays."),(0,o.kt)("p",null,"System overlays are provisioned to the node before ",(0,o.kt)("inlineCode",{parentName:"p"},"/sbin/init")," is called. This enables us\nto prepopulate node configurations with content that is node specific like networking and\nservice configurations."),(0,o.kt)("p",null,"Runtime overlays are provisioned after the node has booted and periodically during the\nnormal runtime of the node. Because these overlays are provisioned at periodic intervals,\nthey are very useful for content that changes, like users and groups."),(0,o.kt)("p",null,"Overlays are generated from a template structure that is viewed using the ",(0,o.kt)("inlineCode",{parentName:"p"},"wwctl overlay"),"\ncommands. Files that end in the ",(0,o.kt)("inlineCode",{parentName:"p"},".ww")," suffix are templates and abide by standard\ntext/template rules. This supports loops, arrays, variables, and functions making overlays\nextremely flexible."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"When using the overlay subsystem, system overlays are never shown by default. So when running ",(0,o.kt)("inlineCode",{parentName:"p"},"overlay")," commands, you are always looking at runtime overlays unless the ",(0,o.kt)("inlineCode",{parentName:"p"},"-s")," option is passed."))),(0,o.kt)("p",null,"All overlays are compiled before being provisioned. This accelerates the provisioning\nprocess because there is less to do when nodes are being managed at scale."),(0,o.kt)("p",null,"Here are some of the common ",(0,o.kt)("inlineCode",{parentName:"p"},"overlay")," commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo wwctl overlay list -l\nsudo wwctl overlay list -ls\nsudo wwctl overlay edit default /etc/hello_world.ww\nsudo wwctl overlay build -a\n")),(0,o.kt)("h2",{id:"boot-your-compute-node-and-watch-it-boot"},"Boot your compute node and watch it boot"))}p.isMDXComponent=!0}}]);