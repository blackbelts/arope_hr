(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{dCrD:function(l,n,e){"use strict";e.r(n);var t=e("CcnG"),o=function(){},i=e("pMnS"),u=e("oBZk"),a=e("ZZ/e"),s=e("Ip0R"),c=e("2Rin"),d=function(){function l(l,n){this.util=l,this.navContrl=n,this.mailList=[{from:"Github",initial:"G",subject:"Why do we use it?",time:"1:04 AM",stared:!0,message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt.Cras dolor metus, ultrices condimentum sodalessit amet, pharetra sodales eros"},{from:"Facebook",initial:"F",subject:"Why do we use it?",time:"1:04 AM",stared:!1,message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt.Cras dolor metus, ultrices condimentum sodalessit amet, pharetra sodales eros"},{from:"Jhon Deo",initial:"J",subject:"Why do we use it?",time:"1:04 AM",stared:!0,message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt.Cras dolor metus, ultrices condimentum sodalessit amet, pharetra sodales eros"},{from:"Arun",initial:"A",subject:"Why do we use it?",time:"1:04 AM",stared:!1,message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt.Cras dolor metus, ultrices condimentum sodalessit amet, pharetra sodales eros"},{from:"Bala",initial:"B",subject:"Why do we use it?",time:"1:04 AM",stared:!0,message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt.Cras dolor metus, ultrices condimentum sodalessit amet, pharetra sodales eros"}],this.colors={A:"#800080",B:"#008054",C:"#e74bec",D:"#4bd2ec",E:"#ec4b4b",F:"#4b87ec",G:"#800080",H:"#008054",I:"#e74bec",J:"#4bd2ec",K:"#ec4b4b",L:"#4b87ec",M:"#800080",N:"#008054",O:"#e74bec",P:"#4bd2ec",Q:"#ec4b4b",R:"#4b87ec",S:"#800080",T:"#008054",U:"#4682B4",V:"#7B68EE",W:"#D2691E",X:"#BC8F8F",Y:"#778899",Z:"#696969"}}return l.prototype.ngOnInit=function(){},l.prototype.viewMail=function(){this.navContrl.navigateForward("/view-mail")},l.prototype.composeMail=function(){this.navContrl.navigateForward("/compose-mail")},l.prototype.delete=function(l){var n=this;this.util.deleteAlert("Confirm Delete","Do you want to delete this mail").then((function(e){n.mailList.splice(l,1),n.util.showAlert("Smart HR","Mail Removed Successfully")}))},l}(),r=[[".email-content-div[_ngcontent-%COMP%]{background:#fff;border-radius:50px 50px 0 0;top:-50px;position:relative;width:100%}.head-title[_ngcontent-%COMP%]{color:#fff;font-size:16px;font-weight:700}.email-empty-div[_ngcontent-%COMP%]{background:#073e89;height:120px}.email[_ngcontent-%COMP%]   .custom-icon-email-icon[_ngcontent-%COMP%]{font-size:40px;color:#fff}.mail-list[_ngcontent-%COMP%]{top:20px!important;position:relative;padding-right:10px}.chat-name[_ngcontent-%COMP%]{display:inline-block!important;font-size:15px!important;font-weight:600!important;width:85%}.chat-time[_ngcontent-%COMP%]{font-weight:400!important;font-size:14px!important;line-height:1.5!important;white-space:normal!important;position:absolute;right:0;top:16px}.chat-sub[_ngcontent-%COMP%]{font-size:14px;color:#000}.chat-text[_ngcontent-%COMP%]{font-size:15px;white-space:normal;max-height:54px;max-width:92%;overflow:hidden;margin-top:0}.notification-item[_ngcontent-%COMP%]{background:#fff;border-bottom:1px solid #ada7a7;margin-left:16px;--inner-padding-end:0;margin-right:16px}.letter-icon[_ngcontent-%COMP%]{border-radius:50px;color:#fff;text-align:center;font-size:30px;height:60px;width:60px;padding-top:8px;margin:24px auto}.star-icon[_ngcontent-%COMP%]{width:20px;position:absolute;bottom:30px;right:0}.time-icon[_ngcontent-%COMP%]{width:15px;position:absolute;right:35px;top:20px}.details-col[_ngcontent-%COMP%]{padding-left:20px}"]],m=t["\u0275crt"]({encapsulation:0,styles:r,data:{}});function p(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,28,"ion-item-sliding",[],null,null,null,u.lb,u.w)),t["\u0275did"](1,49152,null,0,a.IonItemSliding,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](2,0,null,0,21,"ion-item",[["class","notification-item ion-no-padding"],["lines","none"]],null,[[null,"click"]],(function(l,n,e){var t=!0,o=l.component;"click"===n&&(t=!1!==o.viewMail()&&t);return t}),u.mb,u.t)),t["\u0275did"](3,49152,null,0,a.IonItem,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{lines:[0,"lines"]},null),(l()(),t["\u0275eld"](4,0,null,0,19,"ion-row",[],null,null,null,u.vb,u.F)),t["\u0275did"](5,49152,null,0,a.IonRow,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](6,0,null,0,3,"ion-col",[["class","letter-icon-col"],["size","2"]],null,null,null,u.X,u.h)),t["\u0275did"](7,49152,null,0,a.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275eld"](8,0,null,0,1,"div",[["class","letter-icon"]],[[4,"background-color",null]],null,null,null,null)),(l()(),t["\u0275ted"](9,null,["",""])),(l()(),t["\u0275eld"](10,0,null,0,13,"ion-col",[["class","details-col"],["size","10"]],null,null,null,u.X,u.h)),t["\u0275did"](11,49152,null,0,a.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275eld"](12,0,null,0,6,"ion-row",[],null,null,null,u.vb,u.F)),t["\u0275did"](13,49152,null,0,a.IonRow,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](14,0,null,0,1,"h4",[["class","chat-name"]],null,null,null,null,null)),(l()(),t["\u0275ted"](15,null,[""," "])),(l()(),t["\u0275eld"](16,0,null,0,0,"img",[["class","time-icon"],["src","./assets/imgs/time.png"]],null,null,null,null,null)),(l()(),t["\u0275eld"](17,0,null,0,1,"span",[["class","chat-time"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["17:14"])),(l()(),t["\u0275eld"](19,0,null,0,4,"ion-row",[],null,null,null,u.vb,u.F)),t["\u0275did"](20,49152,null,0,a.IonRow,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](21,0,null,0,1,"h2",[["class","chat-text"]],null,null,null,null,null)),(l()(),t["\u0275ted"](22,null,[" ",""])),(l()(),t["\u0275eld"](23,0,null,0,0,"img",[["class","star-icon"],["src","./assets/imgs/star.png"]],null,null,null,null,null)),(l()(),t["\u0275eld"](24,0,null,0,4,"ion-item-options",[["side","end"]],null,null,null,u.kb,u.v)),t["\u0275did"](25,49152,null,0,a.IonItemOptions,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{side:[0,"side"]},null),(l()(),t["\u0275eld"](26,0,null,0,2,"ion-item-option",[["color","danger"]],null,[[null,"click"]],(function(l,n,e){var t=!0,o=l.component;"click"===n&&(t=!1!==o.delete(l.context.index)&&t);return t}),u.jb,u.u)),t["\u0275did"](27,49152,null,0,a.IonItemOption,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(l()(),t["\u0275ted"](-1,0,["Delete "]))],(function(l,n){l(n,3,0,"none");l(n,7,0,"2");l(n,11,0,"10");l(n,25,0,"end");l(n,27,0,"danger")}),(function(l,n){l(n,8,0,n.component.colors[n.context.$implicit.initial]),l(n,9,0,n.context.$implicit.initial),l(n,15,0,n.context.$implicit.subject),l(n,22,0,n.context.$implicit.message)}))}function g(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,16,"ion-header",[],null,null,null,u.eb,u.o)),t["\u0275did"](1,49152,null,0,a.IonHeader,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](2,0,null,0,14,"ion-toolbar",[["class","blues-nav"]],null,null,null,u.Fb,u.P)),t["\u0275did"](3,49152,null,0,a.IonToolbar,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](4,0,null,0,12,"ion-row",[],null,null,null,u.vb,u.F)),t["\u0275did"](5,49152,null,0,a.IonRow,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](6,0,null,0,4,"ion-col",[["class","nav-back"],["size","2"]],null,null,null,u.X,u.h)),t["\u0275did"](7,49152,null,0,a.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275eld"](8,0,null,0,2,"span",[["class","custom-icon-back-arrow-icon"]],null,[[null,"click"]],(function(l,n,e){var t=!0,o=l.component;"click"===n&&(t=!1!==o.util.popBack()&&t);return t}),null,null)),(l()(),t["\u0275eld"](9,0,null,null,0,"span",[["class","path1"]],null,null,null,null,null)),(l()(),t["\u0275eld"](10,0,null,null,0,"span",[["class","path2"]],null,null,null,null,null)),(l()(),t["\u0275eld"](11,0,null,0,5,"ion-col",[["class","nav-content"],["size","10"]],null,null,null,u.X,u.h)),t["\u0275did"](12,49152,null,0,a.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275eld"](13,0,null,0,3,"ion-title",[],null,null,null,u.Db,u.N)),t["\u0275did"](14,49152,null,0,a.IonTitle,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](15,0,null,0,1,"span",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Email"])),(l()(),t["\u0275eld"](17,0,null,null,18,"ion-content",[],null,null,null,u.Y,u.i)),t["\u0275did"](18,49152,null,0,a.IonContent,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](19,0,null,0,5,"div",[["class","email-empty-div"]],null,null,null,null,null)),(l()(),t["\u0275eld"](20,0,null,null,4,"ion-item",[["class","email"],["lines","none"]],null,null,null,u.mb,u.t)),t["\u0275did"](21,49152,null,0,a.IonItem,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{lines:[0,"lines"]},null),(l()(),t["\u0275eld"](22,0,null,0,1,"span",[["class","head-title"],["slot","start"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Inbox"])),(l()(),t["\u0275eld"](24,0,null,0,0,"span",[["class","custom-icon-email-icon"],["slot","end"]],null,null,null,null,null)),(l()(),t["\u0275eld"](25,0,null,0,4,"div",[["class","email-content-div"]],null,null,null,null,null)),(l()(),t["\u0275eld"](26,0,null,null,3,"ion-list",[["class","mail-list"]],null,null,null,u.pb,u.y)),t["\u0275did"](27,49152,null,0,a.IonList,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275and"](16777216,null,0,1,null,p)),t["\u0275did"](29,278528,null,0,s.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),t["\u0275eld"](30,0,null,0,5,"ion-fab",[["horizontal","end"],["slot","fixed"],["vertical","bottom"]],null,null,null,u.bb,u.k)),t["\u0275did"](31,49152,null,0,a.IonFab,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),t["\u0275eld"](32,0,null,0,3,"ion-fab-button",[["class","fab-add-btn"]],null,[[null,"click"]],(function(l,n,e){var t=!0,o=l.component;"click"===n&&(t=!1!==o.composeMail()&&t);return t}),u.ab,u.l)),t["\u0275did"](33,49152,null,0,a.IonFabButton,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](34,0,null,0,1,"ion-icon",[["name","add"]],null,null,null,u.fb,u.p)),t["\u0275did"](35,49152,null,0,a.IonIcon,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null)],(function(l,n){var e=n.component;l(n,7,0,"2");l(n,12,0,"10");l(n,21,0,"none"),l(n,29,0,e.mailList);l(n,31,0,"end","bottom");l(n,35,0,"add")}),null)}var f=t["\u0275ccf"]("app-mail-list",d,(function(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-mail-list",[],null,null,null,g,m)),t["\u0275did"](1,114688,null,0,d,[c.a,a.NavController],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),h=e("gIcY"),b=e("ZYCi"),C=function(){};e.d(n,"MailListPageModuleNgFactory",(function(){return R}));var R=t["\u0275cmf"](o,[],(function(l){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[i.a,f]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,s.NgLocalization,s.NgLocaleLocalization,[t.LOCALE_ID,[2,s["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,h["\u0275angular_packages_forms_forms_o"],h["\u0275angular_packages_forms_forms_o"],[]),t["\u0275mpd"](4608,a.AngularDelegate,a.AngularDelegate,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,a.ModalController,a.ModalController,[a.AngularDelegate,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,a.PopoverController,a.PopoverController,[a.AngularDelegate,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](1073742336,s.CommonModule,s.CommonModule,[]),t["\u0275mpd"](1073742336,h["\u0275angular_packages_forms_forms_d"],h["\u0275angular_packages_forms_forms_d"],[]),t["\u0275mpd"](1073742336,h.FormsModule,h.FormsModule,[]),t["\u0275mpd"](1073742336,a.IonicModule,a.IonicModule,[]),t["\u0275mpd"](1073742336,b.o,b.o,[[2,b.t],[2,b.m]]),t["\u0275mpd"](1073742336,C,C,[]),t["\u0275mpd"](1073742336,o,o,[]),t["\u0275mpd"](1024,b.k,(function(){return[[{path:"",component:d}]]}),[])])}))}}]);