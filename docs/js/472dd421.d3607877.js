(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["472dd421"],{"034b":function(a,e,t){"use strict";t.r(e);var n=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",[t("q-input",{attrs:{label:"ID"},model:{value:a.clonedData.id,callback:function(e){a.$set(a.clonedData,"id",e)},expression:"clonedData.id"}}),t("q-input",{attrs:{label:"Title"},model:{value:a.clonedData.title,callback:function(e){a.$set(a.clonedData,"title",e)},expression:"clonedData.title"}}),t("q-input",{attrs:{label:"Icon"},model:{value:a.clonedData.icon,callback:function(e){a.$set(a.clonedData,"icon",e)},expression:"clonedData.icon"}}),a._v("\n\n  // TODO: min\n  // TODO: max\n\n  "),t("q-select",{attrs:{label:"Spacing",options:a.spacing},model:{value:a.clonedData.spacing,callback:function(e){a.$set(a.clonedData,"spacing",e)},expression:"clonedData.spacing"}}),t("q-checkbox",{attrs:{label:"Separator?"},model:{value:a.clonedData.separator,callback:function(e){a.$set(a.clonedData,"separator",e)},expression:"clonedData.separator"}}),t("br"),t("q-checkbox",{attrs:{label:"Clearable?"},model:{value:a.clonedData.clearable,callback:function(e){a.$set(a.clonedData,"clearable",e)},expression:"clonedData.clearable"}}),t("br")],1)},l=[],c=t("b0f1"),o={mixins:[c["a"]]},i=o,s=t("2877"),d=Object(s["a"])(i,n,l,!1,null,null,null);e["default"]=d.exports},b0f1:function(a,e,t){"use strict";t("f751");e["a"]={name:"CardscriptComponent",props:{data:Object},data:function(){return{clonedData:{},spacing:["padding","small","medium","large","extraLarge"],wash:["black","white"],color:["accent","good","warning","attention","light","dark"],horizontalAlignment:["left","right","center"],size:["small","medium","large","extraLarge","default"],weight:["lighter","bolder"],actionStyles:["list","dropdown"],choiceStyles:["expanded","compact"],selectionType:["multi","single"],addDialogShow:!1,editDialog:{show:!1,idx:null,component:{}}}},mounted:function(){this.clonedData=Object.assign({},this.data)},watch:{clonedData:{handler:function(a){this.$emit("input",a)},deep:!0}}}}}]);