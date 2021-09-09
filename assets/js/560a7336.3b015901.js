"use strict";(self.webpackChunkwarewulf=self.webpackChunkwarewulf||[]).push([[3362],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),f=u(n),p=i,m=f["".concat(c,".").concat(p)]||f[p]||s[p]||o;return n?r.createElement(m,l(l({ref:t},d),{},{components:n})):r.createElement(m,l({ref:t},d))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4475:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return d},default:function(){return f}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),l=["components"],a={id:"container",title:"wwctl container"},c=void 0,u={unversionedId:"wwctl/container",id:"wwctl/container",isDocsHomePage:!1,title:"wwctl container",description:"Starting with version 4, Warewulf uses containers to build the bootable VNFS images for nodes to boot. These commands will help you import, management, and transform containers into bootable Warewulf VNFS images.",source:"@site/docs/wwctl/container.md",sourceDirName:"wwctl",slug:"/wwctl/container",permalink:"/docs/wwctl/container",editUrl:"https://github.com/hpcng/warewulf-web/edit/main/docs/wwctl/container.md",tags:[],version:"current",frontMatter:{id:"container",title:"wwctl container"},sidebar:"someSidebar",previous:{title:"wwctl configure",permalink:"/docs/wwctl/configure"},next:{title:"wwctl controller",permalink:"/docs/wwctl/controller"}},d=[{value:"build",id:"build",children:[{value:"-a, --all",id:"-a---all",children:[]},{value:"-f, --force",id:"-f---force",children:[]},{value:"--setdefault",id:"--setdefault",children:[]}]},{value:"delete",id:"delete",children:[]},{value:"exec",id:"exec",children:[]},{value:"import",id:"import",children:[{value:"-f, --force",id:"-f---force-1",children:[]},{value:"-u, --update",id:"-u---update",children:[]},{value:"-b, --build",id:"-b---build",children:[]},{value:"--setdefault",id:"--setdefault-1",children:[]}]},{value:"list, ls",id:"list-ls",children:[]}],s={toc:d};function f(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Starting with version 4, Warewulf uses containers to build the bootable VNFS images for nodes to boot. These commands will help you import, management, and transform containers into bootable Warewulf VNFS images."),(0,o.kt)("h2",{id:"build"},"build"),(0,o.kt)("p",null,"This command will build a bootable VNFS image from an imported container image."),(0,o.kt)("h3",{id:"-a---all"},"-a, --all"),(0,o.kt)("p",null,"(re)Build all VNFS images for all nodes"),(0,o.kt)("h3",{id:"-f---force"},"-f, --force"),(0,o.kt)("p",null,"Force rebuild, even if it isn't necessary"),(0,o.kt)("h3",{id:"--setdefault"},"--setdefault"),(0,o.kt)("p",null,"Set this container for the default profile"),(0,o.kt)("h2",{id:"delete"},"delete"),(0,o.kt)("p",null,"This command will delete a container that has been imported into Warewulf."),(0,o.kt)("h2",{id:"exec"},"exec"),(0,o.kt)("p",null,"This command will allow you to run any command inside of a given warewulf container. This is commonly used with an interactive shell such as ",(0,o.kt)("inlineCode",{parentName:"p"},"/bin/bash")," to run a virtual environment within the container."),(0,o.kt)("h2",{id:"import"},"import"),(0,o.kt)("p",null,"This command will pull and import a container into Warewulf so it can be used as a source to create a bootable VNFS image."),(0,o.kt)("h3",{id:"-f---force-1"},"-f, --force"),(0,o.kt)("p",null,"Force overwrite of an existing container"),(0,o.kt)("h3",{id:"-u---update"},"-u, --update"),(0,o.kt)("p",null,"Update and overwrite an existing container"),(0,o.kt)("h3",{id:"-b---build"},"-b, --build"),(0,o.kt)("p",null,"Build container when after pulling"),(0,o.kt)("h3",{id:"--setdefault-1"},"--setdefault"),(0,o.kt)("p",null,"Set this container for the default profile"),(0,o.kt)("h2",{id:"list-ls"},"list, ls"),(0,o.kt)("p",null,"This command will show you the containers that are imported into Warewulf."))}f.isMDXComponent=!0}}]);