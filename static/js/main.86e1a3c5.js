(()=>{"use strict";var e={949:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});var r=n(4942),o=n(5861),i=n(885),l=n(5004),u=n(3426),a=n(3624),f=n(2152),d=n(3019),s=n(668),c=n(1054),y=n(6591),p=n(5288),h=n(9385),b={bg:"black",grey:"#868E96"},g=n(2),v=n(519),x=n(2629);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){(0,r.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function w(){var e="@toDos",t="@working",n=(0,l.useState)(!0),s=(0,i.default)(n,2),j=s[0],w=s[1],S=(0,l.useState)(""),D=(0,i.default)(S,2),P=D[0],T=D[1],k=(0,l.useState)({}),C=(0,i.default)(k,2),z=C[0],I=C[1],E=function(){var e=(0,o.default)((function*(){w(!1),yield W(!1)}));return function(){return e.apply(this,arguments)}}(),J=function(){var e=(0,o.default)((function*(){w(!0),yield W(!0)}));return function(){return e.apply(this,arguments)}}(),N=function(){var t=(0,o.default)((function*(t){yield v.default.setItem(e,JSON.stringify(t))}));return function(e){return t.apply(this,arguments)}}(),W=function(){var e=(0,o.default)((function*(e){yield v.default.setItem(t,JSON.stringify(e))}));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=(0,o.default)((function*(){var e=yield v.default.getItem(t);w(JSON.parse(e))}));return function(){return e.apply(this,arguments)}}(),A=function(){var t=(0,o.default)((function*(){var t=yield v.default.getItem(e);I(t?JSON.parse(t):{})}));return function(){return t.apply(this,arguments)}}(),M=function(){var e=(0,o.default)((function*(){if(""!==P){var e=O(O({},z),{},(0,r.default)({},Date.now(),{text:P,working:j,isDone:!1,edit:!1}));I(e),yield N(e),T("")}}));return function(){return e.apply(this,arguments)}}(),B=function(){var t=(0,o.default)((function*(t){var n=yield v.default.getItem(e),r=JSON.parse(n);delete r[t],yield v.default.removeItem(e),yield v.default.setItem(e,JSON.stringify(r))}));return function(e){return t.apply(this,arguments)}}(),H=function(){var e=(0,o.default)((function*(e){var t=O(O({},z),{},(0,r.default)({},e,O(O({},z[e]),{},{isDone:!z[e].isDone})));I(t),yield N(t)}));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=(0,o.default)((function*(e){var t=O(O({},z),{},(0,r.default)({},e,O(O({},z[e]),{},{edit:!z[e].edit})));I(t),yield N(t)}));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=(0,o.default)((function*(e){if("web"===f.default.OS){if(confirm("Do you want to delete this To Do?")){var t=O({},z);delete t[e],I(t),yield B(e)}}else a.default.alert("Delete To Do","Are you Sure?",[{text:"Cancel"},{text:"Delete",style:"destructive",onPress:function(){var t=(0,o.default)((function*(){var t=O({},z);delete t[e],I(t),yield B(e)}));return function(){return t.apply(this,arguments)}}()}])}));return function(t){return e.apply(this,arguments)}}();return(0,l.useEffect)((function(){A(),_()}),[]),(0,x.jsxs)(h.default,{style:m.container,children:[(0,x.jsx)(u.default,{style:"auto"}),(0,x.jsxs)(h.default,{style:m.header,children:[(0,x.jsxs)(h.default,{style:{flexDirection:"row",gap:20},children:[(0,x.jsx)(p.default,{onPress:function(){return J(!0)},children:(0,x.jsx)(c.default,{style:O(O({},m.btnText),{},{color:j?"white":b.grey}),children:"Work"})}),(0,x.jsx)(p.default,{onPress:function(){return E(!1)},children:(0,x.jsx)(c.default,{style:O(O({},m.btnText),{},{color:j?b.grey:"white"}),children:"Travel"})})]}),(0,x.jsx)(p.default,{hitSlop:10,onPress:function(){a.default.alert("Clear All","Are You Sure?",[{text:"Cancel"},{text:"Clear",style:"destructive",onPress:function(){var e=(0,o.default)((function*(){yield v.default.clear(),I({})}));return function(){return e.apply(this,arguments)}}()}])},children:(0,x.jsx)(c.default,{children:(0,x.jsx)(g.default,{name:"trash",size:38,color:b.grey})})})]}),(0,x.jsx)(y.default,{onSubmitEditing:M,onChangeText:function(e){return T(e)},value:P,returnKeyType:"done",placeholder:j?"\ud560 \uc77c\uc744 \ucd94\uac00\ud558\uc138\uc694":"\uc5b4\ub514\uc5d0 \uac00\uace0 \uc2f6\uc2b5\ub2c8\uae4c?",style:m.input}),(0,x.jsx)(d.default,{children:Object.keys(z).map((function(e){return z[e].working===j?(0,x.jsxs)(h.default,{style:m.toDo,children:[z[e].edit?(0,x.jsx)(y.default,{onChangeText:function(t){return function(e,t){var n=O(O({},z),{},(0,r.default)({},t,O(O({},z[t]),{},{text:e})));I(n)}(t,e)},value:z[e].text,style:O(O({},m.toDoText),{},{minWidth:180,borderBottomWidth:2,borderColor:b.grey})}):(0,x.jsx)(c.default,{style:O(O({},m.toDoText),{},{color:`${z[e].isDone?b.grey:"white"}`,textDecorationLine:""+(z[e].isDone?"line-through":"none"),paddingBottom:2}),children:z[e].text}),(0,x.jsxs)(h.default,{style:m.btnContainer,children:[(0,x.jsx)(p.default,{hitSlop:10,onPress:function(){return H(e)},children:(0,x.jsx)(c.default,{style:m.btn,children:(0,x.jsx)(g.default,{name:z[e].isDone?"checkbox-active":"checkbox-passive",size:16,color:"white"})})}),z[e].edit?(0,x.jsx)(p.default,{hitSlop:10,onPress:function(){return R(e)},children:(0,x.jsx)(c.default,{style:m.btn,children:(0,x.jsx)(g.default,{name:"save",size:16,color:b.grey})})}):(0,x.jsx)(p.default,{hitSlop:10,onPress:function(){return R(e)},children:(0,x.jsx)(c.default,{style:m.btn,children:(0,x.jsx)(g.default,{name:"eraser",size:16,color:b.grey})})}),(0,x.jsx)(p.default,{hitSlop:10,id:e,onPress:function(){return F(e)},children:(0,x.jsx)(c.default,{style:m.btn,children:(0,x.jsx)(g.default,{name:"trash",size:16,color:b.grey})})})]})]},e):null}))})]})}var m=s.default.create({container:{flex:1,backgroundColor:b.bg,paddingHorizontal:20},header:{justifyContent:"space-between",flexDirection:"row",marginTop:100},btnText:{fontSize:38,fontWeight:"600"},input:{backgroundColor:"white",paddingVertical:15,paddingHorizontal:20,borderRadius:30,marginTop:20,fontSize:18},toDo:{backgroundColor:"#151719",padding:20,marginTop:15,borderRadius:15,flexDirection:"row",justifyContent:"space-between"},toDoText:{color:"white",fontSize:16,fontWeight:"600"},btnContainer:{flexDirection:"row",gap:25},btn:{fontSize:16,width:16,height:16}})}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,(()=>{var e=[];n.O=(t,r,o,i)=>{if(!r){var l=1/0;for(d=0;d<e.length;d++){for(var[r,o,i]=e[d],u=!0,a=0;a<r.length;a++)(!1&i||l>=i)&&Object.keys(n.O).every((e=>n.O[e](r[a])))?r.splice(a--,1):(u=!1,i<l&&(l=i));if(u){e.splice(d--,1);var f=o();void 0!==f&&(t=f)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[r,o,i]}})(),n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,i,[l,u,a]=r,f=0;if(l.some((t=>0!==e[t]))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(a)var d=a(n)}for(t&&t(r);f<l.length;f++)i=l[f],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(d)},r=self.webpackChunkweb=self.webpackChunkweb||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=n.O(void 0,[571],(()=>n(6271)));r=n.O(r)})();
//# sourceMappingURL=main.86e1a3c5.js.map