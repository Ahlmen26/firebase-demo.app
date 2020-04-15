(function(e){function t(t){for(var a,o,i=t[0],u=t[1],l=t[2],f=0,d=[];f<i.length;f++)o=i[f],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&d.push(s[o][0]),s[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);c&&c(t);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,i=1;i<n.length;i++){var u=n[i];0!==s[u]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},s={app:0},r=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var c=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("85ec"),s=n.n(a);s.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("img",{staticClass:"mb-2",attrs:{alt:"Vue logo",src:n("bd68"),width:"200"}}),a("router-view")],1)},r=[],o={},i=o,u=(n("034f"),n("2877")),l=Object(u["a"])(i,s,r,!1,null,null,null),c=l.exports,f=n("8c4f"),d=n("0628"),m=n.n(d),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("h1",[e._v("Login")]),n("div",{staticClass:"col-md-6 offset-3"},[n("form",{on:{submit:function(t){return t.preventDefault(),e.login()}}},[n("b-alert",{attrs:{show:e.alertShow,variant:e.alertType}},[e._v(e._s(e.alertMessage))]),n("div",{staticClass:"form-group"},[n("b-input",{attrs:{placeholder:"Email",id:"email",type:"email",name:"email",required:""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),n("div",{staticClass:"form-group"},[n("b-input",{attrs:{placeholder:"Password",id:"pass",type:"password",name:"pass"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),e.loginLoading?e._e():n("b-button",{staticClass:"btn btn-sm btn-info",attrs:{type:"submit"}},[e._v("Login")]),e.loginLoading?n("b-button",{staticClass:"btn btn-sm btn-info",attrs:{type:"button",disabled:""}},[n("b-spinner",{attrs:{small:"",type:"grow"}}),e._v("Login")],1):e._e()],1)])])},b=[],h=(n("ac1f"),n("5319"),n("8aa5")),g=n.n(h),v=(n("ea7b"),{data:function(){return{loginLoading:!1,alertShow:!1,alertType:"success",alertMessage:"",form:{email:"",password:""}}},methods:{login:function(){var e=this;this.loginLoading=!0,g.a.auth().signInWithEmailAndPassword(this.form.email,this.form.password).then((function(){e.notify("success","Login successful!"),setTimeout((function(){e.$router.replace("firebase-demo")}),2e3)})).catch((function(t){var n=t.message;e.notify("danger",n),e.loginLoading=!1}))},notify:function(e,t){this.alertShow=!0,this.alertType=e,this.alertMessage=t}}}),y=v,_=Object(u["a"])(y,p,b,!1,null,null,null),w=_.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("h1",[e._v("Firebase Demo")]),n("small",[n("a",{attrs:{href:"#"},on:{click:function(t){return e.signout()}}},[e._v("Sign out")])]),n("form",{staticClass:"mt-2",on:{submit:function(t){return t.preventDefault(),e.saveUser()}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",name:"name",id:"name",placeholder:"Your name",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),n("button",{attrs:{type:"submit"}},[e._v("Save")])]),n("br"),n("b-alert",{attrs:{variant:e.alertType,show:e.showAlert,dismissible:""}},[e._v(e._s(e.alertMsg))]),n("b-table",{staticClass:"table-sm",attrs:{bordered:"",striped:"",fields:e.columns,items:e.users,"per-page":e.perPage,"current-page":e.currentPage},scopedSlots:e._u([{key:"cell(data)",fn:function(t){return[e._v(" "+e._s(t.item.data.name)+" ")]}},{key:"cell(action)",fn:function(t){return[n("router-link",{staticClass:"btn btn-sm btn-info mr-2",attrs:{to:{name:"edit",params:{id:t.item.id}}}},[e._v("EDIT")]),n("b-button",{staticClass:"btn btn-sm btn-danger",on:{click:function(n){return e.removeUser(t.item)}}},[e._v("DELETE")])]}}])}),n("b-pagination",{attrs:{align:"center",size:"sm","per-page":e.perPage,"total-rows":e.users.length},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)},C=[],k=(n("4160"),n("b0c0"),n("159b"),n("66ce"),{data:function(){return{perPage:5,currentPage:1,showAlert:!1,alertType:"success",alertMsg:"",name:"",users:Array(),columns:[{key:"data",label:"Name",sortable:!0},{key:"action",label:"Action"}]}},mounted:function(){this.authenticate(),this.loadData()},methods:{authenticate:function(){var e=this;h["auth"]().onAuthStateChanged((function(t){t?console.log("User is signed-in: ",t.email):(e.$router.push("/"),console.log("User is signed-out"))}))},signout:function(){var e=this;h["auth"]().signOut().then((function(){e.$router.push("/")})).catch((function(e){console.log("Error: ",e)}))},loadData:function(){var e=this,t=h["firestore"]();t.collection("users").orderBy("name").onSnapshot((function(t){e.users=[],t.forEach((function(t){e.users.push({id:t.id,data:t.data()})}))}))},validateInput:function(){var e=h["database"]();return e.ref("user").orderByChild("name").equalTo(this.name).once("value",(function(e){return!e.exist()})),!0},saveUser:function(){var e=this,t=h["firestore"]();this.validateInput()?t.collection("users").add({name:this.name}).then((function(){e.name="",e.notify("success","Data successfully saved!")})).catch((function(e){console.log("Got an error: ",e)})):this.notify("danger","Name already exist!")},removeUser:function(e){var t=this,n=h["firestore"]();n.collection("users").doc(e.id).delete().then((function(){t.notify("success","Name successfully removed!")})).catch((function(e){console.log("Error: ",e)}))},notify:function(e,t){var n=this;this.showAlert=!0,this.alertType=e,this.alertMsg=t,setTimeout((function(){n.showAlert=!1}),3e3)}}}),O=k,P=(n("f6fe"),Object(u["a"])(O,x,C,!1,null,"05b40d66",null)),E=P.exports,L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.name?n("div",{staticClass:"container"},[n("h1",[e._v("Edit")]),n("form",{staticClass:"col-6 offset-3",on:{submit:function(t){return t.preventDefault(),e.update()}}},[n("div",{staticClass:"form-group"},[n("b-alert",{attrs:{show:e.showAlert,variant:e.alertType,dismissible:""}},[e._v(e._s(e.alertMessage))]),n("b-input",{attrs:{size:"sm",type:"text"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),e.submitLoading?e._e():n("b-button",{staticClass:"btn btn-sm btn-success",attrs:{type:"submit"}},[e._v("Submit")]),e.submitLoading?n("b-button",{staticClass:"btn btn-sm btn-success",attrs:{disabled:""}},[n("b-spinner",{attrs:{type:"grow",small:""}}),e._v(" Submit")],1):e._e(),n("p",{attrs:{align:"left"}},[n("router-link",{attrs:{to:"/firebase-demo"}},[e._v("← back")])],1)],1)]):e._e()},S=[],T=n("59ca"),j=n.n(T),M={data:function(){return{submitLoading:!1,showAlert:!1,alertType:"success",alertMessage:"",name:""}},mounted:function(){this.loadUser()},methods:{loadUser:function(){var e=this,t=j.a.firestore(),n=this.$route.params.id;t.collection("users").doc(n).get().then((function(t){t.exists?e.name=t.data().name:e.$router.push("/NotFound")})).catch((function(e){console.log("Error: ",e)}))},update:function(){var e=this,t=j.a.firestore(),n=t.collection("users"),a=this.$route.params.id;this.submitLoading=!0,n.doc(a).set({name:this.name}).then((function(){e.notify("success","user successfully updated."),e.submitLoading=!1})).catch((function(t){e.notify("danger",t),e.submitLoading=!1}))},notify:function(e,t){this.showAlert=!0,this.alertType=e,this.alertMessage=t}}},$=M,A=Object(u["a"])($,L,S,!1,null,null,null),D=A.exports,U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("b-jumbotron",{attrs:{header:"404",lead:"Page Not Found"}},[n("router-link",{attrs:{to:"/"}},[e._v("Back to login")])],1)],1)},I=[],N={},z=N,B=Object(u["a"])(z,U,I,!1,null,null,null),F=B.exports;a["default"].use(f["a"]);var q=new f["a"]({routes:[{path:"/",name:"login",component:w},{path:"/app.firebase-demo",redirect:"/firebase-demo"},{path:"/firebase-demo",name:"firebase-demo",component:E},{path:"/firebase-demo/edit/:id",name:"edit",component:D},{path:"*",component:F},{path:"/NotFound",component:F}]}),W=q,J={apiKey:"AIzaSyBqCowMY5OFHaEueWhWe6_ZzczVOk2xKgg",authDomain:"fir-demos-ea431.firebaseapp.com",databaseURL:"https://fir-demos-ea431.firebaseio.com",projectId:"fir-demos-ea431",storageBucket:"fir-demos-ea431.appspot.com",messagingSenderId:"102947345940",appId:"1:102947345940:web:2230bcd8465e52dc41f901"};g.a.initializeApp(J);var K={firebaseConfig:J},V=n("5f5b"),Y=n("b1e0");n("f9e3"),n("2dd8");a["default"].use(V["a"]),a["default"].use(f["a"]),a["default"].use(m.a),a["default"].use(Y["a"]),a["default"].config.productionTip=!1,new a["default"]({firebaseConfig:K,router:W,render:function(e){return e(c)}}).$mount("#app")},"85ec":function(e,t,n){},ab89:function(e,t,n){},bd68:function(e,t,n){e.exports=n.p+"img/logo-built_black.4f3da63f.png"},f6fe:function(e,t,n){"use strict";var a=n("ab89"),s=n.n(a);s.a}});
//# sourceMappingURL=app.f24ee1fe.js.map