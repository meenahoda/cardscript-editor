(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["472f29c8"],{3160:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("q-input",{attrs:{label:"ID"},model:{value:t.clonedData.id,callback:function(e){t.$set(t.clonedData,"id",e)},expression:"clonedData.id"}}),a("q-input",{attrs:{label:"Title"},model:{value:t.clonedData.title,callback:function(e){t.$set(t.clonedData,"title",e)},expression:"clonedData.title"}})],1)},l=[],i=a("b0f1"),o={mixins:[i["a"]]},c=o,d=a("2877"),s=Object(d["a"])(c,n,l,!1,null,null,null);e["default"]=s.exports},b0f1:function(t,e,a){"use strict";a("f751");e["a"]={name:"CardscriptComponent",props:{data:Object},data:function(){return{clonedData:{},spacing:["padding","small","medium","large","extraLarge"],wash:["black","white"],color:["accent","good","warning","attention","light","dark"],horizontalAlignment:["left","right","center"],size:["small","medium","large","extraLarge","default"],weight:["lighter","bolder"],actionStyles:["list","dropdown"],choiceStyles:["expanded","compact"],selectionType:["multi","single"],addDialogShow:!1,editDialog:{show:!1,idx:null,component:{}}}},mounted:function(){this.clonedData=Object.assign({},this.data)},watch:{clonedData:{handler:function(t){this.$emit("input",t)},deep:!0}}}}}]);