(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d209b1e"],{a9c3:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-header",[a("q-toolbar",["edit"===t.$route.name||"preview"===t.$route.name||"viewJson"===t.$route.name||"importJson"===t.$route.name?a("q-btn",{attrs:{icon:"arrow_back",round:"",flat:""},on:{click:t.goBack}}):t._e(),a("q-toolbar-title",[t._v("\n        Cardscript Editor\n      ")]),"edit"===t.$route.name?a("q-btn",{attrs:{icon:"more_vert",round:"",flat:""}},[a("q-menu",[a("q-list",{staticStyle:{"min-width":"100px"}},t._l(t.actions,(function(e,r){return a("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],key:r,attrs:{clickable:""},on:{click:e.launch}},[a("q-item-section",[t._v(t._s(e.title))])],1)})),1)],1)],1):t._e()],1)],1),a("q-page-container",[a("router-view")],1)],1)},i=[],n=a("bd4c"),o={name:"Layout",data:function(){return{actions:[{title:"Save",launch:this.save},{title:"Preview",launch:this.preview},{title:"View JSON",launch:this.viewJson}]}},computed:{cardId:function(){return this.$store.state.app.cardId},cardscript:function(){return this.$store.state.app.cardscript}},methods:{goBack:function(){this.$router.go(-1)},preview:function(){this.save(),this.$router.push({path:"/".concat(this.cardId,"/preview")})},save:function(){this.$store.commit("app/saveCurrentCard")},viewJson:function(){this.save(),this.$router.push({path:"/".concat(this.cardId,"/view-json")})},formatDate:n["b"].formatDate}},c=o,s=a("2877"),u=Object(s["a"])(c,r,i,!1,null,null,null);e["default"]=u.exports}}]);