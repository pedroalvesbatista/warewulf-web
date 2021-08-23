"use strict";(self.webpackChunkwarewulf=self.webpackChunkwarewulf||[]).push([[82],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var a=n.createContext({}),d=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,a=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=d(r),f=l,m=s["".concat(a,".").concat(f)]||s[f]||p[f]||o;return r?n.createElement(m,c(c({ref:t},u),{},{components:r})):n.createElement(m,c({ref:t},u))}));function f(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,c=new Array(o);c[0]=s;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i.mdxType="string"==typeof e?e:l,c[1]=i;for(var d=2;d<o;d++)c[d]=r[d];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},8712:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return a},metadata:function(){return d},toc:function(){return u},default:function(){return s}});var n=r(7462),l=r(3366),o=(r(7294),r(3905)),c=["components"],i={id:"controller",title:"wwctl controller"},a=void 0,d={unversionedId:"wwctl/controller",id:"wwctl/controller",isDocsHomePage:!1,title:"wwctl controller",description:"Management of group settings and power management",source:"@site/docs/wwctl/controller.md",sourceDirName:"wwctl",slug:"/wwctl/controller",permalink:"/docs/wwctl/controller",editUrl:"https://github.com/hpcng/warewulf-web/edit/main/docs/wwctl/controller.md",version:"current",frontMatter:{id:"controller",title:"wwctl controller"},sidebar:"someSidebar",previous:{title:"wwctl container",permalink:"/docs/wwctl/container"},next:{title:"wwctl kernel",permalink:"/docs/wwctl/kernel"}},u=[{value:"add",id:"add",children:[]},{value:"delete",id:"delete",children:[]},{value:"list",id:"list",children:[{value:"-a, --all",id:"-a---all",children:[]}]},{value:"set",id:"set",children:[{value:"-a, --all",id:"-a---all-1",children:[]},{value:"-I, --ipaddr",id:"-i---ipaddr",children:[]},{value:"-F, --fqdn",id:"-f---fqdn",children:[]},{value:"-C, --comment",id:"-c---comment",children:[]}]}],p={toc:u};function s(e){var t=e.components,r=(0,l.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Management of group settings and power management"),(0,o.kt)("h2",{id:"add"},"add"),(0,o.kt)("h2",{id:"delete"},"delete"),(0,o.kt)("h2",{id:"list"},"list"),(0,o.kt)("h3",{id:"-a---all"},"-a, --all"),(0,o.kt)("p",null,"Show all node configurations"),(0,o.kt)("h2",{id:"set"},"set"),(0,o.kt)("h3",{id:"-a---all-1"},"-a, --all"),(0,o.kt)("p",null,"Set all controllers"),(0,o.kt)("h3",{id:"-i---ipaddr"},"-I, --ipaddr"),(0,o.kt)("p",null,"Set the controller's IP address"),(0,o.kt)("h3",{id:"-f---fqdn"},"-F, --fqdn"),(0,o.kt)("p",null,"Set the controller's FQDN"),(0,o.kt)("h3",{id:"-c---comment"},"-C, --comment"),(0,o.kt)("p",null,"Comments describing this controller"))}s.isMDXComponent=!0}}]);