(this.webpackJsonp180crypto=this.webpackJsonp180crypto||[]).push([[0],{144:function(e,t,a){e.exports=a(294)},149:function(e,t,a){},294:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(13),s=a.n(r),o=(a(149),a(29));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=a(7),i=a(8),u=a(11),m=a(9),h=a(10),d=(a(84),a(41)),p=a(22),g=a(55),E=a(43),f=a(17),b=a(78),y=a(140),v=a(46),S=a(21),C=a(33),w=a(79),k=a(63),O=a(30),j=a(64),N=a.n(j);N.a.initializeApp({apiKey:"AIzaSyAuWSW8mQhy7iWoL7tojxkzvGrVwulfrwA",authDomain:"crypto-11b57.firebaseapp.com",databaseURL:"https://crypto-11b57.firebaseio.com",projectId:"crypto-11b57",storageBucket:"crypto-11b57.appspot.com",messagingSenderId:"347616052004",appId:"1:347616052004:web:41c2b359d1f22eec7829b1",measurementId:"G-HLCE1GK3RM"});var P=new N.a.auth.GoogleAuthProvider,M=N.a.auth(),_=N.a,D=a(36),I=a.n(D),U=a(96),A=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={NotificationsOn:!1,Name:"",CoinSymbol:""},a._onButtonClick=a._onButtonClick.bind(Object(p.a)(a)),a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"_onButtonClick",value:function(){var e=this,t=_.auth().currentUser;if(console.log(t.email),null!=t){var a,n={},l=t.email.split("@"),r=l[1].split("."),s=l[0].concat(r[0]);_.database().ref(s+"/favorites").once("value",(function(t){(a=t.val()).push(e.props.Name),console.log("something has been updated"),console.log(s)})),_.database().ref(s+"/favorites_symbol").once("value",(function(t){n={},(a=t.val()).push(e.props.urlsymbol),n[s+"/favorites_symbol"]=a,console.log(n),console.log(typeof e.props.CoinSymbol),_.database().ref().update(n),console.log("something has been updated"),console.log(s)}))}}},{key:"componentDidMount",value:function(){this.setState({Name:this.props.Name,CoinSymbol:this.props.urlsymbol})}},{key:"render",value:function(){return console.log(this.state.Name),console.log(this.state.CoinSymbol),l.a.createElement("div",null,l.a.createElement(f.a,{onClick:this._onButtonClick},"Favorite"))}}]),t}(l.a.Component),L=[],B=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={showComponent:!1,sorting_ascending:!1},a._onButtonClick=a._onButtonClick.bind(Object(p.a)(a)),a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"_onButtonClick",value:function(){this.setState({showComponent:!0,sorting_ascending:!this.state.sorting_ascending})}},{key:"render",value:function(){return this.state.sorting_ascending?l.a.createElement("div",null,l.a.createElement(f.a,{className:"mb-1",style:{float:"right"},onClick:this._onButtonClick},"Market Cap: Ascending"),l.a.createElement(x,{sortingprop:"ascending"})):l.a.createElement("div",null,l.a.createElement(f.a,{className:"mb-1",style:{float:"right"},onClick:this._onButtonClick},"Market Cap: Descending"),l.a.createElement(x,{sortingprop:"descending"}))}}]),t}(l.a.Component),x=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={listings:[],sorting:e.sortingprop},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"renderCurrency",value:function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,l.a.createElement(o.b,{to:{pathname:"/cryptocurrency",state:{currencyname:e.name,currency_raw_data:e.raw_data,currecy_display_data:e.display_data,imageurl:e.imgurl,urlsymbol:e.raw_data.FROMSYMBOL}}},e.name)),l.a.createElement("td",null,e.priceUSD),l.a.createElement("td",null,e.marketCap),l.a.createElement("td",null,l.a.createElement(A,{Name:e.name,urlsymbol:e.raw_data.FROMSYMBOL})))}},{key:"componentDidMount",value:function(){var e=this;I.a.get("https://min-api.cryptocompare.com/data/top/mktcapfull?limit=25&tsym=USD").then((function(t){var a=t.data.Data;e.setState({listings:a})}))}},{key:"render",value:function(){for(var e in L=[],this.state.listings){var t={};t.name=this.state.listings[e].CoinInfo.FullName,t.priceUSD=this.state.listings[e].DISPLAY.USD.PRICE,t.marketCap=this.state.listings[e].DISPLAY.USD.MKTCAP,t.marketCapRaw=this.state.listings[e].RAW.USD.MKTCAP,t.display_data=this.state.listings[e].DISPLAY.USD,t.raw_data=this.state.listings[e].RAW.USD,t.imgurl=this.state.listings[e].DISPLAY.USD.IMAGEURL,L.push(t)}return"ascending"===this.state.sorting?(L.sort((function(e,t){return e.marketCapRaw<t.marketCapRaw?-1:1})),this.state.sorting="descending"):"descending"===this.state.sorting&&(L.sort((function(e,t){return e.marketCapRaw<t.marketCapRaw?1:-1})),this.state.sorting="ascending"),l.a.createElement(U.a,{striped:!0,bordered:!0,condensed:!0,hover:!0,size:"lg"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Price"),l.a.createElement("th",null,"Market Cap"),l.a.createElement("th",null,"Notifications"))),l.a.createElement("tbody",null,L.map(this.renderCurrency)))}}]),t}(n.Component),F=B,R=a(65),T=function(){return l.a.createElement(R.d,{color:"dark",className:"font-small pt-4 mt-4"},l.a.createElement(R.c,{fluid:!0,className:"text-center text-md-left"},l.a.createElement(R.g,null)),l.a.createElement("div",{className:"footer-copyright text-center py-3"},l.a.createElement(R.c,{fluid:!0},l.a.createElement("a",{href:"https://nomics.com/"}," Crypto Market Cap & Pricing Data Provided By Nomics "))))},H=(a(58),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleSubmit=function(e){_.auth().createUserWithEmailAndPassword(a.state.user,a.state.pass).catch((function(e){var t=e.code;e.message;"auth/weak-password"==t?alert("The password is too weak."):"auth/invalid-email"==t?alert("Invalid Email"):"auth/email-already-in-use"==t?alert("Email Already in use"):(alert("Account Created"),this.props.closeModal(),console.log("else statemasdfas"))}));var t=_.auth().currentUser;if(console.log(t.email),null!=t){var n={},l=t.email.split("@"),r=l[1].split("."),s=l[0].concat(r[0]);n[s]="",n[s+"/favorites"]=[],n[s+"/favorites_lastprice"]=[],n[s+"/favorites_symbol"]=[],n[s+"/alert"]=!1,_.database().ref().update(n),alert("Account Created")}console.log(a.state.user),console.log(a.state.string_test),console.log("login test"),e.preventDefault()},a.print_test=function(e){console.log(typeof e.target.user),console.log("no definition"),console.log(a.props.user),console.log(a.user),console.log(a.state.user),console.log("string")},a.handleChangeUser=function(e){a.setState({user:e.target.value}),console.log(a.state)},a.handleChangePass=function(e){a.setState({pass:e.target.value}),console.log(a.state)},a.state={user:"",pass:"",string_test:"this should return a string"},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createPortal(l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"backdrop"}),l.a.createElement("div",{className:"primary"},l.a.createElement("button",{class:"generic-button",className:"close-button",onClick:this.props.closeModal},"close"),l.a.createElement("div",{className:"div-title"},"Sign Up"),l.a.createElement("div",{className:"secondary"},l.a.createElement("form",{onSubmit:this.handleSubmit},"User:",l.a.createElement("input",{type:"text",value:this.state.user,onChange:this.handleChangeUser}),l.a.createElement("br",null),"Password:",l.a.createElement("input",{type:"text",value:this.state.pass,onChange:this.handleChangePass}),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Submit"}))))),document.body)}}]),t}(n.Component)),W=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).showModal=function(){e.setState({isShown:!0}),console.log(e.state.isShown)},e.closeModal=function(){e.setState({isShown:!1}),console.log(e.state.isShown)},e.state={isShown:!1},e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{onClick:this.showModal,className:"modal-button"},"Sign Up"),this.state.isShown?l.a.createElement(H,{closeModal:this.closeModal}):l.a.createElement(l.a.Fragment,null))}}]),t}(n.Component),z=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleSubmit=function(e){_.auth().signInWithEmailAndPassword(a.state.user,a.state.pass).catch((function(e){var t=e.code;e.message;"auth/user-not-found"==t?alert("Invalid User"):"auth/invalid-email"==t?alert("Invalid Email"):"auth/wrong-password"==t?alert("Invalid Password"):(alert("Logged In"),this.props.closeModal())})),_.auth().currentUser&&a.props.loginSuccess(),console.log(a.state.user),console.log(a.state.string_test),console.log("login test"),e.preventDefault()},a.print_test=function(e){console.log(typeof e.target.user),console.log("no definition"),console.log(a.props.user),console.log(a.user),console.log(a.state.user),console.log("string")},a.handleChangeUser=function(e){a.setState({user:e.target.value}),console.log(a.state)},a.handleChangePass=function(e){a.setState({pass:e.target.value}),console.log(a.state)},a.state={user:"",pass:"",string_test:"this should return a string"},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createPortal(l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"backdrop"}),l.a.createElement("div",{className:"primary"},l.a.createElement("button",{className:"close-button",onClick:this.props.closeModal},"close"),l.a.createElement("div",{className:"div-title"},"Sign In"),l.a.createElement("div",{className:"secondary"},l.a.createElement("form",{class:"generic-form",onSubmit:this.handleSubmit},"User:",l.a.createElement("input",{type:"text",value:this.state.user,onChange:this.handleChangeUser}),l.a.createElement("br",null),"Password:",l.a.createElement("input",{type:"text",value:this.state.pass,onChange:this.handleChangePass}),l.a.createElement("br",null),l.a.createElement("input",{class:"generic-button",type:"submit",value:"Submit"}),l.a.createElement("button",{className:"forgot-password",class:"generic-button",onClick:this.props.forgotPassword},"Forgot Password"))))),document.body)}}]),t}(n.Component),Y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleSubmit=function(e){_.auth().currentUser.updatePassword(a.state.pass).then((function(){alert("Password Changed!")})).catch((function(e){alert("New Password too Weak")})),console.log("password updated")},a.handleChangeUser=function(e){a.setState({user:e.target.value}),console.log(a.state)},a.handleChangePass=function(e){a.setState({pass:e.target.value}),console.log(a.state)},a.state={user:"",pass:"",string_test:"this should return a string"},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createPortal(l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"backdrop"}),l.a.createElement("div",{className:"primary"},l.a.createElement("button",{className:"close-button",onClick:this.props.closeModal},"close"),l.a.createElement("div",{className:"div-title"}," Change Password"),l.a.createElement("div",{className:"secondary"},l.a.createElement("form",{onSubmit:this.handleSubmit},"New Password:",l.a.createElement("input",{type:"text",value:this.state.pass,onChange:this.handleChangePass}),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Submit"}))))),document.body)}}]),t}(n.Component),G=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).showModal=function(){e.setState({isShown:!0}),console.log(e.state.isShown)},e.closeModal=function(){e.setState({isShown:!1}),console.log(e.state.isShown)},e.closePass=function(){e.setState({changeShown:!1}),console.log(e.state.changeShown)},e.forgotPassword=function(){e.setState({isShown:!1,changeShown:!0})},e.state={isShown:!1,changeShown:!1},e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{onClick:this.showModal,className:"modal-button"},"Sign In"),this.state.isShown?l.a.createElement(z,{forgotPassword:this.forgotPassword,closeModal:this.closeModal,loginSuccess:this.props.loginSuccess}):l.a.createElement(l.a.Fragment,null),this.state.changeShown?l.a.createElement(Y,{closeModal:this.closePass}):l.a.createElement(l.a.Fragment,null))}}]),t}(n.Component),K=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).showModal=function(){e.setState({isShown:!0}),console.log(e.state.isShown)},e.closeModal=function(){e.setState({isShown:!1}),console.log(e.state.isShown)},e.state={isShown:!1},e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{onClick:this.showModal,className:"modal-button"},"Change Password"),this.state.isShown?l.a.createElement(Y,{closeModal:this.closeModal}):l.a.createElement(l.a.Fragment,null))}}]),t}(n.Component),$=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={name:""},a._onButtonClick=a._onButtonClick.bind(Object(p.a)(a)),a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"_onButtonClick",value:function(){var e=this,t=_.auth().currentUser;if(console.log(t.email),null!=t){var a,n={},l=t.email.split("@"),r=l[1].split("."),s=l[0].concat(r[0]);_.database().ref(s+"/favorites").once("value",(function(t){for(var l=(a=t.val()).length-1;l>0;l--)a[l]==e.props.name&&(console.log(a[l]+" and "+e.props.name),console.log("I'm stuck"),a.splice(l,1));n[s+"/favorites"]=a,_.database().ref().update(n),console.log("something has been updated"),console.log(s)}))}}},{key:"componentDidMount",value:function(){this.setState({name:this.props.name})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{onClick:this._onButtonClick()},"Remove"),console.log("remove rendered"))}}]),t}(l.a.Component),J=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"renderFavorites",value:function(e,t){return l.a.createElement("tr",null,l.a.createElement("td",null,e),l.a.createElement("td",null,l.a.createElement($,{name:e})))}},{key:"render",value:function(){return s.a.createPortal(l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"backdrop"}),l.a.createElement("div",{className:"primary"},l.a.createElement("button",{className:"close-button",onClick:this.props.closeModal},"close"),l.a.createElement("div",{className:"div-title"},"Favorites"),l.a.createElement("div",{className:"secondary"},l.a.createElement("div",null,console.log(this.props.currencyList),this.props.currencyList.map(this.renderFavorites))))),document.body)}}]),t}(n.Component),q=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).showModal=function(){var t=_.auth().currentUser;if(console.log(t.email),null!=t){var a,n=t.email.split("@"),l=n[1].split("."),r=n[0].concat(l[0]);_.database().ref(r+"/favorites").once("value",(function(t){a=t.val(),e.setState({currencyList:a})}))}e.setState({isShown:!0}),console.log(e.state.isShown)},e.closeModal=function(){e.setState({isShown:!1}),console.log(e.state.isShown)},e.state={isShown:!1,currencyList:[]},e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{onClick:this.showModal},"Favorites"),this.state.isShown?l.a.createElement(J,{closeModal:this.closeModal,currencyList:this.state.currencyList}):l.a.createElement(l.a.Fragment,null))}}]),t}(n.Component),Q=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"renderFavorites",value:function(e,t){return l.a.createElement("tr",null,l.a.createElement("td",null,e),l.a.createElement("td",null,l.a.createElement($,{name:e})))}},{key:"render",value:function(){return s.a.createPortal(l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"backdrop"}),l.a.createElement("div",{className:"primary"},l.a.createElement("button",{className:"close-button",onClick:this.props.closeModal},"close"),l.a.createElement("div",{className:"div-title"},"Alerts"),l.a.createElement("div",{className:"secondary"},l.a.createElement("div",null,"- Bitcoin price has increased 1.2%",console.log(this.props.currencyList),this.props.currencyList.map(this.renderFavorites))))),document.body)}}]),t}(n.Component),V=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).showModal=function(){var t=_.auth().currentUser;if(console.log(t.email),null!=t){var a=t.email.split("@"),n=a[1].split(".");a[0].concat(n[0])}e.setState({isShown:!0,init:!1}),console.log(e.state.isShown)},e.closeModal=function(){e.setState({isShown:!1}),console.log(e.state.isShown)},e.state={isShown:!1,currencyList:[],init:!0},e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,this.state.init?l.a.createElement("button",{onClick:this.showModal,style:{color:"red"}},"Alert"):l.a.createElement("button",{onClick:this.showModal},"Alert"),this.state.isShown?l.a.createElement(Q,{closeModal:this.closeModal,currencyList:this.state.currencyList}):l.a.createElement(l.a.Fragment,null))}}]),t}(n.Component),X=a(184);var Z=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).modalProps={triggerText:"Sign Up",signInText:"Sign In",passChangeText:"Change Password"},e.loginSuccess=function(){e.setState({user:!0})},e.state={currentItem:"",username:"",currency:[],items:[],user:null,USD:"todo ",USD2:"",transferState:null},e.login=e.login.bind(Object(p.a)(e)),e.logout=e.logout.bind(Object(p.a)(e)),e.changePassword=e.changePassword.bind(Object(p.a)(e)),e.signIn=e.signIn.bind(Object(p.a)(e)),e.signUp=e.signUp.bind(Object(p.a)(e)),e.makeSearch=e.makeSearch.bind(Object(p.a)(e)),e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"changePassword",value:function(){this.props.history.push("/changePassword")}},{key:"signIn",value:function(){this.props.history.push("/signIn")}},{key:"signUp",value:function(){this.props.history.push("/signUp")}},{key:"handleChange",value:function(e){}},{key:"logout",value:function(){var e=this;M.signOut().then((function(){e.setState({user:null})}))}},{key:"login",value:function(){var e=this;M.signInWithPopup(P).then((function(t){var a=t.user;e.setState({user:a})}))}},{key:"makeSearch",value:function(){var e,t=this,a=document.getElementById("searchInput").value.toLowerCase();e=Object.keys(X).find((function(e){return X[e].toString().toLowerCase()==a})),console.log(e),e&&I.a.get("https://min-api.cryptocompare.com/data/pricemultifull?fsyms="+e+"&tsyms=USD").then((function(n){if(console.log(n),4==n.request.readyState&&200==n.request.status)try{var l=a,r=n.data.RAW[e].USD,s=n.data.DISPLAY[e].USD,o=n.data.DISPLAY[e].USD.IMAGEURL;n.data.DISPLAY[e].USD.FROMSYMBOL;t.setState({transferState:{currencyname:l,currency_raw_data:r,currency_display_data:s,imageurl:o,urlsymbol:e}})}catch(c){console.log("failed history push"),console.log(c)}}))}},{key:"componentDidMount",value:function(){var e=this;fetch("https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR").then((function(e){return e.json()})).then((function(t){var a=t.USD2;e.setState({currency:t,USD:t.USD,USD2:a})}))}},{key:"render",value:function(){var e=this;this.USD;return this.state.transferState&&this.props.history.push({pathname:"/cryptocurrency",state:this.state.transferState}),l.a.createElement("div",{id:"parent"},l.a.createElement(g.a,{bg:"primary",variant:"dark",sticky:"top"},l.a.createElement(v.a,null,l.a.createElement(g.a.Brand,null," ",l.a.createElement("i",{class:"fas fa-coins"})," ","180Crypto"),l.a.createElement(E.a,{className:"mr-auto"},l.a.createElement(E.a.Link,null,"Prices"),l.a.createElement(E.a.Link,null,"News")),l.a.createElement(b.a,null,this.state.user?l.a.createElement(S.a,{className:"mr-auto"},l.a.createElement(S.a.Toggle,null,l.a.createElement(f.a,{variant:"primary"},l.a.createElement("i",{class:"far fa-user-circle"}))),l.a.createElement(S.a.Menu,null,l.a.createElement(S.a.Item,{href:"#/action-1"},"Profile"),l.a.createElement(S.a.Item,null,l.a.createElement(q,null)),l.a.createElement(S.a.Item,{href:"#/action-2"},l.a.createElement(K,null)),l.a.createElement(S.a.Item,{href:"#/action-2"},l.a.createElement(V,null)),l.a.createElement(S.a.Item,{href:"#/action-3",onClick:this.logout},"Sign Out"))):l.a.createElement(S.a,{className:"mr-auto"},l.a.createElement(S.a.Toggle,null,l.a.createElement(f.a,{variant:"primary"},l.a.createElement("i",{class:"far fa-user-circle"}))),l.a.createElement(S.a.Menu,null,l.a.createElement(S.a.Item,{href:"#/action-2"},l.a.createElement(W,{testbool_fromparent:this.state.testbool,callbackFromParent:this.myCallback}),"  "),l.a.createElement(S.a.Item,{href:"#/action-3"},l.a.createElement(G,{loginSuccess:this.loginSuccess})," ")))))),l.a.createElement(y.a,null,l.a.createElement("h1",{className:"text-light text-center",color:"light"},l.a.createElement("i",{class:"fas fa-coins"})," ","180Crypto"),l.a.createElement("h2",{className:"text-light text-center pb-3"},"Find your coin."),l.a.createElement(v.a,{className:"px-5"},l.a.createElement(k.a,{className:"px-5"},l.a.createElement(O.a,{className:"px-5"},l.a.createElement(C.a,{className:"px-5"},l.a.createElement(w.a,{placeholder:"Search for a cryptocurrency","aria-label":"Search crypto",id:"searchInput"}),l.a.createElement(C.a.Append,null,l.a.createElement(f.a,{variant:"light",onClick:function(){return e.makeSearch()}},l.a.createElement("i",{class:"fas fa-search"})))))))),l.a.createElement(v.a,{className:"mx-auto"},l.a.createElement("h2",{className:"Table-header text-center"},"Top 25 Cryptocurrencies by Market Cap"),l.a.createElement(k.a,null,l.a.createElement(O.a,null,l.a.createElement(F,null)))),l.a.createElement(T,null))}}]),t}(n.Component),ee=a(15),te=a(44),ae=a(40),ne=a(47),le=a(101),re=a(141),se=[],oe=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={currencyName:e.name,newsData:[]},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getNews()}},{key:"componentWillReceiveProps",value:function(e){console.log(e),this.setState({currencyName:e.name}),this.getNews()}},{key:"renderNews",value:function(e,t){return l.a.createElement(l.a.Fragment,null,l.a.createElement(ee.a.Title,null,l.a.createElement("a",{href:e.url},e.title)),l.a.createElement(ee.a.Text,null,null!=e.author&&"By: "+e.author,null!=e.author&&l.a.createElement("br",null),null!=e.publishedAt&&"Date: "+e.publishedAt.substring(0,e.publishedAt.indexOf("T")),null!=e.publishedAt&&l.a.createElement("br",null),e.description))}},{key:"getNews",value:function(){var e=this;I.a.get("https://newsapi.org/v2/everything?q="+this.state.currencyName+"+cryptocurrency&sortBy=publishedAt&language=en&apiKey=2232a0eb76334bb884af70b23e2421d2").then((function(t){var a=t.data.articles;e.setState({newsData:a})}))}},{key:"render",value:function(){for(var e in se=[],this.state.newsData){var t={};t.title=this.state.newsData[e].title,t.author=this.state.newsData[e].author,t.description=this.state.newsData[e].description,t.url=this.state.newsData[e].url,t.urlToImage=this.state.newsData[e].urlToImage,t.publishedAt=this.state.newsData[e].publishedAt,se.push(t)}return l.a.createElement(ee.a,null,l.a.createElement(ee.a.Header,null,"News"),l.a.createElement(ee.a.Body,null,se.map(this.renderNews)))}}]),t}(l.a.Component),ce={maintainAspectRatio:!0,scales:{yAxes:[{scaleLabel:{display:!0,labelString:"Price ($)"}}],xAxes:[{scaleLabel:{display:!0,labelString:"Time (Days)"}}]}},ie=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={currencyname:"",display_data:{},raw_data:{},imageurl:"",urlsymbol:"",graphdata:[],data:[],about:[],numCoins:"",output:"",numMoney:"",output2:""},a.done=a.done.bind(Object(p.a)(a)),a.numCoins=l.a.createRef(),a.numMoney=l.a.createRef(),a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.scrollTo(0,0);var t=this.props.location.state.currencyname,a=this.props.location.state.currency_display_data,n=this.props.location.state.currency_raw_data,l=this.props.location.state.imageurl,r=this.props.location.state.urlsymbol;this.getMeta(r),I.a.get("https://min-api.cryptocompare.com/data/v2/histoday?fsym="+r+"&tsym=USD&limit=10").then((function(t){var a=[],n=t.data.Data.Data;for(var l in e.setState({graphdata:n}),e.state.graphdata)a.push(e.state.graphdata[l].close);var r={labels:[0,1,2,3,4,5,6,7,8,9,10],datasets:[{label:"Price over last 10 days",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(0,123,255,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:a}]};e.setState({data:r})})),this.setState({currencyname:t,display_data:a,raw_data:n,imageurl:l})}},{key:"done",value:function(){this.props.history.push("/")}},{key:"getMeta",value:function(e){var t=this;I.a.get("https://api.nomics.com/v1/currencies?key=026073210569d2c64ca3a1ccd5d87873&ids="+e+"&attributes=website_url,description,whitepaper_url").then((function(e){var a=e.data;console.log(a),t.setState({about:a})}))}},{key:"handleChange",value:function(e){var t=e.target.validity.valid?e.target.value:this.state.numCoins;this.setState({numCoins:t});var a=this.state.raw_data.PRICE*t;this.setState({output:a})}},{key:"handleChange2",value:function(e){var t=e.target.validity.valid?e.target.value:this.state.numCoins;this.setState({numMoney:t});var a=t/this.state.raw_data.PRICE;this.setState({output2:a})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{id:"parent"},l.a.createElement(g.a,{bg:"primary",variant:"dark",sticky:"top"},l.a.createElement(v.a,null,l.a.createElement(g.a.Brand,{onClick:this.done}," ",l.a.createElement("i",{class:"fas fa-coins"})," ","180Crypto"),l.a.createElement(E.a,{className:"mr-auto"},l.a.createElement(E.a.Link,null,"Prices"),l.a.createElement(E.a.Link,null,"News")),l.a.createElement(b.a,null,l.a.createElement(S.a,{className:"mr-auto"},l.a.createElement(S.a.Toggle,null,l.a.createElement(f.a,{variant:"primary"},l.a.createElement("i",{class:"far fa-user-circle"}))),l.a.createElement(S.a.Menu,null,l.a.createElement(S.a.Item,{href:"#/action-1"},"Profile"),l.a.createElement(S.a.Item,{as:"button",onClick:this.changePassword},"Change Password")))))),l.a.createElement(v.a,null,l.a.createElement(k.a,null,l.a.createElement("div",{className:"cryptoCard pt-4"},l.a.createElement(O.a,{className:"ml-auto"},l.a.createElement(ee.a,{className:"mx-auto",style:{width:"22rem"}},l.a.createElement(ee.a.Img,{className:"coinImage p-2",variant:"top",src:"https://www.cryptocompare.com"+this.state.imageurl}),l.a.createElement(ee.a.Title,{className:"mr-auto pl-3"},l.a.createElement("span",{style:{fontWeight:"bold",fontSize:25}},this.state.currencyname,"\n"),l.a.createElement("span",{style:{color:"gray",fontSize:18}},this.state.display_data.FROMSYMBOL)),l.a.createElement(ee.a.Body,null,l.a.createElement(ae.a,null,l.a.createElement(ae.a.Item,null,l.a.createElement("span",{style:{color:"gray",fontSize:18}},"Current Price:","\n"),l.a.createElement("span",{style:{fontWeight:"bold",fontSize:16}},this.state.display_data.PRICE)),l.a.createElement(ae.a.Item,null,l.a.createElement("span",{style:{color:"gray",fontSize:18}},"Daily High:","\n"),l.a.createElement("span",{style:{fontWeight:"bold",fontSize:16}},this.state.display_data.HIGHDAY)),l.a.createElement(ae.a.Item,null,l.a.createElement("span",{style:{color:"gray",fontSize:18}},"Daily Low:","\n"),l.a.createElement("span",{style:{fontWeight:"bold",fontSize:16}},this.state.display_data.LOWDAY)),l.a.createElement(ae.a.Item,null,l.a.createElement("span",{style:{color:"gray",fontSize:18}},"24 Hour Change:","\n"),l.a.createElement("span",{style:{fontWeight:"bold",fontSize:16}},this.state.display_data.CHANGE24HOUR)),l.a.createElement(ae.a.Item,null,l.a.createElement("span",{style:{color:"gray",fontSize:18}},"1 Hour Change:","\n"),l.a.createElement("span",{style:{fontWeight:"bold",fontSize:16}},this.state.display_data.CHANGEHOUR)),l.a.createElement(ae.a.Item,null,l.a.createElement("span",{style:{color:"gray",fontSize:18}},"24 Hour Percent Change:","\n"),l.a.createElement("span",{style:{fontWeight:"bold",fontSize:16}},this.state.display_data.CHANGEPCT24HOUR)),l.a.createElement(ae.a.Item,null,l.a.createElement("span",{style:{color:"gray",fontSize:18}},"1 Hour Percent Change:","\n"),l.a.createElement("span",{style:{fontWeight:"bold",fontSize:16}},this.state.display_data.CHANGEPCTHOUR))))))),l.a.createElement("div",{className:"m-auto pt-4"},l.a.createElement(O.a,null,l.a.createElement(ee.a,{style:{width:"45rem"}},l.a.createElement(ee.a.Body,null,l.a.createElement(ee.a.Title,null,this.state.currencyname," Chart"),l.a.createElement(re.a,{data:this.state.data,options:ce}))))),l.a.createElement("div",{className:"mr-auto pt-2 "},l.a.createElement(O.a,null,l.a.createElement(ee.a,{style:{width:"22rem"}},l.a.createElement(ee.a.Header,null,"Convert"),l.a.createElement(ee.a.Body,null,l.a.createElement(ee.a.Title,null,"Convert ",this.state.currencyname,"\n","& USD"),l.a.createElement(ne.a,null,l.a.createElement(ne.a.Label,null,"How many coins do you have?"),l.a.createElement(C.a,null,l.a.createElement(C.a.Prepend,null,l.a.createElement(C.a.Text,{id:"basic-addon1"},"#")),l.a.createElement(ne.a.Control,{type:"text",pattern:"[0-9]*[.]?[0-9]*",placeholder:"coins",value:this.state.numCoins,onChange:function(t){return e.handleChange(t)}})),l.a.createElement(f.a,{variant:"light"},"$",l.a.createElement(le.a,{variant:"light"},this.state.output))),l.a.createElement(ne.a,null,l.a.createElement(ne.a.Label,null,"How much $ do you have?"),l.a.createElement(C.a,null,l.a.createElement(C.a.Prepend,null,l.a.createElement(C.a.Text,{id:"basic-addon1"},"$")),l.a.createElement(ne.a.Control,{type:"text",pattern:"[0-9]*[.]?[0-9]*",placeholder:"USD",value:this.state.numMoney,onChange:function(t){return e.handleChange2(t)}})),l.a.createElement(f.a,{variant:"light"},this.state.display_data.FROMSYMBOL,l.a.createElement(le.a,{variant:"light"},this.state.output2)))))),l.a.createElement("div",{className:"pt-2"},l.a.createElement(O.a,null,this.state.about.map((function(e,t){return l.a.createElement(te.a,null,l.a.createElement(ee.a,{style:{width:"22rem"}},l.a.createElement(ee.a.Header,null,l.a.createElement(te.a.Toggle,{as:f.a,variant:"link",eventKey:"0"},"Description")),l.a.createElement(te.a.Collapse,{eventKey:"0"},l.a.createElement(ee.a.Body,null,null!=e.description&&e.description,l.a.createElement("p",null,"\n"),l.a.createElement(te.a.Toggle,{as:f.a,variant:"link",eventKey:"0"},l.a.createElement("i",{class:"fas fa-chevron-up"}))))),l.a.createElement(ee.a,null,l.a.createElement(ee.a.Header,null,l.a.createElement(te.a.Toggle,{as:f.a,variant:"link",eventKey:"1"},"Links")),l.a.createElement(te.a.Collapse,{eventKey:"1"},l.a.createElement(ee.a.Body,null,l.a.createElement("a",{href:null!=e.website_url&&e.website_url},l.a.createElement("i",{class:"fas fa-globe"}),"\n","Website"),l.a.createElement("p",null,"\n"),l.a.createElement("a",{href:null!=e.whitepaper_url&&e.whitepaper_url},l.a.createElement("i",{class:"far fa-file-alt"}),"\n","Whitepaper"),l.a.createElement("p",null,"\n"),l.a.createElement(te.a.Toggle,{as:f.a,variant:"link",eventKey:"1"},l.a.createElement("i",{class:"fas fa-chevron-up"}))))))}))))),l.a.createElement(O.a,{className:"ml-auto p-2"},l.a.createElement(oe,{name:this.state.currencyname})))),l.a.createElement(T,null))}}]),t}(l.a.Component),ue=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(o.a,null,l.a.createElement("div",{id:"parent"},l.a.createElement(d.c,null,l.a.createElement(d.a,{exact:!0,path:"/",component:Z}),l.a.createElement(d.a,{path:"/cryptocurrency",component:ie}))))}}]),t}(n.Component);s.a.render(l.a.createElement(o.a,null,l.a.createElement(ue,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},58:function(e,t,a){},84:function(e,t,a){}},[[144,1,2]]]);
//# sourceMappingURL=main.96512de2.chunk.js.map