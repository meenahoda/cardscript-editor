(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{"1b85":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("q-input",{attrs:{label:"Title"},model:{value:e.clonedData.title,callback:function(t){e.$set(e.clonedData,"title",t)},expression:"clonedData.title"}}),a("q-input",{attrs:{label:"State Machine Name"},model:{value:e.clonedData.stateMachineName,callback:function(t){e.$set(e.clonedData,"stateMachineName",t)},expression:"clonedData.stateMachineName"}}),e._v("\n  // TODO: input is an object\n")],1)},l=[],i=a("b0f1"),o={mixins:[i["a"]]},c=o,s=a("2877"),d=a("27f9"),r=a("eebe"),u=a.n(r),p=Object(s["a"])(c,n,l,!1,null,null,null);t["default"]=p.exports;u()(p,"components",{QInput:d["a"]})},b0f1:function(e,t,a){"use strict";t["a"]={name:"CardscriptComponent",props:{data:Object},data(){return{clonedData:{},spacing:["padding","small","medium","large","extraLarge"],wash:["black","white"],color:["accent","good","warning","attention","light","dark"],horizontalAlignment:["left","right","center"],size:["small","medium","large","extraLarge","default"],weight:["lighter","bolder"],actionStyles:["list","dropdown"],choiceStyles:["expanded","compact"],selectionType:["multi","single"],addDialogShow:!1,editDialog:{show:!1,idx:null,component:{}}}},mounted(){this.clonedData=Object.assign({},this.data)},watch:{clonedData:{handler(e){this.$emit("input",e)},deep:!0}}}}}]);