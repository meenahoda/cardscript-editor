(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d209b1e"],{a9c3:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-layout",{attrs:{view:"lHh Lpr lFf"}},[o("q-header",{attrs:{elevated:""}},[o("q-toolbar",["edit"===t.$route.name||"preview"===t.$route.name||"viewJson"===t.$route.name||"importJson"===t.$route.name?o("q-btn",{attrs:{icon:"arrow_back",round:"",flat:""},on:{click:t.goBack}}):t._e(),o("q-toolbar-title",[t._v("\n        Cardscript Editor\n      ")]),"edit"===t.$route.name?o("q-btn",{attrs:{icon:"save",round:"",flat:""},on:{click:t.save}},[o("q-tooltip",[t._v("\n          Save\n        ")])],1):t._e(),"edit"===t.$route.name?o("q-btn",{attrs:{icon:"visibility",round:"",flat:""},on:{click:t.preview}},[o("q-tooltip",[t._v("\n          Preview\n        ")])],1):t._e(),"edit"===t.$route.name?o("q-btn",{attrs:{icon:"code",round:"",flat:""},on:{click:t.viewJson}},[o("q-tooltip",[t._v("\n          View JSON\n        ")])],1):t._e()],1)],1),o("q-page-container",[o("router-view")],1)],1)},r=[],a=o("bd4c"),i={name:"Layout",computed:{cardId:function(){return this.$store.state.app.cardId},cardscript:function(){return this.$store.state.app.cardscript}},methods:{goBack:function(){this.$router.go(-1)},preview:function(){this.save(),this.$router.push({path:"/".concat(this.cardId,"/preview")})},save:function(){this.$store.commit("app/saveCurrentCard")},viewJson:function(){this.save(),this.$router.push({path:"/".concat(this.cardId,"/view-json")})},formatDate:a["a"].formatDate}},c=i,s=o("2877"),u=Object(s["a"])(c,n,r,!1,null,null,null);e["default"]=u.exports}}]);