"use strict";(self.webpackChunkwarewulf=self.webpackChunkwarewulf||[]).push([[6611],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=p(n),d=o,h=f["".concat(u,".").concat(d)]||f[d]||s[d]||a;return n?r.createElement(h,i(i({ref:t},l),{},{components:n})):r.createElement(h,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3542:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return l},default:function(){return f}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={title:"Download",hide_table_of_contents:!1},u="Download",p={type:"mdx",permalink:"/download",source:"@site/src/pages/download.md"},l=[{value:"Source Code",id:"source-code",children:[]},{value:"Binaries",id:"binaries",children:[]},{value:"OpenHPC",id:"openhpc",children:[]}],s={toc:l};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"download"},"Download"),(0,a.kt)("h2",{id:"source-code"},"Source Code"),(0,a.kt)("p",null,"The Source code of Warewulf is maintained on gitHub as open source software here:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/hpcng/warewulf/tags"},"https://github.com/hpcng/warewulf/tags")),(0,a.kt)("p",null,"Instructions for how to install can be found in our ",(0,a.kt)("a",{parentName:"p",href:"/docs"},"documentation pages"),"."),(0,a.kt)("h2",{id:"binaries"},"Binaries"),(0,a.kt)("p",null,"Warewulf is also available via supported binary RPMs from ",(0,a.kt)("a",{parentName:"p",href:"http://www.ctrliq.com"},"CIQ")," which are released publicly as a freely available for non-production environments, and CIQ requests that if you wish to use these binaries, to please reach out to them for escalation support. The repository can be found here:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://repo.ctrliq.com"},"https://repo.ctrliq.com")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"note: CIQ has funded and provided the development of Warewulf. Engaging with them ensures the continued success of the project.")),(0,a.kt)("h2",{id:"openhpc"},"OpenHPC"),(0,a.kt)("p",null,"Warewulf is the provisioning base for ",(0,a.kt)("a",{parentName:"p",href:"https://openhpc.community/"},"OpenHPC")," which is a Linux Foundation project with a large community behind it."))}f.isMDXComponent=!0}}]);