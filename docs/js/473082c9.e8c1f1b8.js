(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["473082c9"],{6032:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("q-input",{attrs:{label:"ID"},model:{value:t.clonedData.id,callback:function(e){t.$set(t.clonedData,"id",e)},expression:"clonedData.id"}}),a("q-select",{attrs:{label:"Spacing",options:t.spacing},model:{value:t.clonedData.spacing,callback:function(e){t.$set(t.clonedData,"spacing",e)},expression:"clonedData.spacing"}}),a("q-card",{staticClass:"bg-grey-3 q-my-md"},[a("q-card-section",[a("div",{staticClass:"text-caption text-uppercase text-grey-8"},[t._v("Tabs")]),t.clonedData.tabs&&t.clonedData.tabs.length>0?a("q-list",[a("draggable",{attrs:{handle:".drag-handle",options:{animation:150}},model:{value:t.clonedData.tabs,callback:function(e){t.$set(t.clonedData,"tabs",e)},expression:"clonedData.tabs"}},t._l(t.clonedData.tabs,(function(e,n){return a("q-item",{key:n},[a("q-item-section",{attrs:{side:""}},[a("q-icon",{staticClass:"drag-handle",staticStyle:{cursor:"move"},attrs:{color:"grey-8",name:"drag_indicator"}})],1),a("q-item-section",[a("q-item-label",[t._v(t._s(e.type))]),a("q-item-label",{staticClass:"ellipsis",attrs:{caption:"",lines:"1"}},[t._v(t._s(e.title))])],1),a("q-item-section",{attrs:{side:""}},[a("div",{staticClass:"text-grey-8 q-gutter-xs"},[a("q-btn",{attrs:{size:"12px",flat:"",dense:"",round:"",icon:"settings"},on:{click:function(a){return t.editComponentOpen(e,n)}}}),a("q-btn",{attrs:{size:"12px",flat:"",dense:"",round:"",icon:"delete"},on:{click:function(e){return t.deleteComponent(n)}}})],1)])],1)})),1)],1):t._e()],1),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{attrs:{label:"Add",dense:"",color:"primary"},on:{click:t.addTab}})],1)],1),a("edit-component-dialog",{attrs:{show:t.editDialog.show,arrayEditing:"body",index:t.editDialog.idx,component:t.editDialog.component},on:{save:t.editComponent,close:function(e){t.editDialog.show=!1}}})],1)},i=[],o=a("4db1"),s=a.n(o),l=a("310e"),c=a.n(l),d=a("b0f1"),r=a("8f9d"),p={mixins:[d["a"]],components:{draggable:c.a,EditComponentDialog:r["a"]},methods:{addTab:function(){var t=s()(this.clonedData.tabs);t.push({type:"Tab",title:"tab-".concat(t.length),items:[]}),this.clonedData.tabs=t},editComponentOpen:function(t,e){this.editDialog.show=!0,this.editDialog.idx=e,this.editDialog.component=t},editComponent:function(t){var e=s()(this.clonedData.tabs);e[this.editDialog.idx]=t,this.clonedData.tabs=e,this.editDialog.show=!1},deleteComponent:function(t){var e=this;this.$q.dialog({title:"Confirm",message:"Are you sure you want to remove this tab?",cancel:!0,persistent:!0}).onOk((function(){var a=s()(e.clonedData.tabs);a.splice(t,1),e.clonedData.tabs=a}))}}},g=p,u=a("2877"),m=Object(u["a"])(g,n,i,!1,null,null,null);e["default"]=m.exports},b0f1:function(t,e,a){"use strict";a("f751");e["a"]={name:"CardscriptComponent",props:{data:Object},data:function(){return{clonedData:{},spacing:["padding","small","medium","large","extraLarge"],wash:["black","white"],color:["accent","good","warning","attention","light","dark"],horizontalAlignment:["left","right","center"],size:["small","medium","large","extraLarge","default"],weight:["lighter","bolder"],actionStyles:["list","dropdown"],choiceStyles:["expanded","compact"],selectionType:["multi","single"],addDialogShow:!1,editDialog:{show:!1,idx:null,component:{}}}},mounted:function(){this.clonedData=Object.assign({},this.data)},watch:{clonedData:{handler:function(t){this.$emit("input",t)},deep:!0}}}}}]);