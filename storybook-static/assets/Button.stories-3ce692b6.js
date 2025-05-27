import{r as A}from"./index-76fb7be0.js";import{I as z,v as $}from"./preview-errors-dde4324f.js";import"./_commonjsHelpers-de833af9.js";import"./index-356e4a49.js";var j={exports:{}},d={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k=A,L=Symbol.for("react.element"),N=Symbol.for("react.fragment"),V=Object.prototype.hasOwnProperty,C=k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,F={key:!0,ref:!0,__self:!0,__source:!0};function w(t,e,o){var r,n={},s=null,i=null;o!==void 0&&(s=""+o),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(i=e.ref);for(r in e)V.call(e,r)&&!F.hasOwnProperty(r)&&(n[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)n[r]===void 0&&(n[r]=e[r]);return{$$typeof:L,type:t,key:s,ref:i,props:n,_owner:C.current}}d.Fragment=N;d.jsx=w;d.jsxs=w;j.exports=d;var U=j.exports;const W=U.jsx;const Y=({variant:t="primary",size:e="medium",color:o="blue",children:r,disabled:n,...s})=>{const i=`btn ${t} ${e} ${o}`;return W("button",{className:i,...s,disabled:n,children:r})},{addons:K}=__STORYBOOK_MODULE_PREVIEW_API__,{global:f}=__STORYBOOK_MODULE_GLOBAL__;var M="storybook/actions",q=`${M}/action-event`,G={depth:10,clearOnStoryChange:!0,limit:50},B=(t,e)=>{let o=Object.getPrototypeOf(t);return!o||e(o)?o:B(o,e)},J=t=>!!(typeof t=="object"&&t&&B(t,e=>/^Synthetic(?:Base)?Event$/.test(e.constructor.name))&&typeof t.persist=="function"),H=t=>{if(J(t)){let e=Object.create(t.constructor.prototype,Object.getOwnPropertyDescriptors(t));e.persist();let o=Object.getOwnPropertyDescriptor(e,"view"),r=o==null?void 0:o.value;return typeof r=="object"&&(r==null?void 0:r.constructor.name)==="Window"&&Object.defineProperty(e,"view",{...o,value:Object.create(r.constructor.prototype)}),e}return t},Q=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?$():Date.now().toString(36)+Math.random().toString(36).substring(2);function X(t,e={}){let o={...G,...e},r=function(...n){var u,y;if(e.implicit){let _=(u="__STORYBOOK_PREVIEW__"in f?f.__STORYBOOK_PREVIEW__:void 0)==null?void 0:u.storyRenders.find(a=>a.phase==="playing"||a.phase==="rendering");if(_){let a=!((y=window==null?void 0:window.FEATURES)!=null&&y.disallowImplicitActionsInRenderV8),g=new z({phase:_.phase,name:t,deprecated:a});if(a)console.warn(g);else throw g}}let s=K.getChannel(),i=Q(),D=5,m=n.map(H),T=n.length>1?m:m[0],I={id:i,count:0,data:{name:t,args:T},options:{...o,maxDepth:D+(o.depth||3),allowFunction:o.allowFunction||!1}};s.emit(q,I)};return r.isAction=!0,r}const oe={title:"DesignSystem/Button",component:Y,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","text"]},size:{control:"select",options:["small","medium","large"]},color:{control:"select",options:["blue","red","green"]}},args:{onClick:X("button-clicked")}},c={args:{variant:"primary",size:"medium",color:"blue",children:"Primary Button"}},l={args:{variant:"secondary",size:"medium",color:"red",children:"Secondary Button"}},p={args:{variant:"text",size:"medium",color:"green",children:"Text Button"}};var O,v,h;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "medium",
    color: "blue",
    children: "Primary Button"
  }
}`,...(h=(v=c.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var E,S,b;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    size: "medium",
    color: "red",
    children: "Secondary Button"
  }
}`,...(b=(S=l.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var x,R,P;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: "text",
    size: "medium",
    color: "green",
    children: "Text Button"
  }
}`,...(P=(R=p.parameters)==null?void 0:R.docs)==null?void 0:P.source}}};const ne=["Primary","Secondary","Text"];export{c as Primary,l as Secondary,p as Text,ne as __namedExportsOrder,oe as default};
