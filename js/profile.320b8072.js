(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["profile"],{c66d:function(e,t,n){"use strict";n.r(t);var s=n("7a23"),a={class:"profile component-padding"},o={key:0},r=Object(s["g"])("h1",null,"Please Login",-1),i=[r],u={key:1},c=Object(s["g"])("span",null,"Email:",-1);function h(e,t,n,r,h,l){return Object(s["t"])(),Object(s["f"])("section",null,[Object(s["g"])("div",a,[l.hasToken?Object(s["e"])("",!0):(Object(s["t"])(),Object(s["f"])("div",o,i)),l.hasToken?(Object(s["t"])(),Object(s["f"])("div",u,[Object(s["g"])("h1",null,"Welcome "+Object(s["C"])(e.userName)+"!",1),c,Object(s["g"])("span",null,Object(s["C"])(e.userEmail),1)])):Object(s["e"])("",!0)])])}n("b0c0");var l={name:"da-profile",data:function(){return{userName:"",userEmail:"",siteNavTapped:!1,userNavTapped:!1,lastTapped:null,onlyOneActiveTap:!0}},computed:{hasToken:function(){return this.$store.state.auth.hasToken}},watch:{hasToken:function(){this.updateUserInfo()}},created:function(){this.updateUserInfo()},methods:{updateUserInfo:function(){var e=this.$store.getters.authToken;if(!e)return this.userName="",this.userEmail="",void this.redirectToLogin();var t=this,n=new XMLHttpRequest;n.onreadystatechange=function(){if(4==this.readyState){var e=JSON.parse(this.responseText);0==e.auth&&alert("Not authorized to view this page"),200==this.status&&1==e.auth?(t.userName=e.user.name,t.userEmail=e.user.email):alert("Error: "+this.responseText),console.log(e)}},n.open("GET","/api/v1/site/auth/me",!0),n.setRequestHeader("x-access-token",e),n.send()},redirectToLogin:function(){this.$router.push({path:"Login"})},getUserInfo:function(){},clearUserInfo:function(){}}},p=n("6b0d"),d=n.n(p);const f=d()(l,[["render",h]]);t["default"]=f}}]);
//# sourceMappingURL=profile.320b8072.js.map