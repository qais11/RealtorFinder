(function(t){function e(e){for(var o,s,r=e[0],l=e[1],p=e[2],u=0,c=[];u<r.length;u++)s=r[u],n[s]&&c.push(n[s][0]),n[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);m&&m(e);while(c.length)c.shift()();return i.push.apply(i,p||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],o=!0,r=1;r<a.length;r++){var l=a[r];0!==n[l]&&(o=!1)}o&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var o={},n={app:0},i=[];function s(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=o,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(a,o,function(e){return t[e]}.bind(null,o));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var p=0;p<r.length;p++)e(r[p]);var m=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var o=a("c21b"),n=a.n(o);n.a},"084b":function(t,e,a){"use strict";var o=a("992a"),n=a.n(o);n.a},"0a1c":function(t,e,a){},"0b63":function(t,e,a){},2240:function(t,e,a){"use strict";var o=a("bad1"),n=a.n(o);n.a},"247c":function(t,e,a){},"2c38":function(t,e,a){"use strict";var o=a("7672"),n=a.n(o);n.a},3626:function(t,e,a){},3947:function(t,e,a){"use strict";var o=a("247c"),n=a.n(o);n.a},4665:function(t,e,a){"use strict";var o=a("74da"),n=a.n(o);n.a},"511b":function(t,e,a){"use strict";var o=a("8193"),n=a.n(o);n.a},5368:function(t,e,a){"use strict";var o=a("3626"),n=a.n(o);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var o=a("2b0e"),n=a("755e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Nav"),a("side-bar",{on:{openSideBar:function(e){t.openSideBar()}}}),a("Map"),a("div",{ref:"popUp"},[a("Info")],1),a("Footer")],1)},s=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav-bar",on:{click:function(e){t.closeSideBar()}}},[a("div",{staticClass:"icon"},[a("key-value",{attrs:{"key-property":"RealtorFinder","key-size":"32px","key-color":"#42b883","no-value":"false",keyFont:"'Kaushan Script', cursive"}})],1),a("div",{staticClass:"button-container"},[a("button",{staticClass:"dropdown-btn",attrs:{disabled:!t.continueAsGuest},on:{click:t.openList}},[t._v("\n            "+t._s(t.city)+"\n        ")]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.listActive,expression:"listActive"}],staticClass:"dropdown-content"},t._l(t.cities,function(e,o){return a("button",{key:o,staticClass:"city",on:{click:function(a){t.chooseState(e)}}},[t._v("\n                "+t._s(e)+"\n            ")])}))])])},l=[],p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"key-value-container"},[a("p",{staticClass:"key",style:{fontSize:t.keySize,color:t.keyColor,fontFamily:t.keyFont}},[t._v(t._s(t.keyProperty))]),a("p",{directives:[{name:"show",rawName:"v-show",value:t.isValue,expression:"isValue"}],staticClass:"key",style:{fontSize:t.keySize,color:t.keyColor}},[t._v(":")]),a("p",{directives:[{name:"show",rawName:"v-show",value:t.isValue&&!t.isPhone&&!t.isWeb,expression:"isValue && !isPhone && !isWeb"}],staticClass:"value",style:{fontSize:t.valueSize,color:t.valueColor,fontFamily:t.valueFont}},[t._v(" "+t._s(t.value)+" ")]),a("a",{directives:[{name:"show",rawName:"v-show",value:t.isPhone,expression:"isPhone"}],attrs:{href:"tel:"+t.value}},[t._v(t._s(t.value))]),a("a",{directives:[{name:"show",rawName:"v-show",value:t.isWeb,expression:"isWeb"}],attrs:{href:t.value,target:"_blank"}},[t._v(t._s(t.value))])])},m=[],u={name:"KeyValue",props:{keyProperty:String,value:String,keySize:String,valueSize:String,valueColor:String,keyColor:String,isValue:String,isPhone:String,isWeb:String,keyFont:String,valueFont:String},methods:{}},c=u,h=(a("5368"),a("2877")),d=Object(h["a"])(c,p,m,!1,null,"353d1be7",null);d.options.__file="keyValue.vue";var g=d.exports,v={name:"Nav",props:{msg:String},data:function(){return{cities:["texas","florida","california","new jersey","arizona","north carolina","tennessee","colorado","washington","virginia"],city:"States",listActive:null,continueAsGuest:!1}},components:{KeyValue:g},mounted:function(){var t=this;this.$root.$on("listInActive",function(){t.listActive=!1}),this.$root.$on("continueAsGuest",function(){t.continueAsGuest=!0})},methods:{closeSideBar:function(){this.$root.$emit("closeSideBar")},openList:function(){this.listActive=!0},chooseState:function(t){this.$root.$emit("chooseState",t),this.listActive=!1}}},f=v,b=(a("a242"),Object(h["a"])(f,r,l,!1,null,"9201c438",null));b.options.__file="nav.vue";var y=b.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",class:{animate:t.open}},[a("div",{staticClass:"close-btn",on:{click:function(e){t.closeSideBar()}}},[t._v("\n        X\n    ")]),a("div",{staticClass:"image-container"},[a("realtor-photo",{attrs:{height:"190px",width:"190px",url:t.realtor.url}})],1),a("div",{staticClass:"info-container"},[a("key-value",{attrs:{"key-property":"Name",value:t.realtor.name,"value-size":"16px","key-size":"16px","value-color":"#35495e","key-color":"#42b883","is-value":"true"}}),a("key-value",{attrs:{"key-property":"Email",value:t.realtor.email,"value-size":"16px","key-size":"16px","value-color":"#35495e","key-color":"#42b883","is-value":"true"}}),t.realtor.website?a("key-value",{attrs:{"key-property":"Website",value:t.realtor.website,"value-size":"16px","key-size":"16px","value-color":"#35495e","key-color":"#42b883","is-web":"true","is-value":"true"}}):t._e(),t.realtor.cell?a("key-value",{attrs:{"key-property":"Cell",value:t.realtor.cell,"value-size":"16px","key-size":"16px","value-color":"#35495e","key-color":"#42b883","is-value":"true","is-phone":"true"}}):t._e(),t.realtor.phone?a("key-value",{attrs:{"key-property":"Phone",value:t.realtor.phone,"value-size":"16px","key-size":"16px","value-color":"#35495e","key-color":"#42b883","is-value":"true","is-phone":"true"}}):t._e(),t.realtor.li?a("key-value",{attrs:{"key-property":"License#",value:t.realtor.li,"value-size":"16px","key-size":"16px","value-color":"#35495e","key-color":"#42b883","is-value":"true"}}):t._e()],1),a("section",{directives:[{name:"show",rawName:"v-show",value:t.showEmailForm,expression:"showEmailForm"}],staticClass:"side-bar__email-form"},[a("email-form",{attrs:{"realtor-name":t.realtor.name,"send-to":t.realtor.email}})],1),a("section",{directives:[{name:"show",rawName:"v-show",value:!t.showEmailForm,expression:"!showEmailForm"}]},[a("email-has-been-sent",{attrs:{"realtor-name":t.realtor.name}})],1)])},_=[],j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"image-container",style:{width:t.width,height:t.height,zIndex:t.zIndex,backgroundColor:t.bcolor,"background-image":"url("+t.url+")"}},[a("p",{staticClass:"number"},[t._v(t._s(t.num))])])},k=[],x=(a("c5f6"),{name:"RealtorPhoto",props:{url:String,width:String,height:String,zIndex:Number,num:Number,bcolor:String},methods:{}}),S=x,z=(a("2240"),Object(h["a"])(S,j,k,!1,null,"d81a2d8e",null));z.options.__file="photo.vue";var A=z.exports,$=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[o("h4",[t._v("Contact Me")]),o("div",{staticClass:"email-form-wrapper"},[o("label",[t._v("\n                From: "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",placeholder:"Your email address"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),o("label",[t._v("\n                Phone #: "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],attrs:{type:"number",placeholder:"Your phone number"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})]),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],attrs:{cols:"30",rows:"10",placeholder:"Your message here ...",required:""},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}}),t.error?o("div",[o("p",{staticClass:"form-error"},[t._v(t._s(t.error))])]):t._e(),o("img",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}],staticClass:"loading",attrs:{src:a("cae3"),alt:"loading ..."}})]),o("button",{attrs:{disabled:t.isLoading,type:"submit"}},[t._v("Send Email")])])])},C=[],E=(a("96cf"),a("3040")),N=a("bc3a"),F=a.n(N),O={props:{sendTo:String,realtorName:String},data:function(){return{isLoading:!1,error:null,email:null,phone:null,message:null}},methods:{submit:function(){this.validateFormAndShowHideErrors()&&(this.isLoading=!0,this.sendEmail())},validateFormAndShowHideErrors:function(){if(this.error=null,this.phone&&(this.phone.length<10||this.phone.length>13))this.error="*please enter a valid US phone number";else{if(this.email||this.phone)return!0;this.error="*please enter eather your phone number or your email address"}},sendEmail:function(){var t=Object(E["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,F.a.post("/sendEmail",this.buildEmailObject());case 3:this.isLoading=!1,this.$root.$emit("showEmailForm",!1),this.message=null,t.next=13;break;case 8:t.prev=8,t.t0=t["catch"](0),this.isLoading=!1,this.error="*Sorry, we are facing technical difficulties, there was an error sending the email",console.log(t.t0);case 13:case"end":return t.stop()}},t,this,[[0,8]])}));return function(){return t.apply(this,arguments)}}(),buildEmailObject:function(){return{to:this.sendTo,realtorName:this.realtorName,message:this.message,userPhone:this.phone,userEmail:this.email}}},mounted:function(){var t=this;this.$root.$on("ClearForm",function(){t.message=null,t.error=null})}},P=O,I=(a("084b"),Object(h["a"])(P,$,C,!1,null,"32b8eb00",null));I.options.__file="EmailForm.vue";var B=I.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h3",[t._v("The email has been sent successfully \n        "),a("br"),t._v(" "+t._s(t.realtorName)+" will contact you as soon as possible \n    ")]),a("a",{on:{click:t.sendAnotherEmail}},[t._v("Send Another Email")])])},T=[],M={props:{realtorName:String},methods:{sendAnotherEmail:function(){this.$root.$emit("showEmailForm",!0)}}},R=M,q=(a("4665"),Object(h["a"])(R,L,T,!1,null,"8a56ad92",null));q.options.__file="EmailHasBeenSent.vue";var H=q.exports,G={name:"SideBar",props:{msg:String},components:{RealtorPhoto:A,KeyValue:g,EmailForm:B,EmailHasBeenSent:H},data:function(){return{showEmailForm:!0,open:!1,realtor:{url:"",name:"",email:"",cell:"",phone:"",id:""}}},methods:{closeSideBar:function(){this.open=!1},openSideBar:function(t){this.open^=!0,this.realtor=t,this.$root.$emit("ClearForm"),this.$root.$emit("showEmailForm",!0)}},mounted:function(){var t=this;this.$root.$on("openSideBar",this.openSideBar),this.$root.$on("closeSideBar",this.closeSideBar),this.$root.$on("showEmailForm",function(e){t.showEmailForm=e})}},V=G,D=(a("511b"),Object(h["a"])(V,w,_,!1,null,"de81426e",null));D.options.__file="sideBar.vue";var K=D.exports,W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"map"}},[a("button",{directives:[{name:"show",rawName:"v-show",value:t.zoom>3,expression:"zoom > 3"}],staticClass:"reset-btn",on:{click:function(e){t.resetZoom()}}},[t._v("Reset Zoom")]),a("GmapMap",{ref:"Rmap",style:t.styles,attrs:{width:"100%",center:t.center,zoom:t.zoom,"map-type-id":"terrain",options:t.mapOptions},nativeOn:{click:function(e){t.closeStatesList()}}},[t._l(t.realtorsNumInStates,function(e,o){return a("gmap-custom-marker",{directives:[{name:"show",rawName:"v-show",value:t.zoom<=5,expression:"zoom <= 5"}],key:"b-"+o,attrs:{marker:e.position},nativeOn:{click:function(a){t.zoomToState(e.position)}}},[a("realtor-photo",{attrs:{height:"30px",width:"30px",bcolor:"#040787",num:e.realtors,url:""}})],1)}),t._l(t.realtorsNumInCities,function(e,o){return a("gmap-custom-marker",{directives:[{name:"show",rawName:"v-show",value:t.zoom>=6&&t.zoom<=7,expression:"zoom >= 6 && zoom <= 7"}],key:e[o],attrs:{marker:e.position},nativeOn:{click:function(a){t.zoomToCity(e.position)}}},[a("span",{staticClass:"beacon"},[a("div",{staticClass:"realtors-city-count"},[t._v(t._s(e.realtors))])])])}),t._l(t.realtors,function(e){return a("gmap-custom-marker",{directives:[{name:"show",rawName:"v-show",value:t.zoom>=8,expression:"zoom >= 8"}],key:e.cell,attrs:{marker:e.position},nativeOn:{click:function(a){t.openSideBar(e)}}},[a("realtor-photo",{attrs:{height:"30px",width:"30px",url:e.thumbnail}})],1)})],2)],1)},Y=[],U=(a("7f7f"),a("6cee")),Z={Data:[{id:"0",state:"texas",city:"dallas",email:"mkadhim.realtor@gmail.com",cell:"346.331.8824",phone:"214.731.3163",name:"Mohammed Kadhim",position:{lat:32.776665,lng:-96.796989},url:"http://d.up-00.com/2018/11/154217156338422.jpg",thumbnail:"https://f.top4top.net/p_10711w2gs1.jpg"},{id:"1",state:"texas",city:"san antonio",email:"sbaraz.realty@gmail.com",website:"http://www.sambaraz.kw.com",phone:"2108999186",name:"Sam Baraz",position:{lat:29.424349,lng:-98.292142},url:"http://d.up-00.com/2018/11/154217156296021.jpg",thumbnail:"https://a.top4top.net/p_1071f0xfd2.jpg"},{id:"2",state:"florida",city:"orlando",email:"realtoralis@gmail.com",phone:"4436913528",name:"Ali Alrammahy",website:"http://www.RealtorAlis.com",position:{lat:28.538336,lng:-81.379234},url:"http://d.up-00.com/2018/11/154232975348361.jpg",thumbnail:"https://b.top4top.net/p_1071o8c6y8.jpg"},{id:"3",state:"california",city:"san diego",email:"wmohsin@century21award.com",phone:"6194389291",website:"http://www.wisammohsin.com",name:"Wisam Mohsin",li:"01979985",position:{lat:32.715736,lng:-117.161087},url:"http://d.up-00.com/2018/11/154217156367373.jpg",thumbnail:"https://b.top4top.net/p_1071o4hse3.jpg"},{id:"4",state:"texas",city:"houston",email:"qussay.abdulrazzaq@kw.com",phone:"7133917063",website:"http://www.QussayAbdulrazzaq.com",name:"Qusay Abdulrazzaq",position:{lat:29.760427,lng:-95.369804},url:"http://d.up-00.com/2018/11/154217156435724.jpg",thumbnail:"https://a.top4top.net/p_1071zmkre10.jpg"},{id:"5",state:"florida",city:"boca raton",email:"DaveAbed@thekeysrus.com",cell:"561.704.4460",phone:"561.826.9333",website:"http://www.thekeysrus.com",name:"Ahmed (Dave) Abdul Reda",position:{lat:26.368305,lng:-80.128929},url:"https://c.top4top.net/p_1067k76ii1.jpg",thumbnail:"https://f.top4top.net/p_1071ps88j9.jpg"},{id:"6",state:"texas",city:"houston",email:"gadawp@gmail.com",phone:"832.660.2881",website:"http://www.walzelproperties.com",name:"Gada Alzubaidi",position:{lat:29.641999,lng:-95.353285},url:"https://c.top4top.net/p_1071bq4o31.jpg",thumbnail:"https://d.top4top.net/p_1071snewn1.jpg"},{id:"7",state:"texas",city:"dallas",email:"raed@kw.com",cell:"469.406.4792",phone:"972.747.5100",website:"http://www.raed@kw.com",name:"Raed Alsabah",position:{lat:32.866152,lng:-96.795432},url:"https://c.top4top.net/p_106752zcb1.jpg",thumbnail:"https://e.top4top.net/p_1071y4u4y2.jpg"},{id:"8",state:"texas",city:"houston",email:"maya.realty3@gmail.com",cell:"832.726.8667",website:"http://www.thehorizonteam.com",name:"Maya Ali",position:{lat:29.712749,lng:-95.467202},url:"https://d.top4top.net/p_10679yein1.jpg",thumbnail:"https://e.top4top.net/p_1071gg5nn8.jpg"},{id:"9",state:"california",city:"san dimas",email:"malbassam@kw.com",cell:"909.203.0406",name:"Majid Al Bassam",website:"http://www.majidalbassam.com",position:{lat:34.106682,lng:-117.80275},url:"https://f.top4top.net/p_1067snkpm1.jpg",thumbnail:"https://d.top4top.net/p_1071elnkw7.jpg"},{id:"10",state:"texas",city:"austin",email:"wahabsalihi@gmail.com",cell:"512.576.8175",name:"Wahab Salihi",position:{lat:30.267153,lng:-97.743057},url:"https://c.top4top.net/p_10672jmc41.jpg",thumbnail:"https://a.top4top.net/p_1071p6xz04.jpg"},{id:"11",state:"california",city:"orange county",email:"jsarmad@yahoo.com",cell:"949.606.5646",name:"Sarmad Jalal",position:{lat:33.717472,lng:-117.831146},url:"https://a.top4top.net/p_10677z1qn1.jpg",thumbnail:"https://c.top4top.net/p_1071f7c0r6.jpg"},{id:"12",state:"new jersey",city:"new jersey",email:"maldourirealestate@gmail.com",cell:"856.316.6406",phone:"856.858.3200",name:"Moustafa Aldouri",position:{lat:39.59891,lng:-74.673455},url:"https://d.top4top.net/p_1067x75j51.jpg",thumbnail:"https://a.top4top.net/p_10711jgui4.jpg"},{id:"13",state:"new jersey",city:"new jersey",email:"husseinh2004@gmail.com",cell:"201.962.6295",phone:"973.253.2800 x5723",name:"Hussein Al-Bayati",website:"http://www.homesbyhussein.kwrealty.com",position:{lat:39.865051,lng:-74.580112},url:"https://e.top4top.net/p_1067lp48d1.jpg",thumbnail:"https://f.top4top.net/p_1071u6t0v3.jpg"},{id:"14",state:"arizona",city:"tempe",email:"nadia1978h@gmail.com",cell:"480.599.9183",phone:"480.777.4500",name:"Nadia Mohammed",position:{lat:33.425522,lng:-111.941254},url:"https://a.top4top.net/p_10673dhjg1.jpg",thumbnail:"https://f.top4top.net/p_1071xv1xw3.jpg"},{id:"15",state:"north carolina",city:"charlotte",email:"layth@laythrealestate.com",cell:"704.890.1975",name:"Layth Duroobi",position:{lat:35.228067,lng:-80.817549},url:"https://b.top4top.net/p_1067wh28x1.jpg",thumbnail:"https://d.top4top.net/p_1071eq08f1.jpg"},{id:"16",state:"tennessee",city:"antioch",email:"husseinalnuaimi.nexthome@gmail.com",cell:"615.753.9958",phone:"615.600.5185",name:"Hussein Alnuaimi",position:{lat:36.050789,lng:-86.646912},url:"https://f.top4top.net/p_1068x070p1.jpg",thumbnail:"https://f.top4top.net/p_1071qkhx76.jpg"},{id:"17",state:"colorado",city:"centennial",email:"jalilireem@gmail.com",cell:"720.447.7377",name:"Reem Jalili",position:{lat:39.597309,lng:-104.853813},url:"https://e.top4top.net/p_10685we491.jpg",thumbnail:"https://a.top4top.net/p_10712v3sz7.jpg"},{id:"18",state:"washington",city:"seattle",email:"altayyaradnan@gmail.com",cell:"206.765.0987",name:"Adnan Al-Tayyar",position:{lat:47.606209,lng:-122.332069},url:"https://e.top4top.net/p_1068jawhf1.jpg",thumbnail:"https://b.top4top.net/p_1071mb2cy2.jpg"},{id:"19",state:"texas",city:"dallas",email:"al.ibrahim@remax.net",cell:"469.626.2515",phone:"972.208.9200",name:"Al Ibrahim",position:{lat:32.676883,lng:-96.79662},url:"https://a.top4top.net/p_1068jsq5m3.jpg",thumbnail:"https://d.top4top.net/p_1071ovneo7.jpg"},{id:"20",state:"texas",city:"dallas",email:"omar.al@remax.net",cell:"214.859.0335",phone:"972.208.9200",name:"Omar Al-Tememe",position:{lat:32.765715,lng:-96.684064},url:"https://f.top4top.net/p_1068z74my2.jpg",thumbnail:"https://b.top4top.net/p_1071yh2hs5.jpg"},{id:"21",state:"california",city:"san diego",email:"shallalrealty@gmail.com",cell:"858.335.5142",name:"Mohammad Shallal",position:{lat:32.772328,lng:-116.940424},url:"https://b.top4top.net/p_1068i9iuk4.jpg",thumbnail:"https://e.top4top.net/p_1071murjj2.jpg"},{id:"22",state:"texas",city:"austin",email:"reemadam.realtor@gmail.com",cell:"512.537.2201",name:"Reem Adam",position:{lat:30.272365,lng:-97.638485},url:"https://d.top4top.net/p_1068lm8tf6.jpg",thumbnail:"https://c.top4top.net/p_107112rf16.jpg"},{id:"23",state:"arizona",city:"tempe",email:"nawalmo19@gmail.com",cell:"602.488.9554",name:"Nawal Mohammed",position:{lat:33.436957,lng:-112.140608},url:"https://e.top4top.net/p_10687pud27.jpg",thumbnail:"https://e.top4top.net/p_1071ntmxh8.jpg"},{id:"24",state:"virginia",city:"vienna",email:"yusur1979@gmail.com",cell:"412.880.9738",phone:"703.378.8810",name:"Yusur Almukhtar",position:{lat:38.903481,lng:-77.262817},url:"https://c.top4top.net/p_10681dzyw5.jpg",thumbnail:"https://b.top4top.net/p_10717o0s75.jpg"},{id:"25",state:"texas",city:"dallas",email:"ana.re.agent@gmail.com",phone:"214.731.3163",cell:"469.751.7533",name:"Ana Mahdi",position:{lat:32.770714,lng:-96.907738},url:"https://f.top4top.net/p_1139xnqvn1.jpg",thumbnail:"https://f.top4top.net/p_1139xnqvn1.jpg"},{id:"26",state:"california",city:"orange county",email:"adam1@kw.com",phone:"714.869.5461",name:"Adam Hammodat",li:"1995901",position:{lat:33.846046,lng:-117.889886},website:"http://www.welcomehomeorangecounty.com",url:"https://a.top4top.net/p_1139ri6k92.jpg",thumbnail:"https://a.top4top.net/p_1139ri6k92.jpg"},{id:"27",state:"virginia",city:"center virginia",email:"aliahmed@weichert.com",phone:"7202.309.4011",name:"Ali Ahmed",position:{lat:37.431572,lng:-78.656891},url:"https://b.top4top.net/p_1139y03oo3.jpg",thumbnail:"https://b.top4top.net/p_1139y03oo3.jpg"},{id:"28",state:"virginia",city:"vienna",email:"amaalsami@kw.com",phone:"240.461.1240",name:"Amaal Sami",position:{lat:38.742637,lng:-77.070038},url:"https://c.top4top.net/p_1139mc2714.jpg",thumbnail:"https://c.top4top.net/p_1139mc2714.jpg"},{id:"29",state:"texas",city:"houston",email:"ziad.alkayali@kw.com",phone:"832.661.7270",name:"Ziad Al Kayali",position:{lat:29.669969,lng:-95.24016},website:"http://www.ziadalkayali.com",url:"https://d.top4top.net/p_1139coezx5.jpg",thumbnail:"https://d.top4top.net/p_1139coezx5.jpg"},{id:"30",state:"virginia",city:"vienna",email:"sale@ibteesamhomes.com",phone:"751.225.5652",name:"Ibteesam Al Slimawy",position:{lat:38.909771,lng:-76.99561},website:"http://www.ibteesamhomes.com",url:"https://e.top4top.net/p_11393t1sw6.jpg",thumbnail:"https://e.top4top.net/p_11393t1sw6.jpg"},{id:"31",state:"texas",city:"dallas",email:"Ibrahimatc21@gmail.com",phone:"469.952.8792",name:"Ibrahim Azez",position:{lat:32.681755,lng:-96.673318},website:"http://www.century21judgefite.com",url:"https://c.top4top.net/p_11390z7dp1.jpg",thumbnail:"https://c.top4top.net/p_11390z7dp1.jpg"},{id:"32",state:"texas",city:"houston",email:"saja@westsidehoustonhomes.com",phone:"713.898.3427",name:"Saja Mahdi",position:{lat:29.770999,lng:-95.239699},website:"http://www.westsidehoustonhomes.com",url:"https://a.top4top.net/p_1139htc681.jpg",thumbnail:"https://a.top4top.net/p_1139htc681.jpg"},{id:"33",state:"north carolina",city:"raleigh",email:"rod@bestinvestmentrealty.com",phone:"919.931.7475",name:"Rod Al Haddad",position:{lat:35.779591,lng:-78.638176},website:"http://www.bestinvestmentrealty.com",url:"https://e.top4top.net/p_1143reggh1.jpg",thumbnail:"https://e.top4top.net/p_1143reggh1.jpg"}],statesPositions:[{name:"texas",position:{lat:31.968599,lng:-99.90181},realtors:0},{name:"florida",position:{lat:27.664827,lng:-81.515755},realtors:0},{name:"california",position:{lat:36.778259,lng:-119.417931},realtors:0},{name:"new jersey",position:{lat:40.058323,lng:-74.405663},realtors:0},{name:"arizona",position:{lat:34.048927,lng:-111.093735},realtors:0},{name:"north carolina",position:{lat:35.759575,lng:-79.019302},realtors:0},{name:"tennessee",position:{lat:35.51749,lng:-86.580444},realtors:0},{name:"colorado",position:{lat:39.550053,lng:-105.782066},realtors:0},{name:"washington",position:{lat:47.751076,lng:-120.740135},realtors:0},{name:"virginia",position:{lat:37.431572,lng:-78.656891},realtors:0}],citiesPositions:[{name:"dallas",position:{lat:"",lng:""},realtors:0},{name:"orange county",position:{lat:"",lng:""},realtors:0},{name:"austin",position:{lat:"",lng:""},realtors:0},{name:"orlando",position:{lat:"",lng:""},realtors:0},{name:"san antonio",position:{lat:"",lng:""},realtors:0},{name:"houston",position:{lat:"",lng:""},realtors:0},{name:"san diego",position:{lat:"",lng:""},realtors:0},{name:"san dimas",position:{lat:"",lng:""},realtors:0},{name:"new jersey",position:{lat:"",lng:""},realtors:0},{name:"tempe",position:{lat:"",lng:""},realtors:0},{name:"charlotte",position:{lat:"",lng:""},realtors:0},{name:"antioch",position:{lat:"",lng:""},realtors:0},{name:"centennial",position:{lat:"",lng:""},realtors:0},{name:"seattle",position:{lat:"",lng:""},realtors:0},{name:"vienna",position:{lat:"",lng:""},realtors:0},{name:"boca raton",position:{lat:"",lng:""},realtors:0},{name:"center virginia",position:{lat:"",lng:""},realtors:0},{name:"raleigh",position:{lat:"",lng:""},realtors:0}]},J={name:"Map",props:{},components:{"gmap-custom-marker":U["a"],RealtorPhoto:A,Data:Z},data:function(){return{zoom:10,showInitalMarkers:!0,center:{lat:32.776665,lng:-96.796989},styles:[{width:"100%",height:"calc(100vh - 78px)",margin:"auto"}],realtors:Z.Data,realtorsNumInStates:Z.statesPositions,realtorsNumInCities:Z.citiesPositions,mapOptions:{disableDefaultUI:!0,gestureHandling:"greedy"}}},beforeMount:function(){for(var t=0;t<this.realtors.length;t++){for(var e=0;e<this.realtorsNumInStates.length;e++)this.realtors[t].state===this.realtorsNumInStates[e].name&&(this.realtorsNumInStates[e].realtors+=1);for(var a=0;a<this.realtorsNumInCities.length;a++)this.realtors[t].city===this.realtorsNumInCities[a].name&&(this.realtorsNumInCities[a].realtors+=1,this.realtorsNumInCities[a].position.lat=this.realtors[t].position.lat,this.realtorsNumInCities[a].position.lng=this.realtors[t].position.lng)}},mounted:function(){var t=this,e=this;this.$refs.Rmap.$mapPromise.then(function(a){a.mapTypeId="roadmap",a.setOptions({minZoom:3.4,maxZoom:9}),a.addListener("zoom_changed",function(){t.zoom=a.zoom}),e.$root.$on("chooseState",function(t){e.realtorsNumInStates.map(function(a){a.name===t&&e.zoomToState(a.position)})})}),setTimeout(function(){t.zoom=6},900),setTimeout(function(){t.zoom=3.4},1500)},methods:{openSideBar:function(t){this.$root.$emit("openSideBar",t)},zoomToState:function(t){this.zoom=5.9,this.center=t},zoomToCity:function(t){this.zoom=8.9,this.center=t},resetZoom:function(){this.zoom=3.4,this.center={lat:32.776665,lng:-96.796989}},closeStatesList:function(){this.$root.$emit("listInActive")}}},Q=J,X=(a("3947"),Object(h["a"])(Q,W,Y,!1,null,"8b93c770",null));X.options.__file="map.vue";var tt=X.exports,et=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"info-popup__wrapper"},[t.infoSubmitted?o("h1",{staticClass:"infoSubmitted"},[t._v("Thank You!!")]):t._e(),t.infoSubmitted?t._e():o("form",{staticClass:"form",on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[o("h3",[t._v("Help us serve you better and tell us about yourself")]),o("h4",[t._v("note: This information are optional and not necessarily required,\n        it helps Realtors to have a better idea about the realstate market.")]),o("div",{staticClass:"email-form-wrapper"},[t._m(0),o("label",[t._v("\n                Email: "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",placeholder:"Your email address"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),o("label",[t._v("\n                Phone #: "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],attrs:{type:"number",placeholder:"Your phone number"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})]),o("label",[t._v("\n                City, State : "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.city,expression:"city"}],attrs:{type:"text",placeholder:"City or State",required:""},domProps:{value:t.city},on:{input:function(e){e.target.composing||(t.city=e.target.value)}}})]),t.error?o("div",[o("p",{staticClass:"form-error"},[t._v(t._s(t.error))])]):t._e(),o("img",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}],staticClass:"loading",attrs:{src:a("cae3"),alt:"loading..."}})]),o("button",{attrs:{type:"submit"}},[t._v("Submit")]),o("button",{staticClass:"continue-btn",attrs:{type:"button"},on:{click:function(e){t.continueAsGuest(!0)}}},[t._v("Cancel")])])])},at=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",[t._v("\n                Name: "),a("input",{attrs:{type:"text",placeholder:"Your email address",required:""}})])}],ot={name:"Info",props:{sendTo:String,realtorName:String},data:function(){return{isLoading:!1,error:null,email:null,phone:null,message:null,city:null,infoSubmitted:!1}},methods:{continueAsGuest:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.$root.$emit("continueAsGuest",t)},submit:function(){this.validateFormAndShowHideErrors()&&(this.isLoading=!0,this.sendEmail())},validateFormAndShowHideErrors:function(){if(this.error=null,this.phone&&(this.phone.length<10||this.phone.length>13))this.error="*please enter a valid US phone number";else{if(this.email||this.phone)return!0;this.error="*please enter eather your phone number or your email address"}},sendEmail:function(){var t=Object(E["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,F.a.post("/sendEmail",this.buildEmailObject());case 3:this.isLoading=!1,this.$root.$emit("showEmailForm",!1),this.infoSubmitted=!0,this.continueAsGuest(),this.message=null,t.next=15;break;case 10:t.prev=10,t.t0=t["catch"](0),this.isLoading=!1,this.error="*Sorry, we are facing technical difficulties, there was an error sending your information",console.log(t.t0);case 15:case"end":return t.stop()}},t,this,[[0,10]])}));return function(){return t.apply(this,arguments)}}(),buildEmailObject:function(){return{to:"info.realtor.finder@gmail.com",realtorName:"RealtorFinder Team",message:"somone has submitted thier information in ".concat(this.city),userPhone:this.phone,userEmail:this.email}}},mounted:function(){var t=this;this.$root.$on("ClearForm",function(){t.message=null,t.error=null})}},nt=ot,it=(a("f2d7"),Object(h["a"])(nt,et,at,!1,null,"2d1da531",null));it.options.__file="info.vue";var st=it.exports,rt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},lt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",[t._v("\n    Site design / logo / code © 2018 "),a("a",{attrs:{href:"https://88techs.net",target:"_blank"}},[t._v("Eighty Eight Tech")])])}],pt={name:"Footer"},mt=pt,ut=(a("2c38"),Object(h["a"])(mt,rt,lt,!1,null,"13da45f6",null));ut.options.__file="Footer.vue";var ct=ut.exports,ht={name:"app",components:{Nav:y,SideBar:K,Map:tt,Info:st,Footer:ct},data:function(){return{}},created:function(){var t=this;this.$root.$on("continueAsGuest",function(e){e?t.$refs["popUp"].classList.add("close"):(t.$refs["popUp"].classList.add("fadeout"),setTimeout(function(){t.$refs["popUp"].classList.add("close")},2e3))})}},dt=ht,gt=(a("034f"),Object(h["a"])(dt,i,s,!1,null,null,null));gt.options.__file="App.vue";var vt=gt.exports;o["a"].config.productionTip=!1,o["a"].use(n,{load:{key:"AIzaSyCDKVMsEI5I6K6V4dJzRWBwk1ZA05CK2TE",libraries:"places,drawing,visualization",v:"3.26"}}),new o["a"]({render:function(t){return t(vt)}}).$mount("#app")},"74da":function(t,e,a){},7672:function(t,e,a){},8193:function(t,e,a){},"992a":function(t,e,a){},a242:function(t,e,a){"use strict";var o=a("0b63"),n=a.n(o);n.a},bad1:function(t,e,a){},c21b:function(t,e,a){},cae3:function(t,e,a){t.exports=a.p+"img/loading.2ae9dcde.gif"},f2d7:function(t,e,a){"use strict";var o=a("0a1c"),n=a.n(o);n.a}});
//# sourceMappingURL=app.771e7358.js.map