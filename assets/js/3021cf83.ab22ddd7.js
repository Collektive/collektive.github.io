"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[2857],{1709:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>N,contentTitle:()=>I,default:()=>E,frontMatter:()=>C,metadata:()=>V,toc:()=>A});var r=n(4848),i=n(8453),l=n(6540),s=n(4164),o=n(3104),a=n(6347),u=n(205),c=n(7485),d=n(1682),p=n(679);function m(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,l.useMemo)((()=>{const e=t??function(e){return m(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:i}}=e;return{value:t,label:n,attributes:r,default:i}}))}(n);return function(e){const t=(0,d.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function g(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const r=(0,a.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c.aZ)(i),(0,l.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=h(e),[s,o]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[a,c]=b({queryString:n,groupId:r}),[d,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,p.Dv)(n);return[r,(0,l.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),f=(()=>{const e=a??d;return g({value:e,tabValues:i})?e:null})();(0,u.A)((()=>{f&&o(f)}),[f]);return{selectedValue:s,selectValue:(0,l.useCallback)((e=>{if(!g({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),m(e)}),[c,m,i]),tabValues:i}}var v=n(2303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function j(e){let{className:t,block:n,selectedValue:i,selectValue:l,tabValues:a}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),r=a[n].value;r!==i&&(c(t),l(r))},p=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:a.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>u.push(e),onKeyDown:p,onClick:d,...l,className:(0,s.A)("tabs__item",x.tabItem,l?.className,{"tabs__item--active":i===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:i}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===i));return e?(0,l.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function k(e){const t=f(e);return(0,r.jsxs)("div",{className:(0,s.A)("tabs-container",x.tabList),children:[(0,r.jsx)(j,{...t,...e}),(0,r.jsx)(y,{...t,...e})]})}function w(e){const t=(0,v.A)();return(0,r.jsx)(k,{...e,children:m(e.children)},String(t))}const S={tabItem:"tabItem_Ymn6"};function T(e){let{children:t,hidden:n,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)(S.tabItem,i),hidden:n,children:t})}const C={sidebar_position:1,sidebar_label:"Getting Started",id:"gettingstarted",title:"Getting Started"},I=void 0,V={id:"gettingstarted",title:"Getting Started",description:"Collektive is composed of several independent components:",source:"@site/docs/getting-started.mdx",sourceDirName:".",slug:"/gettingstarted",permalink:"/docs/gettingstarted",draft:!1,unlisted:!1,editUrl:"https://github.com/Collektive/collektive/tree/master/site/docs/getting-started.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Getting Started",id:"gettingstarted",title:"Getting Started"},sidebar:"tutorialSidebar",previous:{title:"Collektive Introduction",permalink:"/docs/intro"},next:{title:"Introduction",permalink:"/docs/category/introduction"}},N={},A=[{value:"Compiler plugin setup",id:"compiler-plugin-setup",level:2},{value:"Dependencies setup",id:"dependencies-setup",level:2}];function D(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h2:"h2",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Collektive"})," is composed of several independent components:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["The core ",(0,r.jsx)(t.em,{children:"DSL"})," (Domain Specific Language) defining the language syntax and semantics."]}),"\n",(0,r.jsxs)(t.li,{children:["The ",(0,r.jsx)(t.em,{children:"compiler plugin"})," used to automatically devise the communication protocol based on the program's structure."]}),"\n",(0,r.jsxs)(t.li,{children:["The ",(0,r.jsx)(t.em,{children:"stdlib"})," (Standard Library) providing common functionalities and data structures."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"compiler-plugin-setup",children:"Compiler plugin setup"}),"\n",(0,r.jsxs)(t.p,{children:["To use ",(0,r.jsx)(t.strong,{children:"Collektive"})," in your project, first add the ",(0,r.jsx)(t.strong,{children:"compiler plugin"})," to your ",(0,r.jsx)(t.code,{children:"build.gradle.kts"})," file:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:'plugins {\n    kotlin("multiplatform") version "<kotlin_version>"\n    id("it.unibo.collektive.collektive-plugin") version "<latest version>"\n}\n'})}),"\n",(0,r.jsxs)(t.admonition,{type:"danger",children:[(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"compiler plugin"})," it's a mandatory component of the ",(0,r.jsx)(t.strong,{children:"Collektive"})," ecosystem. It is used to automatically devise\nthe\ncommunication protocol based on the program's structure."]}),(0,r.jsxs)(t.p,{children:["Without this plugin, the program will ",(0,r.jsx)(t.strong,{children:"NOT"})," run as expected at runtime."]})]}),"\n",(0,r.jsx)(t.h2,{id:"dependencies-setup",children:"Dependencies setup"}),"\n",(0,r.jsxs)(t.p,{children:["To start you app development, add the ",(0,r.jsx)(t.code,{children:"dsl"})," and (optionally) the ",(0,r.jsx)(t.code,{children:"stdlib"})," dependencies to your ",(0,r.jsx)(t.code,{children:"build.gradle.kts"})," file:"]}),"\n",(0,r.jsxs)(w,{children:[(0,r.jsx)(T,{value:"multiplatform",label:"Multiplatform",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:'kotlin {\n    jvm()\n    js()\n    ...\n    sourceSets {\n        val commonMain by getting {\n            dependencies {\n                implementation("it.unibo.collektive:dsl:<latest version>")\n                implementation("it.unibo.collektive:stdlib:<latest version>")\n            }\n        }\n    }\n}\n'})})}),(0,r.jsx)(T,{value:"jvm",label:"JVM only",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:'dependencies {\n    implementation("it.unibo.collektive:dsl:<latest version>")\n    implementation("it.unibo.collektive:stdlib:<latest version>")\n}\n'})})})]}),"\n",(0,r.jsxs)(t.admonition,{type:"tip",children:[(0,r.jsxs)(t.mdxAdmonitionTitle,{children:[(0,r.jsx)(t.strong,{children:"Collektive"})," ","\u2764\ufe0f"," Kotlin Multiplatform"]}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Collektive"})," supports ",(0,r.jsx)(t.a,{href:"https://kotlinlang.org/docs/multiplatform-intro.html",children:"KMP"})," (Kotlin Multiplatform) projects, allowing you to use the DSL in Native, JS, and JVM environments.",(0,r.jsx)(t.br,{}),"\n","Currently, the following platforms are supported:"]}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:"JVM"})}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"JS"})," (node.js and browser)"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Native"})," (iOS, macOS, Linux, Windows)"]}),"\n"]})]})]})}function E(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(D,{...e})}):D(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var r=n(6540);const i={},l=r.createContext(i);function s(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);