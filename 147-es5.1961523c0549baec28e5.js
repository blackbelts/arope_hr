(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{"vRU+":function(n,l,e){"use strict";e.r(l);var o=e("CcnG"),t=function(){},r=e("pMnS"),i=e("fNgX"),u=e("Hf/j"),a=e("ZYjt"),d=e("gIcY"),s=e("Ip0R"),g=e("oBZk"),c=e("ZZ/e"),p=e("mrSG"),m=e("p74H"),f=e("2Rin"),h=e("wojB"),C=e("zuHl"),v=e("LAMn"),_=function(){function n(n,l,e,o,t,r,i,u,a,s){var g=this;this.navCtrl=n,this.menuCtrl=l,this.fb=e,this.statusBar=o,this.utilService=t,this.odooApi=r,this.shared=i,this.finger=u,this.platform=a,this.navController=s,this.submit=!1,this.biometric=!1,this.loginForm=e.group({username:["",[d.Validators.required]],password:["",[d.Validators.required]]}),this.primaryColor="#073e89",this.secondryColor="#0cd1e8",this.blackLogo="assets/imgs/Logo-new.png",localStorage.setItem("primary_color","#44bbec"),localStorage.setItem("secondry_color","#0163fc"),localStorage.setItem("black_logo","assets/imgs/logo.png"),this.statusBar.overlaysWebView(!1),this.statusBar.backgroundColorByHexString(this.primaryColor),this.primaryColor=localStorage.getItem("primary_color"),this.menuCtrl.swipeEnable(!1),null!=localStorage.getItem("token")&&null!=localStorage.getItem("user_id")?(this.biometric=!0,this.shared.user_id=parseInt(localStorage.getItem("user_id")),this.shared.user_token=localStorage.getItem("token"),this.odooApi.updateToken(),this.odooApi.getProfile(this.shared.user_id).then((function(n){g.shared.employee=JSON.parse(JSON.stringify(n)).data[0]})).catch((function(n){console.log("catch",n)}))):this.biometric=!1}return n.prototype.ngOnInit=function(){},n.prototype.forgotPassword=function(){this.navCtrl.navigateForward("/forgot-password")},n.prototype.login=function(){var n=this;console.log("this.loginForm.valid",this.loginForm.get("username").errors),this.loginForm.valid&&(this.utilService.loading(),this.odooApi.login({username:this.loginForm.controls.username.value,password:this.loginForm.controls.password.value}).then((function(l){console.log("res",l);var e=JSON.parse(JSON.stringify(l));n.shared.user_token=e.token,n.shared.user_id=e.user.id,localStorage.setItem("token",e.token),localStorage.setItem("user_id",e.user.id),n.odooApi.getProfile(e.user.id).then((function(l){n.shared.employee=JSON.parse(JSON.stringify(l)).data[0],n.utilService.dismissLoading(),n.navCtrl.navigateRoot("/new-home")}))}),(function(l){n.submit=!0,n.utilService.dismissLoading(),console.log(l)})))},n.prototype.register=function(){this.navCtrl.navigateForward("/register")},n.prototype.logInBiometric=function(){return p.b(this,void 0,void 0,(function(){return p.e(this,(function(n){return this.navController.navigateRoot("/new-home"),[2]}))}))},n}(),b=[[".forgotPasswordText[_ngcontent-%COMP%]{font-size:16px;font-weight:400;color:#000}.forgotPasswordBack[_ngcontent-%COMP%]{text-align:center;font-size:16px;color:#fe9c45;margin-top:50px}.register[_ngcontent-%COMP%]{text-align:center;font-size:16px;margin-top:50px}.register[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fe9c45}.home-data-card[_ngcontent-%COMP%]{position:relative;top:-50px;background:#fff;border-radius:50px;width:100%}.profile-card-div[_ngcontent-%COMP%]{background:#073e89;height:280px;width:100%!important;margin:0!important;box-shadow:none!important}.home-card[_ngcontent-%COMP%]{margin:0!important;box-shadow:none!important;padding-top:25px}.home-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px!important;color:#fe9c45!important;font-weight:700}.home-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#fff}.home-header[_ngcontent-%COMP%]{height:144px;position:relative;top:10px;margin:0 auto;text-align:center;padding:12px;border-radius:100px;width:300px}.head-div[_ngcontent-%COMP%]{top:-20px;position:relative;font-size:18px;text-align:center;border-radius:50px;border:.1px solid rgba(255,255,255,0);height:63px;background:#fff;margin-left:30px;margin-right:30px;box-shadow:-1px 7px 16px 6px rgba(210,208,207,.9607843137)}.login-item[_ngcontent-%COMP%]{--padding-start:0;--detail-icon-color:rgb(254, 156, 69);--detail-icon-opacity:1;--inner-padding-end:0;padding:15px 4px}.login-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:30px}.login-item[_ngcontent-%COMP%]   .custom-icon-personal-info-icon[_ngcontent-%COMP%]:before{color:#fe9c45}.login-box[_ngcontent-%COMP%]{padding:0 30px 30px}.validation[_ngcontent-%COMP%]{color:#fff;text-align:center;background-color:rgba(255,0,0,.8);padding:2px!important;margin-bottom:6px;margin-left:5%;margin-right:5%;border-radius:25px}.validation[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0!important;padding:0!important}.bio-login[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:center;font-size:5rem;margin-top:2rem;margin-bottom:2rem}.bio-login[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#073e89}.bio-login[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center}ion-item[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:30px;color:#fe9c45}"]],I=o["\u0275crt"]({encapsulation:0,styles:b,data:{}});function R(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,6,"div",[["class","login-box bio-login"]],null,null,null,null,null)),(n()(),o["\u0275eld"](1,0,null,null,3,"h1",[],null,null,null,null,null)),(n()(),o["\u0275eld"](2,0,null,null,2,"fa-icon",[["class","ng-fa-icon"],["slot","end"]],[[1,"title",0],[8,"innerHTML",1]],[[null,"click"]],(function(n,l,e){var o=!0,t=n.component;"click"===l&&(o=!1!==t.logInBiometric()&&o);return o}),i.d,i.c)),o["\u0275did"](3,573440,null,0,u.c,[a.b,u.a,u.d,[2,u.i]],{icon:[0,"icon"]},null),o["\u0275pad"](4,2),(n()(),o["\u0275eld"](5,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),o["\u0275ted"](-1,null,["Please Click the icon to open the Application and use it "]))],(function(n,l){var e=n(l,4,0,"fas","user-lock");n(l,3,0,e)}),(function(n,l){n(l,2,0,o["\u0275nov"](l,3).title,o["\u0275nov"](l,3).renderedIconHTML)}))}function x(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,2,"div",[["class","validation"]],null,null,null,null,null)),(n()(),o["\u0275eld"](1,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),o["\u0275ted"](-1,null,["Invalid Username or Password"]))],null,null)}function M(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,2,"div",[["class","validation"]],null,null,null,null,null)),(n()(),o["\u0275eld"](1,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),o["\u0275ted"](-1,null,["Username Required"]))],null,null)}function P(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,2,"div",[["class","validation"]],null,null,null,null,null)),(n()(),o["\u0275eld"](1,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),o["\u0275ted"](-1,null,["Password Required"]))],null,null)}function N(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,43,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(n,l,e){var t=!0,r=n.component;"submit"===l&&(t=!1!==o["\u0275nov"](n,2).onSubmit(e)&&t);"reset"===l&&(t=!1!==o["\u0275nov"](n,2).onReset()&&t);"ngSubmit"===l&&(t=!1!==r.login()&&t);return t}),null,null)),o["\u0275did"](1,16384,null,0,d["\u0275angular_packages_forms_forms_z"],[],null,null),o["\u0275did"](2,540672,null,0,d.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),o["\u0275prd"](2048,null,d.ControlContainer,null,[d.FormGroupDirective]),o["\u0275did"](4,16384,null,0,d.NgControlStatusGroup,[[4,d.ControlContainer]],null,null),(n()(),o["\u0275and"](16777216,null,null,1,null,x)),o["\u0275did"](6,16384,null,0,s.NgIf,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),o["\u0275eld"](7,0,null,null,36,"ion-list",[["class","login-box"]],null,null,null,g.pb,g.y)),o["\u0275did"](8,49152,null,0,c.IonList,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(n()(),o["\u0275eld"](9,0,null,0,13,"ion-item",[["class","login-item"],["detail","false"]],null,null,null,g.mb,g.t)),o["\u0275did"](10,49152,null,0,c.IonItem,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{detail:[0,"detail"]},null),(n()(),o["\u0275eld"](11,0,null,0,2,"fa-icon",[["class","ng-fa-icon"],["slot","start"]],[[1,"title",0],[8,"innerHTML",1]],null,null,i.d,i.c)),o["\u0275did"](12,573440,null,0,u.c,[a.b,u.a,u.d,[2,u.i]],{icon:[0,"icon"]},null),o["\u0275pad"](13,2),(n()(),o["\u0275eld"](14,0,null,0,8,"ion-input",[["class","loginInput"],["formControlName","username"],["placeholder","Username or Email"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var t=!0;"ionBlur"===l&&(t=!1!==o["\u0275nov"](n,17)._handleBlurEvent(e.target)&&t);"ionChange"===l&&(t=!1!==o["\u0275nov"](n,17)._handleInputEvent(e.target)&&t);return t}),g.ib,g.s)),o["\u0275did"](15,16384,null,0,d.RequiredValidator,[],{required:[0,"required"]},null),o["\u0275prd"](1024,null,d.NG_VALIDATORS,(function(n){return[n]}),[d.RequiredValidator]),o["\u0275did"](17,16384,null,0,c.TextValueAccessor,[o.ElementRef],null,null),o["\u0275prd"](1024,null,d.NG_VALUE_ACCESSOR,(function(n){return[n]}),[c.TextValueAccessor]),o["\u0275did"](19,671744,null,0,d.FormControlName,[[3,d.ControlContainer],[6,d.NG_VALIDATORS],[8,null],[6,d.NG_VALUE_ACCESSOR],[2,d["\u0275angular_packages_forms_forms_q"]]],{name:[0,"name"]},null),o["\u0275prd"](2048,null,d.NgControl,null,[d.FormControlName]),o["\u0275did"](21,16384,null,0,d.NgControlStatus,[[4,d.NgControl]],null,null),o["\u0275did"](22,49152,null,0,c.IonInput,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{placeholder:[0,"placeholder"],required:[1,"required"],type:[2,"type"]},null),(n()(),o["\u0275and"](16777216,null,0,1,null,M)),o["\u0275did"](24,16384,null,0,s.NgIf,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),o["\u0275eld"](25,0,null,0,13,"ion-item",[["class","login-item"],["detail","false"]],null,null,null,g.mb,g.t)),o["\u0275did"](26,49152,null,0,c.IonItem,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{detail:[0,"detail"]},null),(n()(),o["\u0275eld"](27,0,null,0,2,"fa-icon",[["class","ng-fa-icon"],["slot","start"]],[[1,"title",0],[8,"innerHTML",1]],null,null,i.d,i.c)),o["\u0275did"](28,573440,null,0,u.c,[a.b,u.a,u.d,[2,u.i]],{icon:[0,"icon"]},null),o["\u0275pad"](29,2),(n()(),o["\u0275eld"](30,0,null,0,8,"ion-input",[["formControlName","password"],["placeholder","Password"],["required",""],["type","password"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var t=!0;"ionBlur"===l&&(t=!1!==o["\u0275nov"](n,33)._handleBlurEvent(e.target)&&t);"ionChange"===l&&(t=!1!==o["\u0275nov"](n,33)._handleInputEvent(e.target)&&t);return t}),g.ib,g.s)),o["\u0275did"](31,16384,null,0,d.RequiredValidator,[],{required:[0,"required"]},null),o["\u0275prd"](1024,null,d.NG_VALIDATORS,(function(n){return[n]}),[d.RequiredValidator]),o["\u0275did"](33,16384,null,0,c.TextValueAccessor,[o.ElementRef],null,null),o["\u0275prd"](1024,null,d.NG_VALUE_ACCESSOR,(function(n){return[n]}),[c.TextValueAccessor]),o["\u0275did"](35,671744,null,0,d.FormControlName,[[3,d.ControlContainer],[6,d.NG_VALIDATORS],[8,null],[6,d.NG_VALUE_ACCESSOR],[2,d["\u0275angular_packages_forms_forms_q"]]],{name:[0,"name"]},null),o["\u0275prd"](2048,null,d.NgControl,null,[d.FormControlName]),o["\u0275did"](37,16384,null,0,d.NgControlStatus,[[4,d.NgControl]],null,null),o["\u0275did"](38,49152,null,0,c.IonInput,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{placeholder:[0,"placeholder"],required:[1,"required"],type:[2,"type"]},null),(n()(),o["\u0275and"](16777216,null,0,1,null,P)),o["\u0275did"](40,16384,null,0,s.NgIf,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),o["\u0275eld"](41,0,null,0,2,"ion-button",[["class","loginButton"],["expand","block"],["type","submit"]],null,null,null,g.R,g.b)),o["\u0275did"](42,49152,null,0,c.IonButton,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{disabled:[0,"disabled"],expand:[1,"expand"],type:[2,"type"]},null),(n()(),o["\u0275ted"](-1,0,["Login "]))],(function(n,l){var e=l.component;n(l,2,0,e.loginForm),n(l,6,0,e.submit);n(l,10,0,"false");var o=n(l,13,0,"fas","user-circle");n(l,12,0,o);n(l,15,0,"");n(l,19,0,"username");n(l,22,0,"Username or Email","","text"),n(l,24,0,e.loginForm.get("username").hasError("required")&&(e.loginForm.get("username").dirty||e.loginForm.get("username").touched));n(l,26,0,"false");var t=n(l,29,0,"fas","unlock-alt");n(l,28,0,t);n(l,31,0,"");n(l,35,0,"password");n(l,38,0,"Password","","password"),n(l,40,0,e.loginForm.get("password").hasError("required")&&(e.loginForm.get("password").dirty||e.loginForm.get("password").touched));n(l,42,0,!e.loginForm.valid,"block","submit")}),(function(n,l){n(l,0,0,o["\u0275nov"](l,4).ngClassUntouched,o["\u0275nov"](l,4).ngClassTouched,o["\u0275nov"](l,4).ngClassPristine,o["\u0275nov"](l,4).ngClassDirty,o["\u0275nov"](l,4).ngClassValid,o["\u0275nov"](l,4).ngClassInvalid,o["\u0275nov"](l,4).ngClassPending),n(l,11,0,o["\u0275nov"](l,12).title,o["\u0275nov"](l,12).renderedIconHTML),n(l,14,0,o["\u0275nov"](l,15).required?"":null,o["\u0275nov"](l,21).ngClassUntouched,o["\u0275nov"](l,21).ngClassTouched,o["\u0275nov"](l,21).ngClassPristine,o["\u0275nov"](l,21).ngClassDirty,o["\u0275nov"](l,21).ngClassValid,o["\u0275nov"](l,21).ngClassInvalid,o["\u0275nov"](l,21).ngClassPending),n(l,27,0,o["\u0275nov"](l,28).title,o["\u0275nov"](l,28).renderedIconHTML),n(l,30,0,o["\u0275nov"](l,31).required?"":null,o["\u0275nov"](l,37).ngClassUntouched,o["\u0275nov"](l,37).ngClassTouched,o["\u0275nov"](l,37).ngClassPristine,o["\u0275nov"](l,37).ngClassDirty,o["\u0275nov"](l,37).ngClassValid,o["\u0275nov"](l,37).ngClassInvalid,o["\u0275nov"](l,37).ngClassPending)}))}function O(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,1,"ion-header",[],null,null,null,g.eb,g.o)),o["\u0275did"](1,49152,null,0,c.IonHeader,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(n()(),o["\u0275eld"](2,0,null,null,18,"ion-content",[],null,null,null,g.Y,g.i)),o["\u0275did"](3,49152,null,0,c.IonContent,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(n()(),o["\u0275eld"](4,0,null,0,8,"div",[["class","profile-card-div"]],null,null,null,null,null)),(n()(),o["\u0275eld"](5,0,null,null,7,"ion-card",[["class","home-card"]],null,null,null,g.V,g.d)),o["\u0275did"](6,49152,null,0,c.IonCard,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(n()(),o["\u0275eld"](7,0,null,0,5,"div",[["class","home-header"]],null,null,null,null,null)),(n()(),o["\u0275eld"](8,0,null,null,4,"h3",[],null,null,null,null,null)),(n()(),o["\u0275ted"](-1,null,["Welcome to "])),(n()(),o["\u0275eld"](10,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),o["\u0275ted"](-1,null,["Arope Insurance Egypt"])),(n()(),o["\u0275ted"](-1,null,["Employee Self Service"])),(n()(),o["\u0275eld"](13,0,null,0,7,"div",[["class","home-data-card"]],null,null,null,null,null)),(n()(),o["\u0275eld"](14,0,null,null,2,"div",[["class","head-div"]],null,null,null,null,null)),(n()(),o["\u0275eld"](15,0,null,null,1,"h2",[["class","login"]],null,null,null,null,null)),(n()(),o["\u0275ted"](-1,null,[" LOGIN"])),(n()(),o["\u0275and"](16777216,null,null,1,null,R)),o["\u0275did"](18,16384,null,0,s.NgIf,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),o["\u0275and"](16777216,null,null,1,null,N)),o["\u0275did"](20,16384,null,0,s.NgIf,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,l){var e=l.component;n(l,18,0,e.biometric),n(l,20,0,!e.biometric)}),null)}var y=o["\u0275ccf"]("app-login",_,(function(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,1,"app-login",[],null,null,null,O,I)),o["\u0275did"](1,114688,null,0,_,[c.NavController,c.MenuController,d.FormBuilder,m.a,f.a,h.a,C.a,v.a,c.Platform,c.NavController],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),w=e("ZYCi"),S=function(){};e.d(l,"LoginPageModuleNgFactory",(function(){return k}));var k=o["\u0275cmf"](t,[],(function(n){return o["\u0275mod"]([o["\u0275mpd"](512,o.ComponentFactoryResolver,o["\u0275CodegenComponentFactoryResolver"],[[8,[r.a,y,i.b,i.a]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["\u0275mpd"](4608,s.NgLocalization,s.NgLocaleLocalization,[o.LOCALE_ID,[2,s["\u0275angular_packages_common_common_a"]]]),o["\u0275mpd"](4608,d["\u0275angular_packages_forms_forms_o"],d["\u0275angular_packages_forms_forms_o"],[]),o["\u0275mpd"](4608,c.AngularDelegate,c.AngularDelegate,[o.NgZone,o.ApplicationRef]),o["\u0275mpd"](4608,c.ModalController,c.ModalController,[c.AngularDelegate,o.ComponentFactoryResolver,o.Injector]),o["\u0275mpd"](4608,c.PopoverController,c.PopoverController,[c.AngularDelegate,o.ComponentFactoryResolver,o.Injector]),o["\u0275mpd"](4608,d.FormBuilder,d.FormBuilder,[]),o["\u0275mpd"](1073742336,s.CommonModule,s.CommonModule,[]),o["\u0275mpd"](1073742336,d["\u0275angular_packages_forms_forms_d"],d["\u0275angular_packages_forms_forms_d"],[]),o["\u0275mpd"](1073742336,d.FormsModule,d.FormsModule,[]),o["\u0275mpd"](1073742336,c.IonicModule,c.IonicModule,[]),o["\u0275mpd"](1073742336,d.ReactiveFormsModule,d.ReactiveFormsModule,[]),o["\u0275mpd"](1073742336,w.o,w.o,[[2,w.t],[2,w.m]]),o["\u0275mpd"](1073742336,S,S,[]),o["\u0275mpd"](1073742336,u.j,u.j,[]),o["\u0275mpd"](1073742336,t,t,[]),o["\u0275mpd"](1024,w.k,(function(){return[[{path:"",component:_}]]}),[])])}))}}]);