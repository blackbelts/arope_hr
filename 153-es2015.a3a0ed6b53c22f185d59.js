(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{Isyb:function(l,n,e){"use strict";e.r(n);var o=e("8Y7J");class t{}var s=e("fNgX"),a=e("pMnS"),u=e("oBZk"),i=e("SVse"),d=e("ZZ/e"),c=e("Nv++"),r=e("cUpR"),g=e("mrSG"),h=e("wojB"),p=e("H+bZ"),f=e("2Rin"),m=e("ME7K"),v=e("p74H"),C=e("xoVG"),b=e("0azT"),w=e("/MHU"),I=e("bRl7"),M=e("LAMn"),k=e("ElRG"),R=e("zP/x"),_=e("zuHl");class N{constructor(l,n,e,o,t,s,a,u,i,d,c,r,g,h,p,f){this.popoverController=l,this.events=n,this.navController=e,this.referenceservice=o,this.apiservice=t,this.statusBar=s,this.shared=a,this.network=u,this.bluetoothle=i,this.bluetoothSerial=d,this.wifiWizard2=c,this.finger=r,this.platform=g,this.odooApi=h,this.device=p,this.ble=f,this.leaves=[],console.log("device UUID",this.device.uuid),n.subscribe("homeOptions",l=>{this.onPopOverDismiss(l)}),this.statusBar.overlaysWebView(!1),this.statusBar.backgroundColorByHexString("#073e89"),this.referenceservice.loading(),this.odooApi.employeeChart(this.shared.user_id).then(l=>{this.referenceservice.dismissLoading(),0==JSON.parse(JSON.stringify(l)).data.length?(console.log("no team"),this.shared.haveTeam.next(!1),console.log(this.shared.haveTeam.value)):(console.log("have a team "),this.shared.haveTeam.next(!0),console.log(this.shared.haveTeam.value)),console.log("employeeChart",l)}).catch(l=>{this.referenceservice.dismissLoading(),console.log("employeeChart error",l)})}qrGenerator(){}ngOnInit(){}ionViewDidEnter(){this.applyClassBySelection("zoomIn"),this.statusBar.overlaysWebView(!1),this.statusBar.backgroundColorByHexString("#073e89")}showModal(l){return g.b(this,void 0,void 0,(function*(){const n=yield this.popoverController.create({component:m.a,event:l,translucent:!0,componentProps:{type:"homeOptions"}});return console.log(l),yield n.present()}))}onPopOverDismiss(l){"settings"===l?this.navController.navigateForward("/settings",{state:{pageType:"push"}}):"profile"===l?this.navController.navigateForward("/profile/"):"logout"===l&&this.logout()}applyClassBySelection(l){this.cssClass="animated "+l}logout(){this.referenceservice.logout("Confirm","Are you sure want to logout?",this.color)}openLeaves(l){this.navController.navigateForward("/leave-type",{state:{state:l}})}openAttendance(){this.navController.navigateForward("attendance-log")}openTeam(){this.navController.navigateForward("/employee-list")}openToApprove(){this.navController.navigateForward("/leave-list")}clockIn(){this.odooApi.checkIn(this.formatDate(new Date),this.shared.user_id).then(l=>{console.log("checkIn",l),this.referenceservice.dismissLoading(),alert("you clock in")})}clockOut(){this.odooApi.checkOut(this.formatDate(new Date),this.shared.user_id).then(l=>{console.log("checkOut",l),this.referenceservice.dismissLoading(),alert("you clock out")})}authAttendance(l){return g.b(this,void 0,void 0,(function*(){this.navController.navigateForward("/qr",{state:{type:l}})}))}formatDate(l){var n=new Date(l),e=""+(n.getMonth()+1),o=""+n.getDate(),t=n.getFullYear(),s=""+n.getHours(),a=""+n.getMinutes(),u=""+n.getSeconds();return s.length<2&&(s="0"+s),a.length<2&&(a="0"+a),u.length<2&&(u="0"+u),e.length<2&&(e="0"+e),o.length<2&&(o="0"+o),[t,e,o].join("-")+" "+[s,a,u].join(":")}}var O=[[".welcome-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:35vh;overflow:hidden}.home-data-card[_ngcontent-%COMP%]{position:relative;background:#fff;border-radius:50px;width:100%}.profile-card-div[_ngcontent-%COMP%]{background:#fff;height:100px;width:100%!important;margin:0!important;box-shadow:none!important}.dashboard-area[_ngcontent-%COMP%]{position:relative;width:100%;padding:0 20px}.dashboard-col[_ngcontent-%COMP%]{padding:10px!important}.home-card[_ngcontent-%COMP%]{margin:0!important;box-shadow:none!important}.dash-widget[_ngcontent-%COMP%]{background:#073e89;border:1px solid #e7e7e7;box-shadow:5px 5px 5px 5px rgba(0,0,0,.08);overflow:hidden;padding:15px;height:140px;text-align:center;margin:0 auto;border-radius:25px}.home-header[_ngcontent-%COMP%]{height:144px;position:relative;top:10px;margin:0 auto;text-align:center;padding:12px;border-radius:100px;width:300px}.background-content[_ngcontent-%COMP%]{--background:#e2e2e2!important}.dash-amount[_ngcontent-%COMP%]{font-size:22px;font-weight:800;margin-top:5px;margin-bottom:2px}.dash-text[_ngcontent-%COMP%]{font-size:.9em;margin-top:0;font-weight:400;white-space:break-spaces}.blues-nav[_ngcontent-%COMP%]{--background:#073e89}ion-item[_ngcontent-%COMP%]{--ion-background-color:rgba(255, 255, 255, 0)}.nav-content[_ngcontent-%COMP%]{color:#fff}.optn-btn[_ngcontent-%COMP%]{font-size:26px}.header-md[_ngcontent-%COMP%]:after{background-image:none!important}.dash-widget-icon[_ngcontent-%COMP%]{border:1px solid #fff;border-radius:50%;height:60px;width:60px;padding:0;margin:auto}fa-icon[_ngcontent-%COMP%]{border-radius:50%;font-size:32px;line-height:60px;font-weight:400;text-align:center;color:#fff}.dash-widget-info[_ngcontent-%COMP%]{color:#fff}.sc-ion-card-md-s[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;width:100%}ion-menu-button[_ngcontent-%COMP%]{color:#fff}.dash-widget-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:80px;border-radius:50px;border:1px solid}.dash-widget-icon[_ngcontent-%COMP%]   .custom-icon-dashboard-employee-icons[_ngcontent-%COMP%], .dash-widget-icon[_ngcontent-%COMP%]   .custom-icon-dashboard-project-icon[_ngcontent-%COMP%]{border-color:#fe9c45}.dash-widget-icon[_ngcontent-%COMP%]   .custom-icon-dashboard-employee-icons[_ngcontent-%COMP%]:before, .dash-widget-icon[_ngcontent-%COMP%]   .custom-icon-dashboard-project-icon[_ngcontent-%COMP%]:before{color:#fe9c45}.dash-widget-icon[_ngcontent-%COMP%]   .custom-icon-dashboard-client-icon[_ngcontent-%COMP%], .dash-widget-icon[_ngcontent-%COMP%]   .custom-icon-dashboard-invoice-icons[_ngcontent-%COMP%]{border-color:#073e89}.dash-widget-icon[_ngcontent-%COMP%]   .custom-icon-dashboard-client-icon[_ngcontent-%COMP%]:before, .dash-widget-icon[_ngcontent-%COMP%]   .custom-icon-dashboard-invoice-icons[_ngcontent-%COMP%]:before{color:#073e89}"]],x=o["\u0275crt"]({encapsulation:0,styles:O,data:{}});function P(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,11,"ion-col",[["class","dashboard-col"],["size","6"]],null,[[null,"click"]],(function(l,n,e){var o=!0,t=l.component;"click"===n&&(o=!1!==t.openTeam()&&o);return o}),u.X,u.h)),o["\u0275prd"](512,null,i["\u0275NgClassImpl"],i["\u0275NgClassR2Impl"],[o.IterableDiffers,o.KeyValueDiffers,o.ElementRef,o.Renderer2]),o["\u0275did"](2,278528,null,0,i.NgClass,[i["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),o["\u0275did"](3,49152,null,0,d.IonCol,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{size:[0,"size"]},null),(l()(),o["\u0275eld"](4,0,null,0,7,"div",[["class","dash-widget"]],null,null,null,null,null)),(l()(),o["\u0275eld"](5,0,null,null,3,"div",[["class","dash-widget-icon"]],null,null,null,null,null)),(l()(),o["\u0275eld"](6,0,null,null,2,"fa-icon",[["class","ng-fa-icon"],["slot","end"]],[[1,"title",0],[8,"innerHTML",1]],null,null,s.d,s.c)),o["\u0275did"](7,573440,null,0,c.c,[r.b,c.a,c.d,[2,c.i]],{icon:[0,"icon"]},null),o["\u0275pad"](8,2),(l()(),o["\u0275eld"](9,0,null,null,2,"div",[["class","dash-widget-info"]],null,null,null,null,null)),(l()(),o["\u0275eld"](10,0,null,null,1,"p",[["class","dash-text"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["My Team"]))],(function(l,n){l(n,2,0,"dashboard-col",n.component.cssClass);l(n,3,0,"6");var e=l(n,8,0,"fas","users");l(n,7,0,e)}),(function(l,n){l(n,6,0,o["\u0275nov"](n,7).title,o["\u0275nov"](n,7).renderedIconHTML)}))}function D(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,11,"ion-col",[["class","dashboard-col"],["size","6"]],null,[[null,"click"]],(function(l,n,e){var o=!0,t=l.component;"click"===n&&(o=!1!==t.openToApprove()&&o);return o}),u.X,u.h)),o["\u0275prd"](512,null,i["\u0275NgClassImpl"],i["\u0275NgClassR2Impl"],[o.IterableDiffers,o.KeyValueDiffers,o.ElementRef,o.Renderer2]),o["\u0275did"](2,278528,null,0,i.NgClass,[i["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),o["\u0275did"](3,49152,null,0,d.IonCol,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{size:[0,"size"]},null),(l()(),o["\u0275eld"](4,0,null,0,7,"div",[["class","dash-widget"]],null,null,null,null,null)),(l()(),o["\u0275eld"](5,0,null,null,3,"div",[["class","dash-widget-icon"]],null,null,null,null,null)),(l()(),o["\u0275eld"](6,0,null,null,2,"fa-icon",[["class","ng-fa-icon"],["slot","end"]],[[1,"title",0],[8,"innerHTML",1]],null,null,s.d,s.c)),o["\u0275did"](7,573440,null,0,c.c,[r.b,c.a,c.d,[2,c.i]],{icon:[0,"icon"]},null),o["\u0275pad"](8,2),(l()(),o["\u0275eld"](9,0,null,null,2,"div",[["class","dash-widget-info"]],null,null,null,null,null)),(l()(),o["\u0275eld"](10,0,null,null,1,"p",[["class","dash-text"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["Leaves to Approve"]))],(function(l,n){l(n,2,0,"dashboard-col",n.component.cssClass);l(n,3,0,"6");var e=l(n,8,0,"fas","calendar-check");l(n,7,0,e)}),(function(l,n){l(n,6,0,o["\u0275nov"](n,7).title,o["\u0275nov"](n,7).renderedIconHTML)}))}function y(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,10,"ion-header",[],null,null,null,u.eb,u.o)),o["\u0275did"](1,49152,null,0,d.IonHeader,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275eld"](2,0,null,0,8,"ion-toolbar",[["class","blues-nav"]],null,null,null,u.Fb,u.P)),o["\u0275did"](3,49152,null,0,d.IonToolbar,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275eld"](4,0,null,0,3,"ion-buttons",[["class","nav-content"],["slot","start"]],null,null,null,u.S,u.c)),o["\u0275did"](5,49152,null,0,d.IonButtons,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275eld"](6,0,null,0,1,"ion-menu-button",[],null,null,null,u.qb,u.B)),o["\u0275did"](7,49152,null,0,d.IonMenuButton,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275eld"](8,0,null,0,2,"div",[["class","notification-div"]],null,null,null,null,null)),(l()(),o["\u0275eld"](9,0,null,null,1,"ion-icon",[["class","notificationIcon nav-content optn-btn"],["ios","ios-more"],["md","md-more"]],null,[[null,"click"]],(function(l,n,e){var o=!0,t=l.component;"click"===n&&(o=!1!==t.showModal(e)&&o);return o}),u.fb,u.p)),o["\u0275did"](10,49152,null,0,d.IonIcon,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{ios:[0,"ios"],md:[1,"md"]},null),(l()(),o["\u0275eld"](11,0,null,null,87,"ion-content",[],null,null,null,u.Y,u.i)),o["\u0275did"](12,49152,null,0,d.IonContent,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275eld"](13,0,null,0,85,"div",[],null,null,null,null,null)),(l()(),o["\u0275eld"](14,0,null,null,4,"div",[["class","profile-card-div"]],null,null,null,null,null)),(l()(),o["\u0275eld"](15,0,null,null,3,"ion-card",[["class","home-card"]],null,null,null,u.V,u.d)),o["\u0275did"](16,49152,null,0,d.IonCard,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275eld"](17,0,null,0,1,"div",[["class","home-header"]],null,null,null,null,null)),(l()(),o["\u0275eld"](18,0,null,null,0,"img",[["class","whiteLogo slide-in"],["src","./assets/imgs/en_logo.png"]],null,null,null,null,null)),(l()(),o["\u0275eld"](19,0,null,null,79,"div",[["class","home-data-card"]],null,null,null,null,null)),(l()(),o["\u0275eld"](20,0,null,null,78,"div",[["class","dashboard-area"]],null,null,null,null,null)),(l()(),o["\u0275eld"](21,0,null,null,77,"ion-row",[["class","dashboard-row"]],null,null,null,u.vb,u.F)),o["\u0275did"](22,49152,null,0,d.IonRow,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275eld"](23,0,null,0,11,"ion-col",[["class","dashboard-col"],["size","6"]],null,[[null,"click"]],(function(l,n,e){var o=!0,t=l.component;"click"===n&&(o=!1!==t.authAttendance("in")&&o);return o}),u.X,u.h)),o["\u0275prd"](512,null,i["\u0275NgClassImpl"],i["\u0275NgClassR2Impl"],[o.IterableDiffers,o.KeyValueDiffers,o.ElementRef,o.Renderer2]),o["\u0275did"](25,278528,null,0,i.NgClass,[i["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),o["\u0275did"](26,49152,null,0,d.IonCol,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{size:[0,"size"]},null),(l()(),o["\u0275eld"](27,0,null,0,7,"div",[["class","dash-widget yellow"]],null,null,null,null,null)),(l()(),o["\u0275eld"](28,0,null,null,3,"div",[["class","dash-widget-icon"]],null,null,null,null,null)),(l()(),o["\u0275eld"](29,0,null,null,2,"fa-icon",[["class","ng-fa-icon"],["slot","end"]],[[1,"title",0],[8,"innerHTML",1]],null,null,s.d,s.c)),o["\u0275did"](30,573440,null,0,c.c,[r.b,c.a,c.d,[2,c.i]],{icon:[0,"icon"]},null),o["\u0275pad"](31,2),(l()(),o["\u0275eld"](32,0,null,null,2,"div",[["class","dash-widget-info"]],null,null,null,null,null)),(l()(),o["\u0275eld"](33,0,null,null,1,"p",[["class","dash-text"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["Clock In"])),(l()(),o["\u0275eld"](35,0,null,0,11,"ion-col",[["class","dashboard-col"],["size","6"]],null,[[null,"click"]],(function(l,n,e){var o=!0,t=l.component;"click"===n&&(o=!1!==t.authAttendance("out")&&o);return o}),u.X,u.h)),o["\u0275prd"](512,null,i["\u0275NgClassImpl"],i["\u0275NgClassR2Impl"],[o.IterableDiffers,o.KeyValueDiffers,o.ElementRef,o.Renderer2]),o["\u0275did"](37,278528,null,0,i.NgClass,[i["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),o["\u0275did"](38,49152,null,0,d.IonCol,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{size:[0,"size"]},null),(l()(),o["\u0275eld"](39,0,null,0,7,"div",[["class","dash-widget"]],null,null,null,null,null)),(l()(),o["\u0275eld"](40,0,null,null,3,"div",[["class","dash-widget-icon"]],null,null,null,null,null)),(l()(),o["\u0275eld"](41,0,null,null,2,"fa-icon",[["class","ng-fa-icon"],["slot","end"]],[[1,"title",0],[8,"innerHTML",1]],null,null,s.d,s.c)),o["\u0275did"](42,573440,null,0,c.c,[r.b,c.a,c.d,[2,c.i]],{icon:[0,"icon"]},null),o["\u0275pad"](43,2),(l()(),o["\u0275eld"](44,0,null,null,2,"div",[["class","dash-widget-info"]],null,null,null,null,null)),(l()(),o["\u0275eld"](45,0,null,null,1,"p",[["class","dash-text"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["Clock Out"])),(l()(),o["\u0275and"](16777216,null,0,1,null,P)),o["\u0275did"](48,16384,null,0,i.NgIf,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),o["\u0275and"](16777216,null,0,1,null,D)),o["\u0275did"](50,16384,null,0,i.NgIf,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),o["\u0275eld"](51,0,null,0,11,"ion-col",[["class","dashboard-col"],["size","6"]],null,[[null,"click"]],(function(l,n,e){var o=!0,t=l.component;"click"===n&&(o=!1!==t.openLeaves("accepted")&&o);return o}),u.X,u.h)),o["\u0275prd"](512,null,i["\u0275NgClassImpl"],i["\u0275NgClassR2Impl"],[o.IterableDiffers,o.KeyValueDiffers,o.ElementRef,o.Renderer2]),o["\u0275did"](53,278528,null,0,i.NgClass,[i["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),o["\u0275did"](54,49152,null,0,d.IonCol,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{size:[0,"size"]},null),(l()(),o["\u0275eld"](55,0,null,0,7,"div",[["class","dash-widget yellow"]],null,null,null,null,null)),(l()(),o["\u0275eld"](56,0,null,null,3,"div",[["class","dash-widget-icon"]],null,null,null,null,null)),(l()(),o["\u0275eld"](57,0,null,null,2,"fa-icon",[["class","ng-fa-icon"],["slot","end"]],[[1,"title",0],[8,"innerHTML",1]],null,null,s.d,s.c)),o["\u0275did"](58,573440,null,0,c.c,[r.b,c.a,c.d,[2,c.i]],{icon:[0,"icon"]},null),o["\u0275pad"](59,2),(l()(),o["\u0275eld"](60,0,null,null,2,"div",[["class","dash-widget-info"]],null,null,null,null,null)),(l()(),o["\u0275eld"](61,0,null,null,1,"p",[["class","dash-text"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["Leaves"])),(l()(),o["\u0275eld"](63,0,null,0,11,"ion-col",[["class","dashboard-col"],["size","6"]],null,[[null,"click"]],(function(l,n,e){var o=!0,t=l.component;"click"===n&&(o=!1!==t.openAttendance()&&o);return o}),u.X,u.h)),o["\u0275prd"](512,null,i["\u0275NgClassImpl"],i["\u0275NgClassR2Impl"],[o.IterableDiffers,o.KeyValueDiffers,o.ElementRef,o.Renderer2]),o["\u0275did"](65,278528,null,0,i.NgClass,[i["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),o["\u0275did"](66,49152,null,0,d.IonCol,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{size:[0,"size"]},null),(l()(),o["\u0275eld"](67,0,null,0,7,"div",[["class","dash-widget"]],null,null,null,null,null)),(l()(),o["\u0275eld"](68,0,null,null,3,"div",[["class","dash-widget-icon"]],null,null,null,null,null)),(l()(),o["\u0275eld"](69,0,null,null,2,"fa-icon",[["class","ng-fa-icon"],["slot","end"]],[[1,"title",0],[8,"innerHTML",1]],null,null,s.d,s.c)),o["\u0275did"](70,573440,null,0,c.c,[r.b,c.a,c.d,[2,c.i]],{icon:[0,"icon"]},null),o["\u0275pad"](71,2),(l()(),o["\u0275eld"](72,0,null,null,2,"div",[["class","dash-widget-info"]],null,null,null,null,null)),(l()(),o["\u0275eld"](73,0,null,null,1,"p",[["class","dash-text"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["Attendance"])),(l()(),o["\u0275eld"](75,0,null,0,11,"ion-col",[["class","dashboard-col"],["size","6"]],null,[[null,"click"]],(function(l,n,e){var o=!0,t=l.component;"click"===n&&(o=!1!==t.openLeaves("accepted")&&o);return o}),u.X,u.h)),o["\u0275prd"](512,null,i["\u0275NgClassImpl"],i["\u0275NgClassR2Impl"],[o.IterableDiffers,o.KeyValueDiffers,o.ElementRef,o.Renderer2]),o["\u0275did"](77,278528,null,0,i.NgClass,[i["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),o["\u0275did"](78,49152,null,0,d.IonCol,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{size:[0,"size"]},null),(l()(),o["\u0275eld"](79,0,null,0,7,"div",[["class","dash-widget yellow"]],null,null,null,null,null)),(l()(),o["\u0275eld"](80,0,null,null,3,"div",[["class","dash-widget-icon"]],null,null,null,null,null)),(l()(),o["\u0275eld"](81,0,null,null,2,"fa-icon",[["class","ng-fa-icon"],["slot","end"]],[[1,"title",0],[8,"innerHTML",1]],null,null,s.d,s.c)),o["\u0275did"](82,573440,null,0,c.c,[r.b,c.a,c.d,[2,c.i]],{icon:[0,"icon"]},null),o["\u0275pad"](83,2),(l()(),o["\u0275eld"](84,0,null,null,2,"div",[["class","dash-widget-info"]],null,null,null,null,null)),(l()(),o["\u0275eld"](85,0,null,null,1,"p",[["class","dash-text"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["Appraisal"])),(l()(),o["\u0275eld"](87,0,null,0,11,"ion-col",[["class","dashboard-col"],["size","6"]],null,[[null,"click"]],(function(l,n,e){var o=!0,t=l.component;"click"===n&&(o=!1!==t.openAttendance()&&o);return o}),u.X,u.h)),o["\u0275prd"](512,null,i["\u0275NgClassImpl"],i["\u0275NgClassR2Impl"],[o.IterableDiffers,o.KeyValueDiffers,o.ElementRef,o.Renderer2]),o["\u0275did"](89,278528,null,0,i.NgClass,[i["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),o["\u0275did"](90,49152,null,0,d.IonCol,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{size:[0,"size"]},null),(l()(),o["\u0275eld"](91,0,null,0,7,"div",[["class","dash-widget"]],null,null,null,null,null)),(l()(),o["\u0275eld"](92,0,null,null,3,"div",[["class","dash-widget-icon"]],null,null,null,null,null)),(l()(),o["\u0275eld"](93,0,null,null,2,"fa-icon",[["class","ng-fa-icon"],["slot","end"]],[[1,"title",0],[8,"innerHTML",1]],null,null,s.d,s.c)),o["\u0275did"](94,573440,null,0,c.c,[r.b,c.a,c.d,[2,c.i]],{icon:[0,"icon"]},null),o["\u0275pad"](95,2),(l()(),o["\u0275eld"](96,0,null,null,2,"div",[["class","dash-widget-info"]],null,null,null,null,null)),(l()(),o["\u0275eld"](97,0,null,null,1,"p",[["class","dash-text"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["Targets"]))],(function(l,n){var e=n.component;l(n,10,0,"ios-more","md-more");l(n,25,0,"dashboard-col",e.cssClass);l(n,26,0,"6");var o=l(n,31,0,"fas","user-clock");l(n,30,0,o);l(n,37,0,"dashboard-col",e.cssClass);l(n,38,0,"6");var t=l(n,43,0,"fas","user-clock");l(n,42,0,t),l(n,48,0,e.shared.haveTeam.value),l(n,50,0,e.shared.haveTeam.value);l(n,53,0,"dashboard-col",e.cssClass);l(n,54,0,"6");var s=l(n,59,0,"far","clock");l(n,58,0,s);l(n,65,0,"dashboard-col",e.cssClass);l(n,66,0,"6");var a=l(n,71,0,"fas","calendar-check");l(n,70,0,a);l(n,77,0,"dashboard-col",e.cssClass);l(n,78,0,"6");var u=l(n,83,0,"far","clock");l(n,82,0,u);l(n,89,0,"dashboard-col",e.cssClass);l(n,90,0,"6");var i=l(n,95,0,"fas","chart-line");l(n,94,0,i)}),(function(l,n){l(n,29,0,o["\u0275nov"](n,30).title,o["\u0275nov"](n,30).renderedIconHTML),l(n,41,0,o["\u0275nov"](n,42).title,o["\u0275nov"](n,42).renderedIconHTML),l(n,57,0,o["\u0275nov"](n,58).title,o["\u0275nov"](n,58).renderedIconHTML),l(n,69,0,o["\u0275nov"](n,70).title,o["\u0275nov"](n,70).renderedIconHTML),l(n,81,0,o["\u0275nov"](n,82).title,o["\u0275nov"](n,82).renderedIconHTML),l(n,93,0,o["\u0275nov"](n,94).title,o["\u0275nov"](n,94).renderedIconHTML)}))}var z=o["\u0275ccf"]("app-home",N,(function(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,1,"app-home",[],null,null,null,y,x)),o["\u0275did"](1,114688,null,0,N,[d.PopoverController,d.Events,d.NavController,f.a,p.a,v.a,_.a,C.a,w.a,I.a,b.a,M.a,d.Platform,h.a,k.a,R.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),L=e("s7LF"),T=e("fozt"),E=e("iInd");e.d(n,"HomePageModuleNgFactory",(function(){return H}));var H=o["\u0275cmf"](t,[],(function(l){return o["\u0275mod"]([o["\u0275mpd"](512,o.ComponentFactoryResolver,o["\u0275CodegenComponentFactoryResolver"],[[8,[s.b,s.a,a.a,z]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["\u0275mpd"](4608,i.NgLocalization,i.NgLocaleLocalization,[o.LOCALE_ID,[2,i["\u0275angular_packages_common_common_a"]]]),o["\u0275mpd"](4608,L["\u0275angular_packages_forms_forms_o"],L["\u0275angular_packages_forms_forms_o"],[]),o["\u0275mpd"](4608,d.AngularDelegate,d.AngularDelegate,[o.NgZone,o.ApplicationRef]),o["\u0275mpd"](4608,d.ModalController,d.ModalController,[d.AngularDelegate,o.ComponentFactoryResolver,o.Injector]),o["\u0275mpd"](4608,d.PopoverController,d.PopoverController,[d.AngularDelegate,o.ComponentFactoryResolver,o.Injector]),o["\u0275mpd"](1073742336,i.CommonModule,i.CommonModule,[]),o["\u0275mpd"](1073742336,L["\u0275angular_packages_forms_forms_d"],L["\u0275angular_packages_forms_forms_d"],[]),o["\u0275mpd"](1073742336,L.FormsModule,L.FormsModule,[]),o["\u0275mpd"](1073742336,d.IonicModule,d.IonicModule,[]),o["\u0275mpd"](1073742336,c.j,c.j,[]),o["\u0275mpd"](1073742336,T.a,T.a,[]),o["\u0275mpd"](1073742336,E.o,E.o,[[2,E.t],[2,E.m]]),o["\u0275mpd"](1073742336,t,t,[]),o["\u0275mpd"](1024,E.k,(function(){return[[{path:"",component:N}]]}),[])])}))}}]);