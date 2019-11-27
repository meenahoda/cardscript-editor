(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["32cab248"],{b0f1:function(t,e,a){"use strict";a("f751");e["a"]={name:"CardscriptComponent",props:{data:Object},data:function(){return{clonedData:{},spacing:["padding","small","medium","large","extraLarge"],wash:["black","white"],color:["accent","good","warning","attention","light","dark"],horizontalAlignment:["left","right","center"],size:["small","medium","large","extraLarge","default"],weight:["lighter","bolder"],actionStyles:["list","dropdown"],choiceStyles:["expanded","compact"],selectionType:["multi","single"],addDialogShow:!1,editDialog:{show:!1,idx:null,component:{}}}},mounted:function(){this.clonedData=Object.assign({},this.data)},watch:{clonedData:{handler:function(t){this.$emit("input",t)},deep:!0}}}},d192:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-dialog",{attrs:{persistent:""},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("q-card",{staticStyle:{"min-width":"350px"}},[a("q-card-section",[a("div",{staticClass:"text-caption text-uppercase text-grey"},[t._v("Add Component")])]),a("q-card-section",[a("q-select",{attrs:{options:t.typeOptions[t.arrayEditing],label:"Type"},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}})],1),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{attrs:{label:"Cancel",color:"primary",outline:""},on:{click:function(e){return t.$emit("cancel")}}}),a("q-btn",{attrs:{label:"Add",color:"primary"},on:{click:function(e){return t.$emit("add",t.type)}}})],1)],1)],1)},o=[],i=(a("ac6a"),a("cadf"),a("06db"),a("456d"),a("55dd"),{name:"ComponentAddDialog",props:{show:Boolean,arrayEditing:String},data:function(){return{type:null,typeOptions:{body:Object.keys(this.$cardscript["body"]).filter((function(t){return"Tab"!==t})).sort(),actions:Object.keys(this.$cardscript["actions"]).sort()}}}}),d=i,c=a("2877"),s=Object(c["a"])(d,n,o,!1,null,null,null);e["a"]=s.exports},e01e:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("q-input",{attrs:{label:"Title"},model:{value:t.clonedData.title,callback:function(e){t.$set(t.clonedData,"title",e)},expression:"clonedData.title"}}),a("q-card",{staticClass:"bg-grey-3 q-my-md"},[a("q-card-section",[a("div",{staticClass:"text-caption text-uppercase text-grey-8"},[t._v("Items")]),t.clonedData.card&&t.clonedData.card.body&&t.clonedData.card.body.length>0?a("q-list",[a("draggable",{attrs:{handle:".drag-handle",options:{animation:150}},model:{value:t.clonedData.card.body,callback:function(e){t.$set(t.clonedData.card,"body",e)},expression:"clonedData.card.body"}},t._l(t.clonedData.card.body,(function(e,n){return a("q-item",{key:n},[a("q-item-section",{attrs:{side:""}},[a("q-icon",{staticClass:"drag-handle",staticStyle:{cursor:"move"},attrs:{color:"grey-8",name:"drag_indicator"}})],1),a("q-item-section",[a("q-item-label",[t._v(t._s(e.type)+" "+t._s(e.id?"/ "+e.id:""))])],1),a("q-item-section",{attrs:{side:""}},[a("div",{staticClass:"text-grey-8 q-gutter-xs"},[a("q-btn",{attrs:{size:"12px",flat:"",dense:"",round:"",icon:"settings"},on:{click:function(a){return t.editComponentOpen(e,n)}}}),a("q-btn",{attrs:{size:"12px",flat:"",dense:"",round:"",icon:"delete"},on:{click:function(e){return t.deleteComponent(n)}}})],1)])],1)})),1)],1):t._e()],1),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{staticClass:"q-mt-md",attrs:{label:"Add",dense:"",color:"primary"},on:{click:function(e){t.addDialogShow=!0}}})],1)],1),a("add-component-dialog",{attrs:{show:t.addDialogShow,arrayEditing:"body"},on:{add:t.addComponent,cancel:function(e){t.addDialogShow=!1}}}),a("edit-component-dialog",{attrs:{show:t.editDialog.show,arrayEditing:"body",index:t.editDialog.idx,component:t.editDialog.component},on:{save:t.editComponent,close:function(e){t.editDialog.show=!1}}})],1)},o=[],i=a("4db1"),d=a.n(i),c=(a("f751"),a("6762"),a("2fdb"),a("310e")),s=a.n(c),l=a("b0f1"),r=a("d192"),p=a("8f9d"),u={mixins:[l["a"]],components:{draggable:s.a,AddComponentDialog:r["a"],EditComponentDialog:p["a"]},methods:{addComponent:function(t){var e=this.$cardscript.body[t];e.required&&e.required.includes("id")&&(e.data.id="collapsibleComponent".concat(this.clonedData.card.body.length+1));var a=Object.assign({},this.clonedData.card),n=d()(a.body);n.push(e.data),a.body=n,this.clonedData.card=a,this.addDialogShow=!1},editComponentOpen:function(t,e){this.editDialog.show=!0,this.editDialog.idx=e,this.editDialog.component=t},editComponent:function(t){var e=Object.assign({},this.clonedData.card),a=d()(e.body);a[this.editDialog.idx]=t,e.body=a,this.clonedData.card=e,this.editDialog.show=!1},deleteComponent:function(t){var e=this;this.$q.dialog({title:"Confirm",message:"Are you sure you want to remove this component?",cancel:!0,persistent:!0}).onOk((function(){var a=Object.assign({},e.clonedData.card),n=d()(a.body);n.splice(t,1),a.body=n,e.clonedData.card=a}))}}},g=u,m=a("2877"),h=Object(m["a"])(g,n,o,!1,null,null,null);e["default"]=h.exports}}]);