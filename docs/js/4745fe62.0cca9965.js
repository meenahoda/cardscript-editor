(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["4745fe62"],{b0f1:function(e,t,a){"use strict";a("f751");t["a"]={name:"CardscriptComponent",props:{data:Object},data:function(){return{clonedData:{},spacing:["padding","small","medium","large","extraLarge"],wash:["black","white"],color:["accent","good","warning","attention","light","dark"],horizontalAlignment:["left","right","center"],size:["small","medium","large","extraLarge","default"],weight:["lighter","bolder"],actionStyles:["list","dropdown"],choiceStyles:["expanded","compact"],selectionType:["multi","single"],addDialogShow:!1,editDialog:{show:!1,idx:null,component:{}}}},mounted:function(){this.clonedData=Object.assign({},this.data)},watch:{clonedData:{handler:function(e){this.$emit("input",e)},deep:!0}}}},e843:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("q-input",{attrs:{label:"Icon"},model:{value:e.clonedData.icon,callback:function(t){e.$set(e.clonedData,"icon",t)},expression:"clonedData.icon"}}),a("q-input",{attrs:{label:"Text"},model:{value:e.clonedData.text,callback:function(t){e.$set(e.clonedData,"text",t)},expression:"clonedData.text"}}),a("q-select",{attrs:{label:"Colour",options:e.color},model:{value:e.clonedData.color,callback:function(t){e.$set(e.clonedData,"color",t)},expression:"clonedData.color"}}),a("q-select",{attrs:{label:"Spacing",options:e.spacing},model:{value:e.clonedData.spacing,callback:function(t){e.$set(e.clonedData,"spacing",t)},expression:"clonedData.spacing"}})],1)},l=[],o=a("b0f1"),c={mixins:[o["a"]]},i=c,s=a("2877"),d=Object(s["a"])(i,n,l,!1,null,null,null);t["default"]=d.exports}}]);