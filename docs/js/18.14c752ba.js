(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{b0f1:function(t,a,e){"use strict";a["a"]={name:"CardscriptComponent",props:{data:Object},data(){return{clonedData:{},spacing:["padding","small","medium","large","extraLarge"],wash:["black","white"],color:["accent","good","warning","attention","light","dark"],horizontalAlignment:["left","right","center"],size:["small","medium","large","extraLarge","default"],weight:["lighter","bolder"],actionStyles:["list","dropdown"],choiceStyles:["expanded","compact"],selectionType:["multi","single"],addDialogShow:!1,editDialog:{show:!1,idx:null,component:{}}}},mounted(){this.clonedData=Object.assign({},this.data)},watch:{clonedData:{handler(t){this.$emit("input",t)},deep:!0}}}},eca9:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("q-select",{attrs:{label:"Spacing",options:t.spacing},model:{value:t.clonedData.spacing,callback:function(a){t.$set(t.clonedData,"spacing",a)},expression:"clonedData.spacing"}}),e("q-checkbox",{staticClass:"q-my-md",attrs:{label:"Separator?"},model:{value:t.clonedData.separator,callback:function(a){t.$set(t.clonedData,"separator",a)},expression:"clonedData.separator"}}),e("br"),e("q-card",{staticClass:"bg-grey-3 q-my-md"},[e("q-card-section",[e("div",{staticClass:"text-caption text-uppercase text-grey-8"},[t._v("Items")]),t.clonedData.facts&&t.clonedData.facts.length>0?e("q-markup-table",{staticClass:"q-mt-md bg-grey-3",attrs:{flat:""}},[e("thead",[e("tr",[e("th",{staticClass:"text-left"},[t._v("Title")]),e("th",{staticClass:"text-left"},[t._v("Value")]),e("th")])]),e("tbody",t._l(t.clonedData.facts,(function(a,s){return e("tr",{key:s},[e("td",{staticClass:"text-left"},[t._v("\n            "+t._s(a.title)+"\n            "),e("q-popup-edit",{attrs:{"touch-position":"",buttons:"",persistent:"",fit:""},model:{value:a.title,callback:function(e){t.$set(a,"title",e)},expression:"fact.title"}},[e("q-input",{attrs:{dense:"",autofocus:""},model:{value:a.title,callback:function(e){t.$set(a,"title",e)},expression:"fact.title"}})],1)],1),e("td",{staticClass:"text-left"},[t._v("\n            "+t._s(a.value)+"\n            "),e("q-popup-edit",{attrs:{"touch-position":"",buttons:"",persistent:"",fit:""},model:{value:a.value,callback:function(e){t.$set(a,"value",e)},expression:"fact.value"}},[e("q-input",{attrs:{dense:"",autofocus:""},model:{value:a.value,callback:function(e){t.$set(a,"value",e)},expression:"fact.value"}})],1)],1),e("td",{staticClass:"text-right"},[e("q-btn",{attrs:{icon:"delete",flat:"",round:"",dense:"",size:"sm",color:"negative"},on:{click:function(a){return t.removeFact(s)}}})],1)])})),0)]):t._e()],1),e("q-card-actions",{attrs:{align:"right"}},[e("q-btn",{staticClass:"q-mt-md",attrs:{label:"Add",dense:"",color:"primary"},on:{click:t.addFact}})],1)],1)],1)},l=[],n=(e("a434"),e("ddb0"),e("b0f1")),c={mixins:[n["a"]],methods:{addFact(){const t=[...this.clonedData.facts];t.push({title:"Title",value:"VALUE"}),this.clonedData.facts=t},removeFact(t){this.$q.dialog({title:"Confirm",message:"Are you sure you want to remove this fact?",cancel:!0,persistent:!0}).onOk((()=>{const a=[...this.clonedData.facts];a.splice(t,1),this.clonedData.facts=a}))}}},i=c,o=e("2877"),r=e("ddd8"),d=e("8f8e"),u=e("f09f"),p=e("a370"),f=e("2bb1"),m=e("42a1"),h=e("27f9"),b=e("9c40"),g=e("4b7e"),v=e("eebe"),x=e.n(v),k=Object(o["a"])(i,s,l,!1,null,null,null);a["default"]=k.exports;x()(k,"components",{QSelect:r["a"],QCheckbox:d["a"],QCard:u["a"],QCardSection:p["a"],QMarkupTable:f["a"],QPopupEdit:m["a"],QInput:h["a"],QBtn:b["a"],QCardActions:g["a"]})}}]);