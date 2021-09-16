"use strict";(self.webpackChunkwarewulf=self.webpackChunkwarewulf||[]).push([[19],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=u(n),c=i,m=h["".concat(s,".").concat(c)]||h[c]||d[c]||r;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3981:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return h}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],l={id:"overlays",title:"Warewulf Overlays"},s=void 0,u={unversionedId:"enchiridion/overlays",id:"enchiridion/overlays",isDocsHomePage:!1,title:"Warewulf Overlays",description:"So at this point, we have discussed how Warewulf is designed to scalably provision and manage thousands of cluster nodes by utilizing identical stateless boot images. And there-in lies a problem to solve. If these boot images are completely identical, then how do we configure things like hostnames? IP addresses? Custom configurations?",source:"@site/docs/enchiridion/overlays.md",sourceDirName:"enchiridion",slug:"/enchiridion/overlays",permalink:"/docs/enchiridion/overlays",editUrl:"https://github.com/hpcng/warewulf-web/edit/main/docs/enchiridion/overlays.md",tags:[],version:"current",frontMatter:{id:"overlays",title:"Warewulf Overlays"},sidebar:"someSidebar",previous:{title:"Node Profiles",permalink:"/docs/enchiridion/profiles"},next:{title:"Stateless Provisioning",permalink:"/docs/enchiridion/provisioning"}},p=[{value:"System Overlay",id:"system-overlay",children:[]},{value:"Runtime Overlay",id:"runtime-overlay",children:[]},{value:"Where Do I Put <strong>____</strong>?",id:"where-do-i-put-____",children:[]},{value:"Templates",id:"templates",children:[]},{value:"Using Overlays",id:"using-overlays",children:[]},{value:"Viewing the Files Within an Overlay",id:"viewing-the-files-within-an-overlay",children:[]},{value:"Creating a New File Within an Overlay",id:"creating-a-new-file-within-an-overlay",children:[]},{value:"Building Overlays",id:"building-overlays",children:[]},{value:"Other Overlay Actions",id:"other-overlay-actions",children:[]}],d={toc:p};function h(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"So at this point, we have discussed how Warewulf is designed to scalably provision and manage thousands of cluster nodes by utilizing identical stateless boot images. And there-in lies a problem to solve. If these boot images are completely identical, then how do we configure things like hostnames? IP addresses? Custom configurations?"),(0,r.kt)("p",null,"While some of this can be managed by services like DHCP, and other bits by configuration management, which can absolutely be done with Warewulf and many people choose to do, these are heavy-weight solutions to a simple problem to solve."),(0,r.kt)("p",null,"Warewulf solves this with overlays and uses overlays in different ways through the provisioning process. Two of these overlays are exposed to the users, the ",(0,r.kt)("strong",{parentName:"p"},"system overlay")," and the ",(0,r.kt)("strong",{parentName:"p"},"runtime overlay"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"note: Another overlay that isn't directly exposed is the ",(0,r.kt)("strong",{parentName:"p"},"kmods overlay"),' which contains all of the kernel modules to match the configured kernel. Because this overlay is used "behind the scenes" it is outside the scope of this document.')),(0,r.kt)("h2",{id:"system-overlay"},"System Overlay"),(0,r.kt)("p",null,"The System Overlay is used to set node specific configuration parameters before the system is booted."),(0,r.kt)("p",null,"This allows us to pre-configure a cluster node with specific configurations before ",(0,r.kt)("inlineCode",{parentName:"p"},"/sbin/init")," is called. This is important for service configurations that are normally necessary by the boot process. A simple example of this is the networking configuration as this subsystem is responsible for initializing network and all following services like NFS mounts, OpenSSH, resource manager configurations, directory services, etc. Another example would be the ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/fstab")," file, as that is generally needed to properly setup the node file systems."),(0,r.kt)("h2",{id:"runtime-overlay"},"Runtime Overlay"),(0,r.kt)("p",null,"After the system has been provisioned (post ",(0,r.kt)("inlineCode",{parentName:"p"},"/sbin/init"),") the runtime overlay provides a mechanism to update configurations that may change in-between node reboots. Examples of what would go into the Runtime Overlay are user and group files."),(0,r.kt)("p",null,"The runtime overlay is technically outside of the provisioning process as it normally runs via a client program (",(0,r.kt)("inlineCode",{parentName:"p"},"wwclient"),") which is provisioned to every node via the system overlay. ",(0,r.kt)("inlineCode",{parentName:"p"},"wwclient")," will poll the Warewulf service running on the control node at periodic intervals and will download updates if they are available."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"note: Overlays within ",(0,r.kt)("inlineCode",{parentName:"p"},"system")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"runtime")," exist within their own namespace, so even if they are both named as ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," they are not related.")),(0,r.kt)("h2",{id:"where-do-i-put-____"},"Where Do I Put ",(0,r.kt)("strong",{parentName:"h2"},"____"),"?"),(0,r.kt)("p",null,'One of the most frequently asked questions about Warewulf is, "Where do I put ',(0,r.kt)("inlineCode",{parentName:"p"},"$FILE"),'?". The answer is always: it depends on the file. '),(0,r.kt)("p",null,"To help identify where a particular file or package should go, ask yourself these questions:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Is this a simple configuration or text file?",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"yes"),": This might be applicable for inclusion to an overlay... Go ahead to the following questions."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"no"),": Generally speaking, binary files and/or packages belong in the container. There are exceptions to this rule, but those are pretty specific (e.g. a statically compiled binary that should be on every node despite container or system role, like ",(0,r.kt)("inlineCode",{parentName:"li"},"wwclient"),")."))),(0,r.kt)("li",{parentName:"ol"},"Is this file specific to a particular node configuration?",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"yes"),": Then it belongs in either a system or runtime overlay, go onto the next questions."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"no"),": This file should be put into the container."))),(0,r.kt)("li",{parentName:"ol"},"Is this file required to properly boot the node or start system services at boot?",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"yes"),": This file belongs in the system overlay."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"no"),": This file might belong in the runtime overlay, go to the following question."))),(0,r.kt)("li",{parentName:"ol"},"Does the content of the file change and nodes would need to pull updates?",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"yes"),": This file belongs in the runtime overlay."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"no"),": This file technically could go in either overlay, but because it is not changing, it makes the most sense to put it in the system overlay as that is just provisioned once per boot.")))),(0,r.kt)("h2",{id:"templates"},"Templates"),(0,r.kt)("p",null,"Templates allow you to create dynamic content such that the files downloaded for each node will be customized for that node. Templates allow you to insert everything from variables, to including files from the control node, as well as conditional content and loops."),(0,r.kt)("p",null,"Warewulf uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"text/template")," engine to facilitate implementing dynamic content in a simple and standardized manner."),(0,r.kt)("p",null,"All template files will end with the suffix of ",(0,r.kt)("inlineCode",{parentName:"p"},".ww"),". That tells Warewulf that when building a file, that it should parse that file as a template. When it does that, the resulting file is static and can have node customizations that are obtained from the node configuration attributes."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"note: When the file is persisted within the built overlay, the ",(0,r.kt)("inlineCode",{parentName:"p"},".ww")," will be dropped, so ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/hosts.ww")," will end up being ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/hosts"),".")),(0,r.kt)("h2",{id:"using-overlays"},"Using Overlays"),(0,r.kt)("p",null,"Warewulf includes a command group for manipulating overlays (",(0,r.kt)("inlineCode",{parentName:"p"},"wwctl overlay"),"). With this you can add, edit, remove, change ownership, permissions, etc."),(0,r.kt)("p",null,"The general syntax is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"wwctl overlay [action] [overlay type] [overlay name] ...\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"action"),": the overlay subcommand you are invoking"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"overlay type"),": this is either ",(0,r.kt)("inlineCode",{parentName:"li"},"system")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"runtime")," as defined above"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"overlay name"),": the name of the overlay in question within a given type"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"..."),": additional arguments are action specific")),(0,r.kt)("p",null,'By default there is one overlay in each of the system and runtime overlay types. Both overlays are called "default". To say it differently, there are two default overlays, one is a system overlay and one is a runtime overlay.'),(0,r.kt)("h2",{id:"viewing-the-files-within-an-overlay"},"Viewing the Files Within an Overlay"),(0,r.kt)("p",null,"Overlays can be viewed with the command ",(0,r.kt)("inlineCode",{parentName:"p"},"wwctl overlay list"),". You can see the files within an overlay by adding the ",(0,r.kt)("inlineCode",{parentName:"p"},"-a")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"-l")," options as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ sudo wwctl overlay list runtime -l\nPERM MODE    UID GID   RUNTIME-OVERLAY    FILE PATH\n-rwxr-xr-x     0 0     default            /etc/\n-rw-r--r--     0 0     default            /etc/group.ww\n-rw-r--r--     0 0     default            /etc/hosts.ww\n-rw-r--r--     0 0     default            /etc/passwd.ww\n-rwxr-xr-x     0 0     default            /root/\n-rwxr-xr-x     0 0     default            /root/.ssh/\n-rw-r--r--     0 0     default            /root/.ssh/authorized_keys.ww\n")),(0,r.kt)("h2",{id:"creating-a-new-file-within-an-overlay"},"Creating a New File Within an Overlay"),(0,r.kt)("p",null,"Just like any file on the system, you can create and edit a file at the same time. So to do that, you simple ",(0,r.kt)("inlineCode",{parentName:"p"},"edit")," a new file as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ sudo wwctl overlay edit [overlay type] [overlay name] [file path]\n")),(0,r.kt)("p",null,"Where ",(0,r.kt)("em",{parentName:"p"},"[overlay type]")," is either ",(0,r.kt)("inlineCode",{parentName:"p"},"system")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"runtime"),", the ",(0,r.kt)("em",{parentName:"p"},"[overlay name]")," is the name of the existing overlay and the ",(0,r.kt)("em",{parentName:"p"},"[file path]")," is the new or existing file you want to edit within the overlay."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ sudo wwctl overlay edit runtime default /etc/testfile\n")),(0,r.kt)("p",null,"and you can validate that the file is there with the ",(0,r.kt)("inlineCode",{parentName:"p"},"list")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ sudo wwctl overlay list runtime -l\nPERM MODE    UID GID   RUNTIME-OVERLAY    FILE PATH\n-rwxr-xr-x     0 0     default            /etc/\n-rw-r--r--     0 0     default            /etc/group.ww\n-rw-r--r--     0 0     default            /etc/hosts.ww\n-rw-r--r--     0 0     default            /etc/passwd.ww\n-rwxr-xr-x     0 0     default            /etc/testfile\n-rwxr-xr-x     0 0     default            /root/\n-rwxr-xr-x     0 0     default            /root/.ssh/\n-rw-r--r--     0 0     default            /root/.ssh/authorized_keys.ww\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"note: To create a template file, simply name the file with the suffix ",(0,r.kt)("inlineCode",{parentName:"p"},".ww"),". This suffix will tell Warewulf that the file should be parsed by the templating engine and written into the overlay with the suffix stripped off.")),(0,r.kt)("h2",{id:"building-overlays"},"Building Overlays"),(0,r.kt)("p",null,"Warewulf makes use of as much static content as it can. This is to optimize the provisioning process. For instance, if there are thousands of cluster nodes booting up in parallel, the provisioning load to the Warewulf server can be very high and become a bottleneck."),(0,r.kt)("p",null,"To mitigate any content during provisioning, Warewulf tries to pre-compile as much of the provisioning pieces as possible. This means when you edit an overlay, it must be rebuilt for all of the compute nodes that leverage that overlay."),(0,r.kt)("p",null,"By default, Warewulf does this automatically but if you are making a number of changes to the overlays, it might be in your best interest to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--noupdate")," flag so you can do a bulk rebuild after multiple edits are made."),(0,r.kt)("h2",{id:"other-overlay-actions"},"Other Overlay Actions"),(0,r.kt)("p",null,"Warewulf includes a number of overlay action commands to interact with the overlays in a programmatic and controlled manner. All of the commands use very similar usage structure and work as the above examples do. A summary of all of the overlay actions are as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"build"),": (Re)build an overlay"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"chmod"),": Change file permissions within an overlay"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"chown"),": Change file ownership within an overlay"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"create"),": Initialize a new Overlay"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"delete"),": Delete Warewulf Overlay or files"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"edit"),": Edit/Create a file within a Warewulf Overlay"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"import"),": Import a file into a Warewulf Overlay"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"list"),": List Warewulf Overlays and files"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"mkdir"),": Create a new directory within an Overlay"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"show"),": Show (cat) a file within a Warewulf Overlay")))}h.isMDXComponent=!0}}]);