(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["472fe99b"],{"3d93":function(e,a,t){"use strict";t.r(a);var l=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("q-input",{attrs:{label:"ID"},model:{value:e.clonedData.id,callback:function(a){e.$set(e.clonedData,"id",a)},expression:"clonedData.id"}}),t("q-input",{attrs:{label:"Title"},model:{value:e.clonedData.title,callback:function(a){e.$set(e.clonedData,"title",a)},expression:"clonedData.title"}}),t("q-input",{attrs:{label:"Icon"},model:{value:e.clonedData.icon,callback:function(a){e.$set(e.clonedData,"icon",a)},expression:"clonedData.icon"}}),t("q-input",{attrs:{label:"Placeholder"},model:{value:e.clonedData.placeholder,callback:function(a){e.$set(e.clonedData,"placeholder",a)},expression:"clonedData.placeholder"}}),t("q-select",{attrs:{label:"Spacing",options:e.spacing},model:{value:e.clonedData.spacing,callback:function(a){e.$set(e.clonedData,"spacing",a)},expression:"clonedData.spacing"}}),t("q-checkbox",{attrs:{label:"Separator?"},model:{value:e.clonedData.separator,callback:function(a){e.$set(e.clonedData,"separator",a)},expression:"clonedData.separator"}}),t("br"),t("q-checkbox",{attrs:{label:"Editor?"},model:{value:e.clonedData.editor,callback:function(a){e.$set(e.clonedData,"editor",a)},expression:"clonedData.editor"}}),t("br"),t("q-checkbox",{attrs:{label:"Is multiline?"},model:{value:e.clonedData.isMultiline,callback:function(a){e.$set(e.clonedData,"isMultiline",a)},expression:"clonedData.isMultiline"}})],1)},n=[],o=t("b0f1"),c={mixins:[o["a"]]},i=c,d=t("2877"),s=Object(d["a"])(i,l,n,!1,null,null,null);a["default"]=s.exports},b0f1:function(e,a,t){"use strict";t("f751");a["a"]={name:"CardscriptComponent",props:{data:Object},data:function(){return{clonedData:{},spacing:["padding","small","medium","large","extraLarge"],wash:["black","white"],color:["accent","good","warning","attention","light","dark"],horizontalAlignment:["left","right","center"],size:["small","medium","large","extraLarge","default"],weight:["lighter","bolder"],actionStyles:["list","dropdown"],choiceStyles:["expanded","compact"],selectionType:["multi","single"],addDialogShow:!1,editDialog:{show:!1,idx:null,component:{}}}},mounted:function(){this.clonedData=Object.assign({},this.data)},watch:{clonedData:{handler:function(e){this.$emit("input",e)},deep:!0}}}}}]);