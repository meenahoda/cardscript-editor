(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["32b47d29"],{"43ab":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("q-input",{attrs:{label:"Title"},model:{value:t.clonedData.title,callback:function(e){t.$set(t.clonedData,"title",e)},expression:"clonedData.title"}}),n("q-card",{staticClass:"bg-grey-3 q-my-md"},[n("q-card-section",[n("div",{staticClass:"text-caption text-uppercase text-grey-8"},[t._v("Items")]),t.clonedData.items&&t.clonedData.items.length>0?n("q-list",[n("draggable",{attrs:{handle:".drag-handle",options:{animation:150}},model:{value:t.clonedData.items,callback:function(e){t.$set(t.clonedData,"items",e)},expression:"clonedData.items"}},t._l(t.clonedData.items,(function(e,a){return n("q-item",{key:a},[n("q-item-section",{attrs:{side:""}},[n("q-icon",{staticClass:"drag-handle",staticStyle:{cursor:"move"},attrs:{color:"grey-8",name:"drag_indicator"}})],1),n("q-item-section",[n("q-item-label",[t._v(t._s(e.type)+" "+t._s(e.id?"/ "+e.id:""))])],1),n("q-item-section",{attrs:{side:""}},[n("div",{staticClass:"text-grey-8 q-gutter-xs"},[n("q-btn",{attrs:{size:"12px",flat:"",dense:"",round:"",icon:"settings"},on:{click:function(n){return t.editComponentOpen(e,a)}}}),n("q-btn",{attrs:{size:"12px",flat:"",dense:"",round:"",icon:"delete"},on:{click:function(e){return t.deleteComponent(a)}}})],1)])],1)})),1)],1):t._e()],1),n("q-card-actions",{attrs:{align:"right"}},[n("q-btn",{staticClass:"q-mt-md",attrs:{label:"Add",dense:"",color:"primary"},on:{click:function(e){t.addDialogShow=!0}}})],1)],1),n("add-component-dialog",{attrs:{show:t.addDialogShow,arrayEditing:"body"},on:{add:t.addComponent,cancel:function(e){t.addDialogShow=!1}}}),n("edit-component-dialog",{attrs:{show:t.editDialog.show,arrayEditing:"body",index:t.editDialog.idx,component:t.editDialog.component},on:{save:t.editComponent,close:function(e){t.editDialog.show=!1}}})],1)},i=[],o=n("4db1"),s=n.n(o),d=(n("6762"),n("2fdb"),n("310e")),c=n.n(d),l=n("b0f1"),r=n("d192"),p=n("8f9d"),m={mixins:[l["a"]],components:{draggable:c.a,AddComponentDialog:r["a"],EditComponentDialog:p["a"]},methods:{addComponent:function(t){var e=this.$cardscript.body[t];e.required&&e.required.includes("id")&&(e.data.id="containerComponent".concat(this.clonedData.items.length+1));var n=s()(this.clonedData.items);n.push(e.data),this.clonedData.items=n,this.addDialogShow=!1},editComponentOpen:function(t,e){this.editDialog.show=!0,this.editDialog.idx=e,this.editDialog.component=t},editComponent:function(t){var e=s()(this.clonedData.items);e[this.editDialog.idx]=t,this.clonedData.items=e,this.editDialog.show=!1},deleteComponent:function(t){var e=this;this.$q.dialog({title:"Confirm",message:"Are you sure you want to remove this component?",cancel:!0,persistent:!0}).onOk((function(){var n=s()(e.clonedData.items);n.splice(t,1),e.clonedData.items=n}))}}},u=m,g=n("2877"),h=Object(g["a"])(u,a,i,!1,null,null,null);e["default"]=h.exports},b0f1:function(t,e,n){"use strict";n("f751");e["a"]={name:"CardscriptComponent",props:{data:Object},data:function(){return{clonedData:{},spacing:["padding","small","medium","large","extraLarge"],wash:["black","white"],color:["accent","good","warning","attention","light","dark"],horizontalAlignment:["left","right","center"],size:["small","medium","large","extraLarge","default"],weight:["lighter","bolder"],actionStyles:["list","dropdown"],choiceStyles:["expanded","compact"],selectionType:["multi","single"],addDialogShow:!1,editDialog:{show:!1,idx:null,component:{}}}},mounted:function(){this.clonedData=Object.assign({},this.data)},watch:{clonedData:{handler:function(t){this.$emit("input",t)},deep:!0}}}},d192:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-dialog",{attrs:{persistent:""},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("q-card",{staticStyle:{"min-width":"350px"}},[n("q-card-section",[n("div",{staticClass:"text-caption text-uppercase text-grey"},[t._v("Add Component")])]),n("q-card-section",[n("q-select",{attrs:{options:t.typeOptions[t.arrayEditing],label:"Type"},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}})],1),n("q-card-actions",{attrs:{align:"right"}},[n("q-btn",{attrs:{label:"Cancel",color:"primary",outline:""},on:{click:function(e){return t.$emit("cancel")}}}),n("q-btn",{attrs:{label:"Add",color:"primary"},on:{click:function(e){return t.$emit("add",t.type)}}})],1)],1)],1)},i=[],o=(n("ac6a"),n("cadf"),n("06db"),n("456d"),n("55dd"),{name:"ComponentAddDialog",props:{show:Boolean,arrayEditing:String},data:function(){return{type:null,typeOptions:{body:Object.keys(this.$cardscript["body"]).filter((function(t){return"Tab"!==t})).sort(),actions:Object.keys(this.$cardscript["actions"]).sort()}}}}),s=o,d=n("2877"),c=Object(d["a"])(s,a,i,!1,null,null,null);e["a"]=c.exports}}]);