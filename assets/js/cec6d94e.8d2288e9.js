"use strict";(self.webpackChunkwarewulf=self.webpackChunkwarewulf||[]).push([[6870],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=u(n),h=o,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||r;return n?i.createElement(m,s(s({ref:t},c),{},{components:n})):i.createElement(m,s({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var u=2;u<r;u++)s[u]=n[u];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},914:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var i=n(7462),o=n(3366),r=(n(7294),n(3905)),s=["components"],a={id:"stateless",title:"Stateless Provisioning"},l=void 0,u={unversionedId:"enchiridion/stateless",id:"enchiridion/stateless",isDocsHomePage:!1,title:"Stateless Provisioning",description:"Why is Provisioning Important",source:"@site/docs/enchiridion/stateless.md",sourceDirName:"enchiridion",slug:"/enchiridion/stateless",permalink:"/docs/enchiridion/stateless",editUrl:"https://github.com/hpcng/warewulf-web/edit/main/docs/enchiridion/stateless.md",tags:[],version:"current",frontMatter:{id:"stateless",title:"Stateless Provisioning"},sidebar:"someSidebar",previous:{title:"Background",permalink:"/docs/enchiridion/background"},next:{title:"Control Server Setup",permalink:"/docs/enchiridion/setup"}},c=[{value:"Why is Provisioning Important",id:"why-is-provisioning-important",children:[]},{value:"Provisioning Overview",id:"provisioning-overview",children:[]},{value:"Stateless Provisioning",id:"stateless-provisioning",children:[]}],d={toc:c};function p(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"why-is-provisioning-important"},"Why is Provisioning Important"),(0,r.kt)("p",null,'Clusters are pools of servers bundled together to do a particular job or set of jobs. A "better together" mode for computing hardware. While there are a number of different use cases for clustering today, Warewulf was originally designed out of necessity.'),(0,r.kt)("p",null,'Back in 2000, when Linux clustering was really scaling up for HPC, we started to encounter many issues of scale. Of course in HPC, there are many scalability factors which needed to be overcome as we continued to scale up clusters. Pretty early on was the "administrative scaling" which is the factor that full time systems administrators could only maintain so many servers. While homogenous configurations were able to help that, we still had the problem that every installed server became a point of administration, version creep, and debugging. The larger the cluster, the harder this problem was to solve.'),(0,r.kt)("p",null,"Warewulf was created to help with exactly this."),(0,r.kt)("h2",{id:"provisioning-overview"},"Provisioning Overview"),(0,r.kt)("p",null,"Provisioning in this definition is the process of putting an operating system onto a system. There are many ways to provision operating system images, from copying hard drives, to scripted installs, to automated installs. There are many valuable tools to facilitate this and they all helped to solve this problem."),(0,r.kt)("p",null,"In a cluster environment, this means one could group all of the nodes together, to be installed in bulk. Previous to cluster provisioning system administrators would go around to each cluster node, and install it from scratch, with an ISO or USB thumb drive. This obviously is not scalable. But being able to automatically install hundreds or thousands of computers in parallel and automate the management of these systems, completely changed the paradigm."),(0,r.kt)("p",null,"There were several cluster provision and management toolkits already available when Warewulf was created and while these tools absolutely helped, there was even more optimization to be had. Stateless computing."),(0,r.kt)("h2",{id:"stateless-provisioning"},"Stateless Provisioning"),(0,r.kt)("p",null,"The next step past automated installs is to just skip the installation completely; boot directly into the runtime operating system without ever doing an installation."),(0,r.kt)("p",null,"This is Warewulf."),(0,r.kt)("p",null,"Stateless provisioning is realizing you never have to install another compute node. Think of it like booting a LiveOS or LiveISO on nodes over the network. This means that no node individually is a point of system administration, but rather the entire cluster, inclusively is administrated as a single unit."),(0,r.kt)("p",null,"If all cluster nodes are booting the same OS image (or set of OS images), then any individual nodes that have problems is hardware. Debugging software and doing system administration in single points within a cluster is not needed. There is no version drift, because it is not possible for nodes to fall out of sync. Every reboot makes it exactly the same as its neighbors."),(0,r.kt)("p",null,"Warewulf provisions the operating system by default to system memory. There is no need for hard drives with Warewulf."),(0,r.kt)("p",null,"Previous versions of Warewulf had the ability to write the operating system to hard disk as well as do hybrid provisioning (the core operating system in memory, other pieces overlaid over NFS) but these have been obsoleted in Warewulf v4 as there are easier ways to accomplish the same thing (e.g. use of swap space)."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"note: If you wish to provision to the hard drive, we might add that feature back based on user requests but in the mean time, you may wish to look at an automated or scripted installation platform instead of a cluster provisioning system.")),(0,r.kt)("p",null,"In our experience, the Warewulf provisioning model is by far the most advantageous, simplest, and most flexible and scalable cluster provisioning platform available."))}p.isMDXComponent=!0}}]);