(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["3834c619"],{2366:function(t,e){for(var r=[],n=0;n<256;++n)r[n]=(n+256).toString(16).substr(1);function s(t,e){var n=e||0,s=r;return[s[t[n++]],s[t[n++]],s[t[n++]],s[t[n++]],"-",s[t[n++]],s[t[n++]],"-",s[t[n++]],s[t[n++]],"-",s[t[n++]],s[t[n++]],"-",s[t[n++]],s[t[n++]],s[t[n++]],s[t[n++]],s[t[n++]],s[t[n++]]].join("")}t.exports=s},"8b24":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("q-page",{staticClass:"q-pa-xl"},[r("div",{staticClass:"row justify-around text-center text-grey-8"},t._l(t.actions,(function(e,n){return r("q-card",{directives:[{name:"ripple",rawName:"v-ripple"}],key:n,staticClass:"q-pa-md q-mb-md col-md-4 col-sm-12 col-xs-12 cursor-pointer",on:{click:function(t){return e.launch()}}},[r("q-card-section",[r("div",{staticClass:"text-h4"},[t._v(t._s(e.title))])]),r("q-card-section",{staticStyle:{"font-size":"3rem"}},[r("q-icon",{attrs:{name:e.icon}})],1),r("q-card-section",[r("div",{staticClass:"text-subtitle1"},[t._v(t._s(e.description))])])],1)})),1),r("q-card",{staticClass:"q-mt-lg"},[r("q-card-section",[Object.keys(t.cards).length>0?r("q-list",[r("q-item-label",{attrs:{header:""}},[t._v("Existing cards from local storage:")]),t._l(t.cards,(function(e,n){return r("q-item",{key:n},[r("q-item-section",[r("q-item-label",[t._v(t._s(t.getTitle(e)))])],1),r("q-item-section",{attrs:{side:""}},[r("div",{staticClass:"text-grey-8 q-gutter-xs"},[r("q-btn",{attrs:{size:"12px",flat:"",dense:"",round:"",icon:"edit"},on:{click:function(e){return t.launchCard(n)}}}),r("q-btn",{attrs:{size:"12px",flat:"",dense:"",round:"",icon:"delete"},on:{click:function(e){return t.deleteCard(n)}}})],1)])],1)}))],2):t._e()],1)],1)],1)},s=[],i=(r("f751"),r("c437")),a={name:"PageIndex",data:function(){return{actions:[{title:"Create",icon:"add_circle_outline",description:"Create a new card from scratch using the drag-n-drop editor.",launch:this.startNewCardscript},{title:"Import",icon:"insert_drive_file",description:"Import an existing card from JSON.",launch:this.importJson}]}},methods:{startNewCardscript:function(){var t=i();this.$store.commit("app/setCardId",t),this.$store.commit("app/resetCardscript"),this.launchCard(t)},importJson:function(){this.$router.push({path:"/import-json"})},launchCard:function(t){this.$router.push({path:"/".concat(t,"/edit")})},deleteCard:function(t){var e=this;this.$q.dialog({title:"Confirm",message:"Are you sure you want to remove this card?",cancel:!0,persistent:!0}).onOk((function(){var r=Object.assign({},e.cards);delete r[t],e.cards=r}))},getTitle:function(t){return t.templateMeta&&t.templateMeta.title?t.templateMeta.title:""}},computed:{cards:{get:function(){return this.$store.state.app.cards},set:function(t){this.$store.commit("app/setCards",t)}}}},o=a,c=r("2877"),d=Object(c["a"])(o,n,s,!1,null,null,null);e["default"]=d.exports},c437:function(t,e,r){var n,s,i=r("e1f4"),a=r("2366"),o=0,c=0;function d(t,e,r){var d=e&&r||0,l=e||[];t=t||{};var u=t.node||n,p=void 0!==t.clockseq?t.clockseq:s;if(null==u||null==p){var m=i();null==u&&(u=n=[1|m[0],m[1],m[2],m[3],m[4],m[5]]),null==p&&(p=s=16383&(m[6]<<8|m[7]))}var f=void 0!==t.msecs?t.msecs:(new Date).getTime(),v=void 0!==t.nsecs?t.nsecs:c+1,h=f-o+(v-c)/1e4;if(h<0&&void 0===t.clockseq&&(p=p+1&16383),(h<0||f>o)&&void 0===t.nsecs&&(v=0),v>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");o=f,c=v,s=p,f+=122192928e5;var q=(1e4*(268435455&f)+v)%4294967296;l[d++]=q>>>24&255,l[d++]=q>>>16&255,l[d++]=q>>>8&255,l[d++]=255&q;var C=f/4294967296*1e4&268435455;l[d++]=C>>>8&255,l[d++]=255&C,l[d++]=C>>>24&15|16,l[d++]=C>>>16&255,l[d++]=p>>>8|128,l[d++]=255&p;for(var g=0;g<6;++g)l[d+g]=u[g];return e||a(l)}t.exports=d},e1f4:function(t,e){var r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(r){var n=new Uint8Array(16);t.exports=function(){return r(n),n}}else{var s=new Array(16);t.exports=function(){for(var t,e=0;e<16;e++)0===(3&e)&&(t=4294967296*Math.random()),s[e]=t>>>((3&e)<<3)&255;return s}}}}]);