(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{OXxZ:function(l,n,e){"use strict";e.r(n);var t=e("CcnG"),u=function(){},o=e("pMnS"),i=e("oBZk"),s=e("ZZ/e"),a=e("Ip0R"),c=e("2Rin"),d=function(){function l(l){this.referenceService=l,this.items=[],this.tax1=0,this.subtotal=0,this.tax2=0,this.discount=0,this.dueamnt=0,this.statusLogo={accepted:"",rejected:"",pending:""},this.total=0}return l.prototype.ngOnInit=function(){var l=this;this.statusLogo.accepted="./assets/imgs/Paid.png",this.statusLogo.rejected="./assets/imgs/Unpaid.png",this.statusLogo.pending="./assets/imgs/pending.png",this.referenceService.getParams("invoice").then((function(n){l.invoice=n,console.log(l.invoice),l.setLogo(),l.items=l.invoice.items,l.tax1=Math.ceil(l.subtotal*(.01*parseInt(l.invoice.tax1))),l.tax2=Math.ceil(l.subtotal*(.01*parseInt(l.invoice.tax2))),l.discount=Math.ceil(l.subtotal*(.01*parseInt(l.invoice.discount))),l.dueamnt=l.invoice.total_cost-l.invoice.payment_made,l.total=l.subtotal+.01*parseInt(l.invoice.tax1)+.01*parseInt(l.invoice.tax1),l.dueamnt<0&&(l.dueamnt=0)}))},l.prototype.setLogo=function(){"Paid"===this.invoice.status?this.currentStatusLogo=this.statusLogo.accepted:"Unpaid"===this.invoice.status?this.currentStatusLogo=this.statusLogo.rejected:this.currentStatusLogo=this.statusLogo.pending,console.log(this.currentStatusLogo)},l}(),r=[[".estimates-content-div[_ngcontent-%COMP%]{background:#fff;border-radius:50px 50px 0 0;top:-50px;position:relative;width:100%}.head-title[_ngcontent-%COMP%]{color:#fff;font-size:16px;font-weight:700}.estimates-empty-div[_ngcontent-%COMP%]{background:#073e89;height:120px}.estimates[_ngcontent-%COMP%]   .custom-icon-dashboard-invoice-icons[_ngcontent-%COMP%]{font-size:60px;color:#fff}.estimate-item[_ngcontent-%COMP%]{width:50%!important;padding:5px;border-right:1px solid #ccc;text-align:center;margin:auto}.right[_ngcontent-%COMP%]{border-right:0!important}.right.col[_ngcontent-%COMP%]{padding:0!important}.estimate-table[_ngcontent-%COMP%]{border:1px solid #ccc;max-width:100%;width:100%;border-collapse:collapse;border-spacing:0;font-size:12px}.estimate-total-row[_ngcontent-%COMP%]{font-size:12px!important;margin:0!important}.estimate-row[_ngcontent-%COMP%]{border:1px solid #ccc;font-size:12px!important;margin:0!important}.estimate-total[_ngcontent-%COMP%]{width:47%!important;padding:5px 0;float:left;text-align:center;font-size:10px!important}.estimate-price[_ngcontent-%COMP%]{width:33.3%!important;padding:7px;float:left;font-size:9px;text-align:center;border-right:1px solid #ccc}.sub-col[_ngcontent-%COMP%]{border:2px solid #ccc;border-right:2px solid #ccc!important;border-top:0}.total[_ngcontent-%COMP%]{text-align:center!important}.estimate-price.right.total[_ngcontent-%COMP%]{width:53%!important;border-left:1px solid #ccc!important}.estimate-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-family:Poppins-Regular;font-size:12px}.estimate-price[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .estimate-total[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:10px!important}.profile-list[_ngcontent-%COMP%]{top:20px;padding:0 15px;margin-bottom:10px;position:relative}.paySlipLogo[_ngcontent-%COMP%]{width:300px;margin-top:-25px!important;margin:0 auto;display:block;padding-bottom:5%}@media only screen and (max-width:324px){.paySlipLogo[_ngcontent-%COMP%]{width:calc(100% - 90px)!important}}.status-logo[_ngcontent-%COMP%]{width:50px}.inv-company[_ngcontent-%COMP%]{display:block;width:100%;font-size:12px!important;font-weight:700!important;margin:5px 0}.inv-receiver[_ngcontent-%COMP%]{font-size:12px;margin-bottom:10px}.invoice-details[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .invoice-details1[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:12px;font-weight:400;display:block;margin-top:10px}.inv-receiver-address[_ngcontent-%COMP%]{font-size:12px!important;margin:0!important}.invoice-details[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{text-align:right}.head-name[_ngcontent-%COMP%], .invoice-details[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .invoice-details1[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:12px!important;font-family:Poppins-Medium}.head-name[_ngcontent-%COMP%]{margin:20px 0 10px}.inv-recieve[_ngcontent-%COMP%]{text-align:right}.right[_ngcontent-%COMP%]{float:right}"]],g=t["\u0275crt"]({encapsulation:0,styles:r,data:{}});function m(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,12,"ion-row",[["class","estimate-row"]],null,null,null,i.vb,i.F)),t["\u0275did"](1,49152,null,0,s.IonRow,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](2,0,null,0,2,"ion-col",[["class","estimate-item"],["size","4"]],null,null,null,i.X,i.h)),t["\u0275did"](3,49152,null,0,s.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275ted"](4,0,[" "," "])),(l()(),t["\u0275eld"](5,0,null,0,7,"ion-col",[["class","estimate-item right"]],null,null,null,i.X,i.h)),t["\u0275did"](6,49152,null,0,s.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](7,0,null,0,1,"div",[["class","estimate-price"]],null,null,null,null,null)),(l()(),t["\u0275ted"](8,null,[" $"," "])),(l()(),t["\u0275eld"](9,0,null,0,1,"div",[["class","estimate-price"]],null,null,null,null,null)),(l()(),t["\u0275ted"](10,null,[" "," "])),(l()(),t["\u0275eld"](11,0,null,0,1,"div",[["class","estimate-price right"]],null,null,null,null,null)),(l()(),t["\u0275ted"](12,null,[" $"," "]))],(function(l,n){l(n,3,0,"4")}),(function(l,n){l(n,4,0,n.context.$implicit.item_name),l(n,8,0,n.context.$implicit.unit_cost),l(n,10,0,n.context.$implicit.quantity),l(n,12,0,n.context.$implicit.total_cost)}))}function p(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,131,"ion-content",[],null,null,null,i.Y,i.i)),t["\u0275did"](1,49152,null,0,s.IonContent,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](2,0,null,0,5,"div",[["class","estimates-empty-div"]],null,null,null,null,null)),(l()(),t["\u0275eld"](3,0,null,null,4,"ion-item",[["class","estimates"],["lines","none"]],null,null,null,i.mb,i.t)),t["\u0275did"](4,49152,null,0,s.IonItem,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{lines:[0,"lines"]},null),(l()(),t["\u0275eld"](5,0,null,0,1,"span",[["class","head-title"],["slot","start"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Invoice"])),(l()(),t["\u0275eld"](7,0,null,0,0,"span",[["class","custom-icon-dashboard-invoice-icons"],["slot","end"]],null,null,null,null,null)),(l()(),t["\u0275eld"](8,0,null,0,123,"div",[["class","estimates-content-div"]],null,null,null,null,null)),(l()(),t["\u0275eld"](9,0,null,null,122,"div",[["class","profile-list payslip"]],null,null,null,null,null)),(l()(),t["\u0275eld"](10,0,null,null,0,"img",[["class","status-logo"]],[[8,"src",4]],null,null,null,null)),(l()(),t["\u0275eld"](11,0,null,null,0,"img",[["class","paySlipLogo"],["src","./assets/imgs/Logo-new-blue.png"]],null,null,null,null,null)),(l()(),t["\u0275eld"](12,0,null,null,35,"ion-row",[],null,null,null,i.vb,i.F)),t["\u0275did"](13,49152,null,0,s.IonRow,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](14,0,null,0,16,"ion-col",[],null,null,null,i.X,i.h)),t["\u0275did"](15,49152,null,0,s.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](16,0,null,0,5,"div",[["class","invoice-details1"]],null,null,null,null,null)),(l()(),t["\u0275eld"](17,0,null,null,4,"h5",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Created Date "])),(l()(),t["\u0275eld"](19,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),t["\u0275ted"](20,null,["",""])),t["\u0275ppd"](21,2),(l()(),t["\u0275eld"](22,0,null,0,1,"h5",[["class","inv-company head-name"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Estimate To"])),(l()(),t["\u0275eld"](24,0,null,0,6,"div",[["class","inv-receiver"]],null,null,null,null,null)),(l()(),t["\u0275eld"](25,0,null,null,1,"h3",[["class","inv-receiver-address"]],null,null,null,null,null)),(l()(),t["\u0275ted"](26,null,["",",",""])),(l()(),t["\u0275eld"](27,0,null,null,1,"h3",[["class","inv-receiver-address"]],null,null,null,null,null)),(l()(),t["\u0275ted"](28,null,["",",",""])),(l()(),t["\u0275eld"](29,0,null,null,1,"h3",[["class","inv-receiver-address"]],null,null,null,null,null)),(l()(),t["\u0275ted"](30,null,["",""])),(l()(),t["\u0275eld"](31,0,null,0,16,"ion-col",[["class","inv-recieve"]],null,null,null,i.X,i.h)),t["\u0275did"](32,49152,null,0,s.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](33,0,null,0,5,"div",[["class","invoice-details"]],null,null,null,null,null)),(l()(),t["\u0275eld"](34,0,null,null,4,"h5",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Due Date "])),(l()(),t["\u0275eld"](36,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),t["\u0275ted"](37,null,["",""])),t["\u0275ppd"](38,2),(l()(),t["\u0275eld"](39,0,null,0,1,"h5",[["class","inv-company head-name"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Recieved From"])),(l()(),t["\u0275eld"](41,0,null,0,6,"div",[["class","inv-receiver"]],null,null,null,null,null)),(l()(),t["\u0275eld"](42,0,null,null,1,"h3",[["class","inv-receiver-address"]],null,null,null,null,null)),(l()(),t["\u0275ted"](43,null,["",",",""])),(l()(),t["\u0275eld"](44,0,null,null,1,"h3",[["class","inv-receiver-address"]],null,null,null,null,null)),(l()(),t["\u0275ted"](45,null,["",",",""])),(l()(),t["\u0275eld"](46,0,null,null,1,"h3",[["class","inv-receiver-address"]],null,null,null,null,null)),(l()(),t["\u0275ted"](47,null,["",""])),(l()(),t["\u0275eld"](48,0,null,null,19,"div",[["class","estimate-table"]],null,null,null,null,null)),(l()(),t["\u0275eld"](49,0,null,null,16,"ion-row",[["class","estimate-row"]],null,null,null,i.vb,i.F)),t["\u0275did"](50,49152,null,0,s.IonRow,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](51,0,null,0,3,"ion-col",[["class","estimate-item"],["size","4"]],null,null,null,i.X,i.h)),t["\u0275did"](52,49152,null,0,s.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275eld"](53,0,null,0,1,"strong",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Item"])),(l()(),t["\u0275eld"](55,0,null,0,10,"ion-col",[["class","estimate-item right"],["col",""]],null,null,null,i.X,i.h)),t["\u0275did"](56,49152,null,0,s.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](57,0,null,0,2,"div",[["class","estimate-price"]],null,null,null,null,null)),(l()(),t["\u0275eld"](58,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Price"])),(l()(),t["\u0275eld"](60,0,null,0,2,"div",[["class","estimate-price"]],null,null,null,null,null)),(l()(),t["\u0275eld"](61,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Qty"])),(l()(),t["\u0275eld"](63,0,null,0,2,"div",[["class","estimate-price right"]],null,null,null,null,null)),(l()(),t["\u0275eld"](64,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Total"])),(l()(),t["\u0275and"](16777216,null,null,1,null,m)),t["\u0275did"](67,278528,null,0,a.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),t["\u0275eld"](68,0,null,null,9,"ion-row",[["class","estimate-total-row"]],null,null,null,i.vb,i.F)),t["\u0275did"](69,49152,null,0,s.IonRow,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](70,0,null,0,1,"ion-col",[["class","estimate-item right"],["size","6.7"]],null,null,null,i.X,i.h)),t["\u0275did"](71,49152,null,0,s.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275eld"](72,0,null,0,5,"ion-col",[["class","estimate-item right sub-col"],["size","5.3"]],null,null,null,i.X,i.h)),t["\u0275did"](73,49152,null,0,s.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275eld"](74,0,null,0,1,"div",[["class","estimate-total"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,[" Sub Total "])),(l()(),t["\u0275eld"](76,0,null,0,1,"div",[["class","estimate-price right total"]],null,null,null,null,null)),(l()(),t["\u0275ted"](77,null,[" $"," "])),(l()(),t["\u0275eld"](78,0,null,null,9,"ion-row",[["class","estimate-total-row"]],null,null,null,i.vb,i.F)),t["\u0275did"](79,49152,null,0,s.IonRow,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](80,0,null,0,1,"ion-col",[["class","estimate-item right"],["size","6.7"]],null,null,null,i.X,i.h)),t["\u0275did"](81,49152,null,0,s.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275eld"](82,0,null,0,5,"ion-col",[["class","estimate-item right sub-col"],["size","5.3"]],null,null,null,i.X,i.h)),t["\u0275did"](83,49152,null,0,s.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275eld"](84,0,null,0,1,"div",[["class","estimate-total"]],null,null,null,null,null)),(l()(),t["\u0275ted"](85,null,[" Tax1: (",") "])),(l()(),t["\u0275eld"](86,0,null,0,1,"div",[["class","estimate-price right total"]],null,null,null,null,null)),(l()(),t["\u0275ted"](87,null,[" $"," "])),(l()(),t["\u0275eld"](88,0,null,null,9,"ion-row",[["class","estimate-total-row"]],null,null,null,i.vb,i.F)),t["\u0275did"](89,49152,null,0,s.IonRow,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](90,0,null,0,1,"ion-col",[["class","estimate-item right"],["size","6.7"]],null,null,null,i.X,i.h)),t["\u0275did"](91,49152,null,0,s.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275eld"](92,0,null,0,5,"ion-col",[["class","estimate-item right sub-col"],["size","5.3"]],null,null,null,i.X,i.h)),t["\u0275did"](93,49152,null,0,s.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275eld"](94,0,null,0,1,"div",[["class","estimate-total"]],null,null,null,null,null)),(l()(),t["\u0275ted"](95,null,[" Tax2: (",") "])),(l()(),t["\u0275eld"](96,0,null,0,1,"div",[["class","estimate-price right total"]],null,null,null,null,null)),(l()(),t["\u0275ted"](97,null,[" $"," "])),(l()(),t["\u0275eld"](98,0,null,null,9,"ion-row",[["class","estimate-total-row"]],null,null,null,i.vb,i.F)),t["\u0275did"](99,49152,null,0,s.IonRow,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](100,0,null,0,1,"ion-col",[["class","estimate-item right"],["size","6.7"]],null,null,null,i.X,i.h)),t["\u0275did"](101,49152,null,0,s.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275eld"](102,0,null,0,5,"ion-col",[["class","estimate-item right sub-col"],["size","5.3"]],null,null,null,i.X,i.h)),t["\u0275did"](103,49152,null,0,s.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275eld"](104,0,null,0,1,"div",[["class","estimate-total"]],null,null,null,null,null)),(l()(),t["\u0275ted"](105,null,[" Discount: (",") "])),(l()(),t["\u0275eld"](106,0,null,0,1,"div",[["class","estimate-price right total"]],null,null,null,null,null)),(l()(),t["\u0275ted"](107,null,[" $"," "])),(l()(),t["\u0275eld"](108,0,null,null,11,"ion-row",[["class","estimate-total-row"]],null,null,null,i.vb,i.F)),t["\u0275did"](109,49152,null,0,s.IonRow,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](110,0,null,0,1,"ion-col",[["class","estimate-item right"],["size","6.7"]],null,null,null,i.X,i.h)),t["\u0275did"](111,49152,null,0,s.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275eld"](112,0,null,0,7,"ion-col",[["class","estimate-item right sub-col"],["size","5.3"]],null,null,null,i.X,i.h)),t["\u0275did"](113,49152,null,0,s.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275eld"](114,0,null,0,2,"div",[["class","estimate-total"]],null,null,null,null,null)),(l()(),t["\u0275eld"](115,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["PaymentMade"])),(l()(),t["\u0275eld"](117,0,null,0,2,"div",[["class","estimate-price right total"]],null,null,null,null,null)),(l()(),t["\u0275eld"](118,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t["\u0275ted"](119,null,[" $"," "])),(l()(),t["\u0275eld"](120,0,null,null,11,"ion-row",[["class","estimate-total-row"]],null,null,null,i.vb,i.F)),t["\u0275did"](121,49152,null,0,s.IonRow,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](122,0,null,0,1,"ion-col",[["class","estimate-item right"],["size","6.7"]],null,null,null,i.X,i.h)),t["\u0275did"](123,49152,null,0,s.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275eld"](124,0,null,0,7,"ion-col",[["class","estimate-item right sub-col"],["size","5.3"]],null,null,null,i.X,i.h)),t["\u0275did"](125,49152,null,0,s.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275eld"](126,0,null,0,2,"div",[["class","estimate-total"]],null,null,null,null,null)),(l()(),t["\u0275eld"](127,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Due Amount"])),(l()(),t["\u0275eld"](129,0,null,0,2,"div",[["class","estimate-price right total"]],null,null,null,null,null)),(l()(),t["\u0275eld"](130,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t["\u0275ted"](131,null,[" $"," "]))],(function(l,n){var e=n.component;l(n,4,0,"none");l(n,52,0,"4"),l(n,67,0,e.invoice.items);l(n,71,0,"6.7");l(n,73,0,"5.3");l(n,81,0,"6.7");l(n,83,0,"5.3");l(n,91,0,"6.7");l(n,93,0,"5.3");l(n,101,0,"6.7");l(n,103,0,"5.3");l(n,111,0,"6.7");l(n,113,0,"5.3");l(n,123,0,"6.7");l(n,125,0,"5.3")}),(function(l,n){var e=n.component;l(n,10,0,t["\u0275inlineInterpolate"](1,"",e.currentStatusLogo,""));var u=t["\u0275unv"](n,20,0,l(n,21,0,t["\u0275nov"](n.parent,0),e.invoice.created_date,"d MMM y"));l(n,20,0,u),l(n,26,0,e.invoice.bill_to.company_address,e.invoice.bill_to.city),l(n,28,0,e.invoice.bill_to.state,e.invoice.bill_to.country),l(n,30,0,e.invoice.bill_to.zip_code);var o=t["\u0275unv"](n,37,0,l(n,38,0,t["\u0275nov"](n.parent,0),e.invoice.due_date,"d MMM y"));l(n,37,0,o),l(n,43,0,e.invoice.receive_from.company_address,e.invoice.receive_from.city),l(n,45,0,e.invoice.receive_from.state,e.invoice.receive_from.country),l(n,47,0,e.invoice.receive_from.zip_code),l(n,77,0,e.invoice.total_cost),l(n,85,0,e.invoice.tax1),l(n,87,0,e.tax1),l(n,95,0,e.invoice.tax2),l(n,97,0,e.tax2),l(n,105,0,e.invoice.discount),l(n,107,0,e.discount),l(n,119,0,e.invoice.payment_made),l(n,131,0,e.dueamnt)}))}function f(l){return t["\u0275vid"](0,[t["\u0275pid"](0,a.DatePipe,[t.LOCALE_ID]),(l()(),t["\u0275eld"](1,0,null,null,16,"ion-header",[],null,null,null,i.eb,i.o)),t["\u0275did"](2,49152,null,0,s.IonHeader,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](3,0,null,0,14,"ion-toolbar",[["class","blues-nav"]],null,null,null,i.Fb,i.P)),t["\u0275did"](4,49152,null,0,s.IonToolbar,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](5,0,null,0,12,"ion-row",[],null,null,null,i.vb,i.F)),t["\u0275did"](6,49152,null,0,s.IonRow,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](7,0,null,0,4,"ion-col",[["class","nav-back"],["size","2"]],null,null,null,i.X,i.h)),t["\u0275did"](8,49152,null,0,s.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275eld"](9,0,null,0,2,"span",[["class","custom-icon-back-arrow-icon"]],null,[[null,"click"]],(function(l,n,e){var t=!0,u=l.component;"click"===n&&(t=!1!==u.referenceService.popBack()&&t);return t}),null,null)),(l()(),t["\u0275eld"](10,0,null,null,0,"span",[["class","path1"]],null,null,null,null,null)),(l()(),t["\u0275eld"](11,0,null,null,0,"span",[["class","path2"]],null,null,null,null,null)),(l()(),t["\u0275eld"](12,0,null,0,5,"ion-col",[["class","nav-content"],["size","10"]],null,null,null,i.X,i.h)),t["\u0275did"](13,49152,null,0,s.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275eld"](14,0,null,0,3,"ion-title",[],null,null,null,i.Db,i.N)),t["\u0275did"](15,49152,null,0,s.IonTitle,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](16,0,null,0,1,"span",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Invoices"])),(l()(),t["\u0275and"](16777216,null,null,1,null,p)),t["\u0275did"](19,16384,null,0,a.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(l,n){var e=n.component;l(n,8,0,"2");l(n,13,0,"10"),l(n,19,0,e.invoice)}),null)}var h=t["\u0275ccf"]("app-view-invoice",d,(function(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-view-invoice",[],null,null,null,f,g)),t["\u0275did"](1,114688,null,0,d,[c.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),v=e("gIcY"),C=e("ZYCi"),R=function(){};e.d(n,"ViewInvoicePageModuleNgFactory",(function(){return _}));var _=t["\u0275cmf"](u,[],(function(l){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,h]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,a.NgLocalization,a.NgLocaleLocalization,[t.LOCALE_ID,[2,a["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,v["\u0275angular_packages_forms_forms_o"],v["\u0275angular_packages_forms_forms_o"],[]),t["\u0275mpd"](4608,s.AngularDelegate,s.AngularDelegate,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,s.ModalController,s.ModalController,[s.AngularDelegate,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,s.PopoverController,s.PopoverController,[s.AngularDelegate,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](1073742336,a.CommonModule,a.CommonModule,[]),t["\u0275mpd"](1073742336,v["\u0275angular_packages_forms_forms_d"],v["\u0275angular_packages_forms_forms_d"],[]),t["\u0275mpd"](1073742336,v.FormsModule,v.FormsModule,[]),t["\u0275mpd"](1073742336,s.IonicModule,s.IonicModule,[]),t["\u0275mpd"](1073742336,C.o,C.o,[[2,C.t],[2,C.m]]),t["\u0275mpd"](1073742336,R,R,[]),t["\u0275mpd"](1073742336,u,u,[]),t["\u0275mpd"](1024,C.k,(function(){return[[{path:"",component:d}]]}),[])])}))}}]);