(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{iVy2:function(l,n,e){"use strict";e.r(n);var t=e("8Y7J");class u{}var o=e("pMnS"),i=e("oBZk"),a=e("ZZ/e"),d=e("fNgX"),s=e("Nv++"),c=e("cUpR"),r=e("SVse"),g=e("s7LF"),f=e("mrSG"),p=e("FajM"),m=e("S0s0"),v=e("wojB"),C=e("2Rin"),h=e("1sW7"),R=e("zuHl");class b{constructor(l,n,e,t,u,o,i,a){this.navCntrl=l,this.modalController=n,this.alertController=e,this.util=t,this.odooApi=u,this.shared=o,this.sanitizer=i,this.router=a,this.leave="pending",this.leavesToApprove=[],this.approvedLeaves=[],this.refusedLeaves=[],this.submittedLeaves=[],null!=this.router.getCurrentNavigation().extras.state&&(this.leave=this.router.getCurrentNavigation().extras.state.state),null!=this.router.getCurrentNavigation().extras.state.employee?(this.employee=this.router.getCurrentNavigation().extras.state.employee,this.user_id=this.router.getCurrentNavigation().extras.state.employee.user_id[0]):this.user_id=this.shared.user_id,this.leaveList()}leaveList(){this.leavesToApprove=[],this.approvedLeaves=[],this.refusedLeaves=[],this.submittedLeaves=[],this.util.loading(),this.odooApi.getUserLeaves(this.user_id).then(l=>{let n=[];n=JSON.parse(JSON.stringify(l)).data,this.util.dismissLoaging(),n.forEach(l=>{"validate"==l.state?this.approvedLeaves.push(l):"refuse"==l.state?this.refusedLeaves.push(l):"confirm"==l.state||"validate1"==l.state?this.leavesToApprove.push(l):"draft"==l.state&&this.submittedLeaves.push(l)})})}ngOnInit(){}addLeaveType(){return f.b(this,void 0,void 0,(function*(){let l={component:h.a,cssClass:"custom-modal"};null!=this.leaveToEdit&&(l.componentProps={leaveToEdit:this.leaveToEdit}),console.log(l);const n=yield this.modalController.create(l);this.util.isModal="blurPage",yield n.present(),yield n.onWillDismiss().then(l=>{this.leaveToEdit=void 0,this.util.isModal="",this.leaveList()})}))}edit(){return f.b(this,void 0,void 0,(function*(){const l=yield this.modalController.create({component:m.a,cssClass:"custom-modal"});this.util.isModal="blurPage",yield l.present(),yield l.onWillDismiss().then(l=>{console.log(l),this.util.isModal=""})}))}editLeaveType(){this.navCntrl.navigateForward("/edit-leave-type")}deleteLeaveType(){return f.b(this,void 0,void 0,(function*(){const l=yield this.alertController.create({header:"Confirm Delete",message:"Do you want to delete this Leave",buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:l=>{console.log("Confirm Cancel: blah")}},{text:"OK",handler:()=>{console.log("Confirm Okay"),this.successAlert()}}]});yield l.present()}))}successAlert(){return f.b(this,void 0,void 0,(function*(){const l=yield this.alertController.create({header:"Success",message:"<strong> Leave Removed Successfully </strong>",buttons:[{text:"OK",handler:()=>{console.log("Confirm Okay")}}]});yield l.present()}))}leaveDetail(l){return f.b(this,void 0,void 0,(function*(){const n=yield this.modalController.create({component:p.a,componentProps:{leave:l},cssClass:"custom-modal"});this.util.isModal="blurPage",yield n.present(),yield n.onWillDismiss().then(l=>{null!=l.data?(this.leaveToEdit=l.data.leaveToEdit,console.log(this.leaveToEdit),this.addLeaveType()):this.leaveList(),this.util.isModal=""})}))}}var _=e("iInd"),M=[['.leave-content-div[_ngcontent-%COMP%]{background:#fff;border-radius:50px 50px 0 0;top:-50px;position:relative;width:100%}.leave-empty-div[_ngcontent-%COMP%]{background:#073e89;height:250px}.user-icon[_ngcontent-%COMP%]{font-size:85px;height:100%;width:100%}.profile-pic[_ngcontent-%COMP%]{margin:0 auto;display:block;height:100%;border-radius:50%;width:100%}.employee-div[_ngcontent-%COMP%]{text-align:center;border:1px solid #dcdcdc;border-radius:50%;background:#fff;height:100px;width:100px;margin:0 auto}.employee-name[_ngcontent-%COMP%]{font-size:14px;font-weight:700;text-align:center;color:#fff;margin-top:8px}.employee-design[_ngcontent-%COMP%]{font-size:16px;text-align:center;color:#fff}.custom-icon-edit-icon[_ngcontent-%COMP%]{font-size:35px;color:#fff;font-weight:500}.edit-icon[_ngcontent-%COMP%]{background:#fe9c45;border-radius:20px;position:absolute;height:40px;width:40px;margin-left:100px}.leave-segment[_ngcontent-%COMP%]{border-radius:50px;margin:auto auto 0;width:calc(100% - 10%);top:-20px;position:relative;background:#fff;box-shadow:-7px 10px 18px 7px rgba(0,0,0,.14);--background-checked:none;--indicator-color-checked:none}.leave-segment[_ngcontent-%COMP%]   .segment-button-checked[_ngcontent-%COMP%]   .seg-btn[_ngcontent-%COMP%]{border:2px solid}.leave-segment[_ngcontent-%COMP%]   .seg-btn[_ngcontent-%COMP%]{width:45px;height:45px;margin:5px auto;border-radius:50px}.leave-segment[_ngcontent-%COMP%]   .pending-icon[_ngcontent-%COMP%]{color:#fe9c45!important;border-color:#fe9c45}.leave-segment[_ngcontent-%COMP%]   .accepted-icon[_ngcontent-%COMP%]{color:#22d165!important;border-color:#22d165}.leave-segment[_ngcontent-%COMP%]   .rejected-icon[_ngcontent-%COMP%]{color:#f10a0a!important;border-color:#f10a0a}.leave-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]{min-width:auto!important;--padding-end:0px;--padding-start:0;--border-color:#fff0}.leave-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]   .seg-btn[_ngcontent-%COMP%]{font-size:1.7rem;color:#000}.seg-title[_ngcontent-%COMP%]{font-size:18px;font-weight:700}.border[_ngcontent-%COMP%]{border-top:2px solid #fe9c45;width:60px;margin-bottom:25px}.seg-content[_ngcontent-%COMP%]{padding-right:20px}.leave-timeline[_ngcontent-%COMP%]{position:relative;max-width:1200px;margin:0 auto}.leave-list[_ngcontent-%COMP%]{margin-left:50px}.leave-list[_ngcontent-%COMP%]   .leave-type[_ngcontent-%COMP%]{border-radius:50px;border:1px solid #fe9c45;color:#fe9c45;padding:2px 10px;font-size:14px!important;white-space:nowrap}.leave-list[_ngcontent-%COMP%]   .custom-icon-calendar-icon[_ngcontent-%COMP%]{color:#fe9c45}.leave-list[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]{text-align:end;color:#fe9c45;white-space:nowrap;margin:auto}.leave-list[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{white-space:break-spaces;color:#000}.leave-list[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{font-size:12px}.leave-timeline[_ngcontent-%COMP%]::after{content:"";position:absolute;width:2px;background-color:#d2d2d2;top:0;bottom:0;left:31px}.leave-container[_ngcontent-%COMP%]{position:relative;background-color:inherit}.leave-container[_ngcontent-%COMP%]::after{content:"";position:absolute;width:15px;height:15px;top:15px;border-radius:50%;z-index:1;margin-left:9px}.leave-container[_ngcontent-%COMP%]:nth-of-type(odd)::after{background-color:#073e89}.leave-container[_ngcontent-%COMP%]:nth-of-type(even)::after{background-color:#ff9f55}.left[_ngcontent-%COMP%]{left:0}.left[_ngcontent-%COMP%]::after, .right[_ngcontent-%COMP%]::after{left:15px}.fab-add-btn[_ngcontent-%COMP%]{--border-radius:15px!important;--background:#FE9C45}ion-fab[_ngcontent-%COMP%]{position:fixed!important;z-index:999}.refused[_ngcontent-%COMP%]   .border[_ngcontent-%COMP%]{border-top:2px solid #f10a0a}.refused[_ngcontent-%COMP%]   .leave-type[_ngcontent-%COMP%]{border:1px solid #f10a0a;color:#f10a0a}.refused[_ngcontent-%COMP%]   .custom-icon-calendar-icon[_ngcontent-%COMP%], .refused[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]{color:#f10a0a}.approved[_ngcontent-%COMP%]   .border[_ngcontent-%COMP%]{border-top:2px solid #22d165}.approved[_ngcontent-%COMP%]   .leave-type[_ngcontent-%COMP%]{border:1px solid #22d165;color:#22d165}.approved[_ngcontent-%COMP%]   .custom-icon-calendar-icon[_ngcontent-%COMP%], .approved[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]{color:#22d165}.empty[_ngcontent-%COMP%]{text-align:center}.empty[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:3rem;color:#073e89}.empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center}']],I=t["\u0275crt"]({encapsulation:0,styles:M,data:{}});function N(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,0,"img",[["class","profile-pic"]],[[8,"src",4]],null,null,null,null))],null,(function(l,n){var e=n.component;l(n,0,0,e.sanitizer.bypassSecurityTrustUrl("data:image/png;base64, "+e.shared.employee.image_1024))}))}function w(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,0,"img",[["class","profile-pic"]],[[8,"src",4]],null,null,null,null))],null,(function(l,n){var e=n.component;l(n,0,0,e.sanitizer.bypassSecurityTrustUrl("data:image/png;base64, "+e.employee.image_1024))}))}function y(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"div",[["class","employee-name"]],null,null,null,null,null)),(l()(),t["\u0275ted"](1,null,["",""]))],null,(function(l,n){l(n,1,0,n.component.shared.employee.display_name)}))}function O(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"div",[["class","employee-design"]],null,null,null,null,null)),(l()(),t["\u0275ted"](1,null,["",""]))],null,(function(l,n){l(n,1,0,n.component.shared.employee.job_id[1])}))}function x(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"div",[["class","employee-name"]],null,null,null,null,null)),(l()(),t["\u0275ted"](1,null,["",""]))],null,(function(l,n){l(n,1,0,n.component.employee.display_name)}))}function P(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"div",[["class","employee-design"]],null,null,null,null,null)),(l()(),t["\u0275ted"](1,null,["",""]))],null,(function(l,n){l(n,1,0,n.component.employee.job_id[1])}))}function z(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,25,"div",[["class","leave-container left "]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,24,"ion-list",[["class","leave-list"]],null,null,null,i.pb,i.y)),t["\u0275did"](2,49152,null,0,a.IonList,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](3,0,null,0,8,"ion-row",[],null,null,null,i.vb,i.F)),t["\u0275did"](4,49152,null,0,a.IonRow,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](5,0,null,0,3,"ion-col",[["size","6"]],null,null,null,i.X,i.h)),t["\u0275did"](6,49152,null,0,a.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275eld"](7,0,null,0,1,"span",[["class","leave-type"]],null,null,null,null,null)),(l()(),t["\u0275ted"](8,null,["",""])),(l()(),t["\u0275eld"](9,0,null,0,2,"ion-col",[["class","end action"],["size","6"]],null,[[null,"click"]],(function(l,n,e){var t=!0,u=l.component;"click"===n&&(t=!1!==u.leaveDetail(l.context.$implicit)&&t);return t}),i.X,i.h)),t["\u0275did"](10,49152,null,0,a.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275ted"](-1,0,["View Details"])),(l()(),t["\u0275eld"](12,0,null,0,13,"ion-row",[],null,null,null,i.vb,i.F)),t["\u0275did"](13,49152,null,0,a.IonRow,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](14,0,null,0,5,"ion-col",[["size","6"]],null,null,null,i.X,i.h)),t["\u0275did"](15,49152,null,0,a.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275eld"](16,0,null,0,0,"span",[["class","custom-icon-calendar-icon"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,0,["\xa0"])),(l()(),t["\u0275eld"](18,0,null,0,1,"span",[["class","date"]],null,null,null,null,null)),(l()(),t["\u0275ted"](19,null,["",""])),(l()(),t["\u0275eld"](20,0,null,0,5,"ion-col",[["class","end"],["size","6"]],null,null,null,i.X,i.h)),t["\u0275did"](21,49152,null,0,a.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275eld"](22,0,null,0,0,"span",[["class","custom-icon-calendar-icon"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,0,["\xa0 "])),(l()(),t["\u0275eld"](24,0,null,0,1,"span",[["class","date"]],null,null,null,null,null)),(l()(),t["\u0275ted"](25,null,["",""]))],(function(l,n){l(n,6,0,"6");l(n,10,0,"6");l(n,15,0,"6");l(n,21,0,"6")}),(function(l,n){l(n,8,0,n.context.$implicit.private_name),l(n,19,0,n.context.$implicit.date_from),l(n,25,0,n.context.$implicit.date_to)}))}function D(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,5,"div",[["class","empty"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,2,"fa-icon",[["class","ng-fa-icon"],["slot","end"]],[[1,"title",0],[8,"innerHTML",1]],null,null,d.d,d.c)),t["\u0275did"](2,573440,null,0,s.c,[c.b,s.a,s.d,[2,s.i]],{icon:[0,"icon"]},null),t["\u0275pad"](3,2),(l()(),t["\u0275eld"](4,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["No Submitted leaves "]))],(function(l,n){var e=l(n,3,0,"far","frown");l(n,2,0,e)}),(function(l,n){l(n,1,0,t["\u0275nov"](n,2).title,t["\u0275nov"](n,2).renderedIconHTML)}))}function E(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,8,"div",[["class","seg-content"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,7,"div",[["class","leave-timeline"]],null,null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,1,"h4",[["class","seg-title leave-list"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Submitted"])),(l()(),t["\u0275eld"](4,0,null,null,0,"div",[["class","border leave-list"]],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,z)),t["\u0275did"](6,278528,null,0,r.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,D)),t["\u0275did"](8,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(l,n){var e=n.component;l(n,6,0,e.submittedLeaves),l(n,8,0,0==e.submittedLeaves.length)}),null)}function L(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,25,"div",[["class","leave-container left "]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,24,"ion-list",[["class","leave-list"]],null,null,null,i.pb,i.y)),t["\u0275did"](2,49152,null,0,a.IonList,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](3,0,null,0,8,"ion-row",[],null,null,null,i.vb,i.F)),t["\u0275did"](4,49152,null,0,a.IonRow,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](5,0,null,0,3,"ion-col",[["size","6"]],null,null,null,i.X,i.h)),t["\u0275did"](6,49152,null,0,a.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275eld"](7,0,null,0,1,"span",[["class","leave-type"]],null,null,null,null,null)),(l()(),t["\u0275ted"](8,null,["",""])),(l()(),t["\u0275eld"](9,0,null,0,2,"ion-col",[["class","end action"],["size","6"]],null,[[null,"click"]],(function(l,n,e){var t=!0,u=l.component;"click"===n&&(t=!1!==u.leaveDetail(l.context.$implicit)&&t);return t}),i.X,i.h)),t["\u0275did"](10,49152,null,0,a.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275ted"](-1,0,["View Details"])),(l()(),t["\u0275eld"](12,0,null,0,13,"ion-row",[],null,null,null,i.vb,i.F)),t["\u0275did"](13,49152,null,0,a.IonRow,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](14,0,null,0,5,"ion-col",[["size","6"]],null,null,null,i.X,i.h)),t["\u0275did"](15,49152,null,0,a.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275eld"](16,0,null,0,0,"span",[["class","custom-icon-calendar-icon"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,0,["\xa0"])),(l()(),t["\u0275eld"](18,0,null,0,1,"span",[["class","date"]],null,null,null,null,null)),(l()(),t["\u0275ted"](19,null,["",""])),(l()(),t["\u0275eld"](20,0,null,0,5,"ion-col",[["class","end"],["size","6"]],null,null,null,i.X,i.h)),t["\u0275did"](21,49152,null,0,a.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275eld"](22,0,null,0,0,"span",[["class","custom-icon-calendar-icon"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,0,["\xa0 "])),(l()(),t["\u0275eld"](24,0,null,0,1,"span",[["class","date"]],null,null,null,null,null)),(l()(),t["\u0275ted"](25,null,["",""]))],(function(l,n){l(n,6,0,"6");l(n,10,0,"6");l(n,15,0,"6");l(n,21,0,"6")}),(function(l,n){l(n,8,0,n.context.$implicit.private_name),l(n,19,0,n.context.$implicit.date_from),l(n,25,0,n.context.$implicit.date_to)}))}function T(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,5,"div",[["class","empty"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,2,"fa-icon",[["class","ng-fa-icon"],["slot","end"]],[[1,"title",0],[8,"innerHTML",1]],null,null,d.d,d.c)),t["\u0275did"](2,573440,null,0,s.c,[c.b,s.a,s.d,[2,s.i]],{icon:[0,"icon"]},null),t["\u0275pad"](3,2),(l()(),t["\u0275eld"](4,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["No Pending leaves "]))],(function(l,n){var e=l(n,3,0,"far","frown");l(n,2,0,e)}),(function(l,n){l(n,1,0,t["\u0275nov"](n,2).title,t["\u0275nov"](n,2).renderedIconHTML)}))}function Z(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,8,"div",[["class","seg-content"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,7,"div",[["class","leave-timeline"]],null,null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,1,"h4",[["class","seg-title leave-list"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Pending"])),(l()(),t["\u0275eld"](4,0,null,null,0,"div",[["class","border leave-list"]],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,L)),t["\u0275did"](6,278528,null,0,r.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,T)),t["\u0275did"](8,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(l,n){var e=n.component;l(n,6,0,e.leavesToApprove),l(n,8,0,0==e.leavesToApprove.length)}),null)}function k(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,25,"div",[["class","leave-container left"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,24,"ion-list",[["class","leave-list"]],null,null,null,i.pb,i.y)),t["\u0275did"](2,49152,null,0,a.IonList,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](3,0,null,0,8,"ion-row",[],null,null,null,i.vb,i.F)),t["\u0275did"](4,49152,null,0,a.IonRow,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](5,0,null,0,3,"ion-col",[["size","6"]],null,null,null,i.X,i.h)),t["\u0275did"](6,49152,null,0,a.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275eld"](7,0,null,0,1,"span",[["class","leave-type"]],null,null,null,null,null)),(l()(),t["\u0275ted"](8,null,["",""])),(l()(),t["\u0275eld"](9,0,null,0,2,"ion-col",[["class","end action"],["size","6"]],null,[[null,"click"]],(function(l,n,e){var t=!0,u=l.component;"click"===n&&(t=!1!==u.leaveDetail(l.context.$implicit)&&t);return t}),i.X,i.h)),t["\u0275did"](10,49152,null,0,a.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275ted"](-1,0,["View Details"])),(l()(),t["\u0275eld"](12,0,null,0,13,"ion-row",[],null,null,null,i.vb,i.F)),t["\u0275did"](13,49152,null,0,a.IonRow,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](14,0,null,0,5,"ion-col",[["size","6"]],null,null,null,i.X,i.h)),t["\u0275did"](15,49152,null,0,a.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275eld"](16,0,null,0,0,"span",[["class","custom-icon-calendar-icon"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,0,["\xa0"])),(l()(),t["\u0275eld"](18,0,null,0,1,"span",[["class","date"]],null,null,null,null,null)),(l()(),t["\u0275ted"](19,null,["",""])),(l()(),t["\u0275eld"](20,0,null,0,5,"ion-col",[["class","end"],["size","6"]],null,null,null,i.X,i.h)),t["\u0275did"](21,49152,null,0,a.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275eld"](22,0,null,0,0,"span",[["class","custom-icon-calendar-icon"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,0,["\xa0 "])),(l()(),t["\u0275eld"](24,0,null,0,1,"span",[["class","date"]],null,null,null,null,null)),(l()(),t["\u0275ted"](25,null,["",""]))],(function(l,n){l(n,6,0,"6");l(n,10,0,"6");l(n,15,0,"6");l(n,21,0,"6")}),(function(l,n){l(n,8,0,n.context.$implicit.private_name),l(n,19,0,n.context.$implicit.date_from),l(n,25,0,n.context.$implicit.date_to)}))}function S(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,5,"div",[["class","empty"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,2,"fa-icon",[["class","ng-fa-icon"],["slot","end"]],[[1,"title",0],[8,"innerHTML",1]],null,null,d.d,d.c)),t["\u0275did"](2,573440,null,0,s.c,[c.b,s.a,s.d,[2,s.i]],{icon:[0,"icon"]},null),t["\u0275pad"](3,2),(l()(),t["\u0275eld"](4,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["No Approved leaves "]))],(function(l,n){var e=l(n,3,0,"far","frown");l(n,2,0,e)}),(function(l,n){l(n,1,0,t["\u0275nov"](n,2).title,t["\u0275nov"](n,2).renderedIconHTML)}))}function F(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,8,"div",[["class","seg-content approved"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,7,"div",[["class","leave-timeline"]],null,null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,1,"h4",[["class","seg-title leave-list "]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Approved"])),(l()(),t["\u0275eld"](4,0,null,null,0,"div",[["class","border leave-list"]],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,k)),t["\u0275did"](6,278528,null,0,r.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,S)),t["\u0275did"](8,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(l,n){var e=n.component;l(n,6,0,e.approvedLeaves),l(n,8,0,0==e.approvedLeaves.length)}),null)}function V(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,25,"div",[["class","leave-container left "]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,24,"ion-list",[["class","leave-list"]],null,null,null,i.pb,i.y)),t["\u0275did"](2,49152,null,0,a.IonList,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](3,0,null,0,8,"ion-row",[],null,null,null,i.vb,i.F)),t["\u0275did"](4,49152,null,0,a.IonRow,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](5,0,null,0,3,"ion-col",[["size","6"]],null,null,null,i.X,i.h)),t["\u0275did"](6,49152,null,0,a.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275eld"](7,0,null,0,1,"span",[["class","leave-type"]],null,null,null,null,null)),(l()(),t["\u0275ted"](8,null,["",""])),(l()(),t["\u0275eld"](9,0,null,0,2,"ion-col",[["class","end action"],["size","6"]],null,[[null,"click"]],(function(l,n,e){var t=!0,u=l.component;"click"===n&&(t=!1!==u.leaveDetail(l.context.$implicit)&&t);return t}),i.X,i.h)),t["\u0275did"](10,49152,null,0,a.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275ted"](-1,0,["View Details"])),(l()(),t["\u0275eld"](12,0,null,0,13,"ion-row",[],null,null,null,i.vb,i.F)),t["\u0275did"](13,49152,null,0,a.IonRow,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](14,0,null,0,5,"ion-col",[["size","6"]],null,null,null,i.X,i.h)),t["\u0275did"](15,49152,null,0,a.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275eld"](16,0,null,0,0,"span",[["class","custom-icon-calendar-icon"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,0,["\xa0"])),(l()(),t["\u0275eld"](18,0,null,0,1,"span",[["class","date"]],null,null,null,null,null)),(l()(),t["\u0275ted"](19,null,["",""])),(l()(),t["\u0275eld"](20,0,null,0,5,"ion-col",[["class","end"],["size","6"]],null,null,null,i.X,i.h)),t["\u0275did"](21,49152,null,0,a.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275eld"](22,0,null,0,0,"span",[["class","custom-icon-calendar-icon"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,0,["\xa0 "])),(l()(),t["\u0275eld"](24,0,null,0,1,"span",[["class","date"]],null,null,null,null,null)),(l()(),t["\u0275ted"](25,null,["",""]))],(function(l,n){l(n,6,0,"6");l(n,10,0,"6");l(n,15,0,"6");l(n,21,0,"6")}),(function(l,n){l(n,8,0,n.context.$implicit.private_name),l(n,19,0,n.context.$implicit.date_from),l(n,25,0,n.context.$implicit.date_to)}))}function A(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,5,"div",[["class","empty"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,2,"fa-icon",[["class","ng-fa-icon"],["slot","end"]],[[1,"title",0],[8,"innerHTML",1]],null,null,d.d,d.c)),t["\u0275did"](2,573440,null,0,s.c,[c.b,s.a,s.d,[2,s.i]],{icon:[0,"icon"]},null),t["\u0275pad"](3,2),(l()(),t["\u0275eld"](4,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["No Rejected leaves "]))],(function(l,n){var e=l(n,3,0,"far","frown");l(n,2,0,e)}),(function(l,n){l(n,1,0,t["\u0275nov"](n,2).title,t["\u0275nov"](n,2).renderedIconHTML)}))}function H(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,8,"div",[["class","seg-content refused"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,7,"div",[["class","leave-timeline"]],null,null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,1,"h4",[["class","seg-title leave-list"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Rejected"])),(l()(),t["\u0275eld"](4,0,null,null,0,"div",[["class","border leave-list"]],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,V)),t["\u0275did"](6,278528,null,0,r.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,A)),t["\u0275did"](8,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(l,n){var e=n.component;l(n,6,0,e.refusedLeaves),l(n,8,0,0==e.refusedLeaves.length)}),null)}function X(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,5,"ion-fab",[["horizontal","end"],["slot","fixed"],["vertical","bottom"]],null,null,null,i.bb,i.k)),t["\u0275did"](1,49152,null,0,a.IonFab,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),t["\u0275eld"](2,0,null,0,3,"ion-fab-button",[["class","fab-add-btn"]],null,[[null,"click"]],(function(l,n,e){var t=!0,u=l.component;"click"===n&&(t=!1!==u.addLeaveType()&&t);return t}),i.ab,i.l)),t["\u0275did"](3,49152,null,0,a.IonFabButton,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](4,0,null,0,1,"ion-icon",[["name","add"]],null,null,null,i.fb,i.p)),t["\u0275did"](5,49152,null,0,a.IonIcon,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null)],(function(l,n){l(n,1,0,"end","bottom");l(n,5,0,"add")}),null)}function $(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,18,"ion-header",[],null,null,null,i.eb,i.o)),t["\u0275prd"](512,null,r["\u0275NgClassImpl"],r["\u0275NgClassR2Impl"],[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2]),t["\u0275did"](2,278528,null,0,r.NgClass,[r["\u0275NgClassImpl"]],{ngClass:[0,"ngClass"]},null),t["\u0275did"](3,49152,null,0,a.IonHeader,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](4,0,null,0,14,"ion-toolbar",[["class","blues-nav"]],null,null,null,i.Fb,i.P)),t["\u0275did"](5,49152,null,0,a.IonToolbar,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](6,0,null,0,12,"ion-row",[],null,null,null,i.vb,i.F)),t["\u0275did"](7,49152,null,0,a.IonRow,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](8,0,null,0,4,"ion-col",[["class","nav-back"],["size","2"],["size-md","1"]],null,null,null,i.X,i.h)),t["\u0275did"](9,49152,null,0,a.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275eld"](10,0,null,0,2,"span",[["class","custom-icon-back-arrow-icon"]],null,[[null,"click"]],(function(l,n,e){var t=!0,u=l.component;"click"===n&&(t=!1!==u.util.popBack()&&t);return t}),null,null)),(l()(),t["\u0275eld"](11,0,null,null,0,"span",[["class","path1"]],null,null,null,null,null)),(l()(),t["\u0275eld"](12,0,null,null,0,"span",[["class","path2"]],null,null,null,null,null)),(l()(),t["\u0275eld"](13,0,null,0,5,"ion-col",[["class","nav-content"],["size","10"],["size-md","11"]],null,null,null,i.X,i.h)),t["\u0275did"](14,49152,null,0,a.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275eld"](15,0,null,0,3,"ion-title",[],null,null,null,i.Db,i.N)),t["\u0275did"](16,49152,null,0,a.IonTitle,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](17,0,null,0,1,"span",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Leaves"])),(l()(),t["\u0275eld"](19,0,null,null,62,"ion-content",[],null,null,null,i.Y,i.i)),t["\u0275prd"](512,null,r["\u0275NgClassImpl"],r["\u0275NgClassR2Impl"],[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2]),t["\u0275did"](21,278528,null,0,r.NgClass,[r["\u0275NgClassImpl"]],{ngClass:[0,"ngClass"]},null),t["\u0275did"](22,49152,null,0,a.IonContent,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](23,0,null,0,14,"div",[["class","leave-empty-div"]],null,null,null,null,null)),(l()(),t["\u0275eld"](24,0,null,null,5,"div",[["class","employee-div"]],null,null,null,null,null)),(l()(),t["\u0275eld"](25,0,null,null,4,"div",[["class","user-icon"]],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,N)),t["\u0275did"](27,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,w)),t["\u0275did"](29,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,y)),t["\u0275did"](31,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,O)),t["\u0275did"](33,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,x)),t["\u0275did"](35,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,P)),t["\u0275did"](37,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](38,0,null,0,43,"div",[["class","leave-content-div"]],null,null,null,null,null)),(l()(),t["\u0275eld"](39,0,null,null,30,"ion-segment",[["class","leave-segment"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var u=!0,o=l.component;"ionBlur"===n&&(u=!1!==t["\u0275nov"](l,40)._handleBlurEvent(e.target)&&u);"ionChange"===n&&(u=!1!==t["\u0275nov"](l,40)._handleChangeEvent(e.target)&&u);"ngModelChange"===n&&(u=!1!==(o.leave=e)&&u);return u}),i.xb,i.G)),t["\u0275did"](40,16384,null,0,a.SelectValueAccessor,[t.ElementRef],null,null),t["\u0275prd"](1024,null,g.NG_VALUE_ACCESSOR,(function(l){return[l]}),[a.SelectValueAccessor]),t["\u0275did"](42,671744,null,0,g.NgModel,[[8,null],[8,null],[8,null],[6,g.NG_VALUE_ACCESSOR]],{model:[0,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,g.NgControl,null,[g.NgModel]),t["\u0275did"](44,16384,null,0,g.NgControlStatus,[[4,g.NgControl]],null,null),t["\u0275did"](45,49152,null,0,a.IonSegment,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](46,0,null,0,5,"ion-segment-button",[["checked","true"],["value","submitted"]],null,null,null,i.wb,i.H)),t["\u0275did"](47,49152,null,0,a.IonSegmentButton,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{checked:[0,"checked"],value:[1,"value"]},null),(l()(),t["\u0275eld"](48,0,null,0,3,"div",[["class","seg-btn pending-icon"]],null,null,null,null,null)),(l()(),t["\u0275eld"](49,0,null,null,2,"fa-icon",[["class","ng-fa-icon"],["slot","end"]],[[1,"title",0],[8,"innerHTML",1]],null,null,d.d,d.c)),t["\u0275did"](50,573440,null,0,s.c,[c.b,s.a,s.d,[2,s.i]],{icon:[0,"icon"]},null),t["\u0275pad"](51,2),(l()(),t["\u0275eld"](52,0,null,0,5,"ion-segment-button",[["value","pending"]],null,null,null,i.wb,i.H)),t["\u0275did"](53,49152,null,0,a.IonSegmentButton,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{value:[0,"value"]},null),(l()(),t["\u0275eld"](54,0,null,0,3,"div",[["class","seg-btn pending-icon"]],null,null,null,null,null)),(l()(),t["\u0275eld"](55,0,null,null,2,"fa-icon",[["class","ng-fa-icon"],["slot","end"]],[[1,"title",0],[8,"innerHTML",1]],null,null,d.d,d.c)),t["\u0275did"](56,573440,null,0,s.c,[c.b,s.a,s.d,[2,s.i]],{icon:[0,"icon"]},null),t["\u0275pad"](57,2),(l()(),t["\u0275eld"](58,0,null,0,5,"ion-segment-button",[["value","accepted"]],null,null,null,i.wb,i.H)),t["\u0275did"](59,49152,null,0,a.IonSegmentButton,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{value:[0,"value"]},null),(l()(),t["\u0275eld"](60,0,null,0,3,"div",[["class","seg-btn accepted-icon"]],null,null,null,null,null)),(l()(),t["\u0275eld"](61,0,null,null,2,"fa-icon",[["class","ng-fa-icon"],["slot","end"]],[[1,"title",0],[8,"innerHTML",1]],null,null,d.d,d.c)),t["\u0275did"](62,573440,null,0,s.c,[c.b,s.a,s.d,[2,s.i]],{icon:[0,"icon"]},null),t["\u0275pad"](63,2),(l()(),t["\u0275eld"](64,0,null,0,5,"ion-segment-button",[["value","rejected"]],null,null,null,i.wb,i.H)),t["\u0275did"](65,49152,null,0,a.IonSegmentButton,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{value:[0,"value"]},null),(l()(),t["\u0275eld"](66,0,null,0,3,"div",[["class","seg-btn rejected-icon"]],null,null,null,null,null)),(l()(),t["\u0275eld"](67,0,null,null,2,"fa-icon",[["class","ng-fa-icon"],["slot","end"]],[[1,"title",0],[8,"innerHTML",1]],null,null,d.d,d.c)),t["\u0275did"](68,573440,null,0,s.c,[c.b,s.a,s.d,[2,s.i]],{icon:[0,"icon"]},null),t["\u0275pad"](69,2),(l()(),t["\u0275eld"](70,0,null,null,11,"div",[],null,null,null,null,null)),t["\u0275did"](71,16384,null,0,r.NgSwitch,[],{ngSwitch:[0,"ngSwitch"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,E)),t["\u0275did"](73,278528,null,0,r.NgSwitchCase,[t.ViewContainerRef,t.TemplateRef,r.NgSwitch],{ngSwitchCase:[0,"ngSwitchCase"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,Z)),t["\u0275did"](75,278528,null,0,r.NgSwitchCase,[t.ViewContainerRef,t.TemplateRef,r.NgSwitch],{ngSwitchCase:[0,"ngSwitchCase"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,F)),t["\u0275did"](77,278528,null,0,r.NgSwitchCase,[t.ViewContainerRef,t.TemplateRef,r.NgSwitch],{ngSwitchCase:[0,"ngSwitchCase"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,H)),t["\u0275did"](79,278528,null,0,r.NgSwitchCase,[t.ViewContainerRef,t.TemplateRef,r.NgSwitch],{ngSwitchCase:[0,"ngSwitchCase"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,X)),t["\u0275did"](81,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(l,n){var e=n.component;l(n,2,0,e.util.isModal);l(n,9,0,"2");l(n,14,0,"10"),l(n,21,0,e.util.isModal),l(n,27,0,null==e.employee),l(n,29,0,null!=e.employee),l(n,31,0,null==e.employee),l(n,33,0,null==e.employee),l(n,35,0,null!=e.employee),l(n,37,0,null!=e.employee),l(n,42,0,e.leave);l(n,47,0,"true","submitted");var t=l(n,51,0,"far","calendar-alt");l(n,50,0,t);l(n,53,0,"pending");var u=l(n,57,0,"far","calendar-alt");l(n,56,0,u);l(n,59,0,"accepted");var o=l(n,63,0,"far","calendar-alt");l(n,62,0,o);l(n,65,0,"rejected");var i=l(n,69,0,"far","calendar-alt");l(n,68,0,i),l(n,71,0,e.leave);l(n,73,0,"submitted");l(n,75,0,"pending");l(n,77,0,"accepted");l(n,79,0,"rejected"),l(n,81,0,null==e.employee)}),(function(l,n){l(n,39,0,t["\u0275nov"](n,44).ngClassUntouched,t["\u0275nov"](n,44).ngClassTouched,t["\u0275nov"](n,44).ngClassPristine,t["\u0275nov"](n,44).ngClassDirty,t["\u0275nov"](n,44).ngClassValid,t["\u0275nov"](n,44).ngClassInvalid,t["\u0275nov"](n,44).ngClassPending),l(n,49,0,t["\u0275nov"](n,50).title,t["\u0275nov"](n,50).renderedIconHTML),l(n,55,0,t["\u0275nov"](n,56).title,t["\u0275nov"](n,56).renderedIconHTML),l(n,61,0,t["\u0275nov"](n,62).title,t["\u0275nov"](n,62).renderedIconHTML),l(n,67,0,t["\u0275nov"](n,68).title,t["\u0275nov"](n,68).renderedIconHTML)}))}var j=t["\u0275ccf"]("app-leave-type",b,(function(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-leave-type",[],null,null,null,$,I)),t["\u0275did"](1,114688,null,0,b,[a.NavController,a.ModalController,a.AlertController,C.a,v.a,R.a,c.b,_.m],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]);class B{}e.d(n,"LeaveTypePageModuleNgFactory",(function(){return U}));var U=t["\u0275cmf"](u,[],(function(l){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,j,d.b,d.a]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,r.NgLocalization,r.NgLocaleLocalization,[t.LOCALE_ID,[2,r["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,g["\u0275angular_packages_forms_forms_o"],g["\u0275angular_packages_forms_forms_o"],[]),t["\u0275mpd"](4608,a.AngularDelegate,a.AngularDelegate,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,a.ModalController,a.ModalController,[a.AngularDelegate,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,a.PopoverController,a.PopoverController,[a.AngularDelegate,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](1073742336,r.CommonModule,r.CommonModule,[]),t["\u0275mpd"](1073742336,g["\u0275angular_packages_forms_forms_d"],g["\u0275angular_packages_forms_forms_d"],[]),t["\u0275mpd"](1073742336,g.FormsModule,g.FormsModule,[]),t["\u0275mpd"](1073742336,a.IonicModule,a.IonicModule,[]),t["\u0275mpd"](1073742336,_.o,_.o,[[2,_.t],[2,_.m]]),t["\u0275mpd"](1073742336,B,B,[]),t["\u0275mpd"](1073742336,s.j,s.j,[]),t["\u0275mpd"](1073742336,u,u,[]),t["\u0275mpd"](1024,_.k,(function(){return[[{path:"",component:b}]]}),[])])}))}}]);