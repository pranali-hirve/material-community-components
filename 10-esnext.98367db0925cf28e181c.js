(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{UTEa:function(e,t,i){"use strict";i.r(t),i.d(t,"TimerPickerModule",(function(){return O}));var c=i("ofXK"),r=i("3Pt+"),n=i("Wp6s"),b=i("kmnG"),o=i("zkoq"),m=i("NFeN"),a=i("qFsG"),s=i("wZkO"),u=i("tyNb"),d=i("psLn"),p=i("fXoL");let h=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p.Hb({type:e,selectors:[["app-timer-picker-api"]],decls:101,vars:0,consts:[[1,"table-api-documentation"],[1,"api-description"]],template:function(e,t){1&e&&(p.Sb(0,"h2"),p.yc(1,"Components"),p.Rb(),p.Sb(2,"h3"),p.yc(3,"MccTimerPicker"),p.Rb(),p.Sb(4,"p"),p.yc(5,"This is the main class of the component."),p.Rb(),p.Sb(6,"h4"),p.yc(7,"Inputs"),p.Rb(),p.Sb(8,"table",0),p.Sb(9,"thead"),p.Sb(10,"tr"),p.Sb(11,"th"),p.yc(12,"Name"),p.Rb(),p.Sb(13,"th"),p.yc(14,"Description"),p.Rb(),p.Rb(),p.Rb(),p.Sb(15,"tbody"),p.Sb(16,"tr"),p.Sb(17,"td"),p.Sb(18,"code"),p.yc(19,"hideButtons: boolean"),p.Rb(),p.Rb(),p.Sb(20,"td",1),p.yc(21,"Hide the buttons (confirm/cancel)"),p.Rb(),p.Rb(),p.Sb(22,"tr"),p.Sb(23,"td"),p.Sb(24,"code"),p.yc(25,"mccTimerPickerFormat: MccTimerPickerFormat"),p.Rb(),p.Rb(),p.Sb(26,"td",1),p.yc(27,"Define the format that timer-picker will output the selected time (default: 12)"),p.Rb(),p.Rb(),p.Sb(28,"tr"),p.Sb(29,"td"),p.Sb(30,"code"),p.yc(31,"mccTimerPickerMin: string"),p.Rb(),p.Rb(),p.Sb(32,"td",1),p.yc(33,"Define the minimum allowed time (default: 00:00 am, accepts both formats)"),p.Rb(),p.Rb(),p.Sb(34,"tr"),p.Sb(35,"td"),p.Sb(36,"code"),p.yc(37,"mccTimerPickerMax: string"),p.Rb(),p.Rb(),p.Sb(38,"td",1),p.yc(39,"Define the maximum allowed time (default: 12:00 pm, accepts both formats)"),p.Rb(),p.Rb(),p.Sb(40,"tr"),p.Sb(41,"td"),p.Sb(42,"code"),p.yc(43,"btnCancel: string"),p.Rb(),p.Rb(),p.Sb(44,"td",1),p.yc(45,"Cancel button text (default: Cancel)"),p.Rb(),p.Rb(),p.Sb(46,"tr"),p.Sb(47,"td"),p.Sb(48,"code"),p.yc(49,"btnConfirm: string"),p.Rb(),p.Rb(),p.Sb(50,"td",1),p.yc(51,"Confirm button text (default: Confirm)"),p.Rb(),p.Rb(),p.Rb(),p.Rb(),p.Sb(52,"h4"),p.yc(53,"Outputs"),p.Rb(),p.Sb(54,"table",0),p.Sb(55,"thead"),p.Sb(56,"tr"),p.Sb(57,"th"),p.yc(58,"Name"),p.Rb(),p.Sb(59,"th"),p.yc(60,"Description"),p.Rb(),p.Rb(),p.Rb(),p.Sb(61,"tbody"),p.Sb(62,"tr"),p.Sb(63,"td"),p.Sb(64,"code"),p.yc(65,"selected: string"),p.Rb(),p.Rb(),p.Sb(66,"td",1),p.yc(67,"Output the selected timer"),p.Rb(),p.Rb(),p.Rb(),p.Rb(),p.Ob(68,"hr"),p.Sb(69,"h2"),p.yc(70,"Directives"),p.Rb(),p.Sb(71,"h3"),p.yc(72,"MccTimerPickerOriginDirective"),p.Rb(),p.Sb(73,"p"),p.yc(74,"This directive is used on the trigger component. If we associate the directive an input text, when the input is focused the timer picker will open on the screen"),p.Rb(),p.Sb(75,"h3"),p.yc(76,"MccConnectedTimerPickerDirective"),p.Rb(),p.Sb(77,"p"),p.yc(78,"Directive used on the "),p.Sb(79,"code"),p.yc(80,"MccTimerPickerComponent"),p.Rb(),p.yc(81," to connect to an element ( "),p.Sb(82,"code"),p.yc(83,"MccTimerPickerOriginDirective"),p.Rb(),p.yc(84,")"),p.Rb(),p.Sb(85,"h4"),p.yc(86,"Inputs"),p.Rb(),p.Sb(87,"table",0),p.Sb(88,"thead"),p.Sb(89,"tr"),p.Sb(90,"th"),p.yc(91,"Name"),p.Rb(),p.Sb(92,"th"),p.yc(93,"Description"),p.Rb(),p.Rb(),p.Rb(),p.Sb(94,"tbody"),p.Sb(95,"tr"),p.Sb(96,"td"),p.Sb(97,"code"),p.yc(98,"mccConnectedTimerPickerOrigin: MccTimerPickerOriginDirective"),p.Rb(),p.Rb(),p.Sb(99,"td",1),p.yc(100,"Element that timer picker has to connect"),p.Rb(),p.Rb(),p.Rb(),p.Rb())},encapsulation:2,changeDetection:0}),e})();var l=i("3dsp"),S=i("2Vo4");let R=(()=>{class e{constructor(e,t){this.elementRef=e,this.renderer=t,this.change=new S.a(""),this.hasFocus=new S.a(!1),t.listen(e.nativeElement,"focus",()=>this.hasFocus.next(!0))}writeValue(e){this.renderer.setProperty(this.elementRef.nativeElement,"value",e),this.change.next(e),this.propagateChanges&&this.propagateChanges(e)}writeValueFromTimerPicker(e){this.renderer.setProperty(this.elementRef.nativeElement,"value",e),this.propagateChanges(e)}writeValueFromKeyup(e){this.change.next(e),this.propagateChanges(e)}registerOnChange(e){this.propagateChanges=e}registerOnTouched(e){}setDisabledState(e){this.renderer.setProperty(this.elementRef.nativeElement,"disabled",e)}}return e.\u0275fac=function(t){return new(t||e)(p.Nb(p.l),p.Nb(p.E))},e.\u0275dir=p.Ib({type:e,selectors:[["","mccTimerPickerOrigin",""],["","mcc-timer-picker-origin",""]],outputs:{change:"change",hasFocus:"hasFocus"},exportAs:["mccTimerPickerOrigin"],features:[p.Ab([{provide:r.o,useExisting:Object(p.T)(()=>e),multi:!0}])]}),e})(),g=(()=>{class e{constructor(e,t){this.timerPicker=e,this.changeDetectorRef=t,this.timerPicker.connected=!0}ngAfterViewInit(){this._timerPickerSub||(this.timerPicker.trigger=this.origin,this._attachTimerPicker())}ngOnDestroy(){this._originFocus&&!this._originFocus.closed&&this._originFocus.unsubscribe(),this._timerPickerSub&&!this._timerPickerSub.closed&&this._timerPickerSub.unsubscribe()}_attachTimerPicker(){this._originFocus=this.origin.hasFocus.subscribe(e=>{this.timerPicker.focus="hour",this.timerPicker.isOpen=e,this.changeDetectorRef.detectChanges()}),this._timerPickerSub=this.timerPicker.selected.subscribe(e=>this.origin.writeValueFromTimerPicker(e))}}return e.\u0275fac=function(t){return new(t||e)(p.Nb(l.a),p.Nb(p.h))},e.\u0275dir=p.Ib({type:e,selectors:[["","mccConnectedTimerPicker",""],["","mcc-connected-timer-picker",""]],inputs:{origin:["mccConnectedTimerPickerOrigin","origin"]},exportAs:["mccConnectedTimerPicker"]}),e})(),f=(()=>{class e{constructor(e){this.formBuilder=e}ngOnInit(){this.form=this.formBuilder.group({timer:[""]})}onSubmit({value:e,valid:t}){console.log(t,e)}}return e.\u0275fac=function(t){return new(t||e)(p.Nb(r.f))},e.\u0275cmp=p.Hb({type:e,selectors:[["app-timer-picker-examples"]],decls:46,vars:10,consts:[["novalidate","",3,"formGroup","ngSubmit"],["mccConnectedTimerPicker","",3,"mccConnectedTimerPickerOrigin"],["matInput","","mccTimerPickerOrigin","","placeholder","Timer","formControlName","timer"],["inputTrigger","mccTimerPickerOrigin"],["mccConnectedTimerPicker","","mccTimerPickerMin","09:45","mccTimerPickerMax","20:30",3,"mccConnectedTimerPickerOrigin"],["minMaxInputTrigger","mccTimerPickerOrigin"],["mccConnectedTimerPicker","",3,"mccConnectedTimerPickerOrigin","mccTimerPickerFormat"],["formatTrigger","mccTimerPickerOrigin"],["mccConnectedTimerPicker","",3,"mccConnectedTimerPickerOrigin","hideButtons"],["buttonTrigger","mccTimerPickerOrigin"]],template:function(e,t){if(1&e&&(p.Sb(0,"mat-card"),p.Sb(1,"mat-card-header"),p.Sb(2,"mat-card-title"),p.yc(3," Connect with an input "),p.Rb(),p.Rb(),p.Sb(4,"mat-card-content"),p.Sb(5,"form",0),p.ac("ngSubmit",(function(){return t.onSubmit(t.form)})),p.Sb(6,"mat-form-field"),p.Ob(7,"mcc-timer-picker",1),p.Ob(8,"input",2,3),p.Rb(),p.Rb(),p.Rb(),p.Rb(),p.Sb(10,"mat-card"),p.Sb(11,"mat-card-header"),p.Sb(12,"mat-card-title"),p.yc(13," Use custom range "),p.Rb(),p.Rb(),p.Sb(14,"mat-card-content"),p.Sb(15,"form",0),p.ac("ngSubmit",(function(){return t.onSubmit(t.form)})),p.Sb(16,"mat-form-field"),p.Ob(17,"mcc-timer-picker",4),p.Ob(18,"input",2,5),p.Rb(),p.Rb(),p.Rb(),p.Rb(),p.Sb(20,"mat-card"),p.Sb(21,"mat-card-header"),p.Sb(22,"mat-card-title"),p.yc(23," Convert value to 24h "),p.Rb(),p.Rb(),p.Sb(24,"mat-card-content"),p.Sb(25,"form",0),p.ac("ngSubmit",(function(){return t.onSubmit(t.form)})),p.Sb(26,"mat-form-field"),p.Ob(27,"mcc-timer-picker",6),p.Ob(28,"input",2,7),p.Rb(),p.Rb(),p.Rb(),p.Rb(),p.Sb(30,"mat-card"),p.Sb(31,"mat-card-header"),p.Sb(32,"mat-card-title"),p.yc(33," Hide buttons "),p.Rb(),p.Rb(),p.Sb(34,"mat-card-content"),p.Sb(35,"form",0),p.ac("ngSubmit",(function(){return t.onSubmit(t.form)})),p.Sb(36,"mat-form-field"),p.Ob(37,"mcc-timer-picker",8),p.Ob(38,"input",2,9),p.Rb(),p.Rb(),p.Rb(),p.Rb(),p.Sb(40,"mat-card"),p.Sb(41,"mat-card-header"),p.Sb(42,"mat-card-title"),p.yc(43," Opened component "),p.Rb(),p.Rb(),p.Sb(44,"mat-card-content"),p.Ob(45,"mcc-timer-picker"),p.Rb(),p.Rb()),2&e){const e=p.oc(9),i=p.oc(19),c=p.oc(29),r=p.oc(39);p.Bb(5),p.jc("formGroup",t.form),p.Bb(2),p.jc("mccConnectedTimerPickerOrigin",e),p.Bb(8),p.jc("formGroup",t.form),p.Bb(2),p.jc("mccConnectedTimerPickerOrigin",i),p.Bb(8),p.jc("formGroup",t.form),p.Bb(2),p.jc("mccConnectedTimerPickerOrigin",c)("mccTimerPickerFormat","24"),p.Bb(8),p.jc("formGroup",t.form),p.Bb(2),p.jc("mccConnectedTimerPickerOrigin",r)("hideButtons",!0)}},directives:[n.a,n.c,n.e,n.b,r.E,r.r,r.j,b.b,l.a,g,a.a,r.c,R,r.q,r.i],encapsulation:2,changeDetection:0}),e})();function y(e,t){1&e&&p.yc(0," Overview ")}function k(e,t){1&e&&p.yc(0," API ")}function P(e,t){1&e&&p.yc(0," Examples ")}const T=[{path:"",component:(()=>{class e{constructor(e){this.formBuilder=e}ngOnInit(){this.form=this.formBuilder.group({timer:[""]})}onSubmit({value:e,valid:t}){console.log(t,e)}}return e.\u0275fac=function(t){return new(t||e)(p.Nb(r.f))},e.\u0275cmp=p.Hb({type:e,selectors:[["app-timer-picker"]],decls:42,vars:4,consts:[[1,"page-title"],[1,"page-subtitle"],["mat-tab-label",""],["cols","4","rowHeight","70px"],["colspan","3"],["href","https://github.com/tiaguinho/material-community-components/tree/master/src/lib/timer-picker","target","_blank"],["src","https://tiaguinho.github.io/material-community-components/demo-app/assets/img/source-code.png","alt","Source Code",1,"source-code"],[1,"code-snippet"],[1,"lang-typescript"],[1,"hljs-variable"],[1,"hljs-attribute"],["label","Examples"]],template:function(e,t){1&e&&(p.Sb(0,"h1",0),p.Sb(1,"mat-icon"),p.yc(2,"timer"),p.Rb(),p.yc(3," Timer Picker\n"),p.Rb(),p.Sb(4,"p",1),p.yc(5,"Some examples of how to use the "),p.Sb(6,"span"),p.yc(7,"mcc-timer-picker"),p.Rb(),p.yc(8," component"),p.Rb(),p.Sb(9,"mat-tab-group"),p.Sb(10,"mat-tab"),p.wc(11,y,1,0,"ng-template",2),p.Sb(12,"mat-grid-list",3),p.Sb(13,"mat-grid-tile",4),p.Sb(14,"h2"),p.yc(15,"MccTimerPicker"),p.Rb(),p.Rb(),p.Sb(16,"mat-grid-tile"),p.Sb(17,"a",5),p.Ob(18,"img",6),p.Rb(),p.Rb(),p.Rb(),p.Sb(19,"p"),p.yc(20,"This is a implementation of timer picker for material design."),p.Rb(),p.Sb(21,"p"),p.yc(22,"To use this component, just import the module from "),p.Sb(23,"code"),p.yc(24,"material-community-component"),p.Rb(),p.yc(25," package."),p.Rb(),p.Sb(26,"pre",7),p.Sb(27,"code",8),p.yc(28),p.Sb(29,"span",9),p.yc(30,"@NgModule"),p.Rb(),p.yc(31),p.Sb(32,"span",10),p.yc(33,"imports"),p.Rb(),p.yc(34),p.Rb(),p.yc(35,"\n"),p.Rb(),p.Rb(),p.Sb(36,"mat-tab"),p.wc(37,k,1,0,"ng-template",2),p.Ob(38,"app-timer-picker-api"),p.Rb(),p.Sb(39,"mat-tab",11),p.wc(40,P,1,0,"ng-template",2),p.Ob(41,"app-timer-picker-examples"),p.Rb(),p.Rb()),2&e&&(p.Bb(28),p.Bc("  import ","{"," MccTimerPickerModule ","}"," from 'material-community-components';\n\n  "),p.Bb(3),p.Ac("(","{","\n    ...\n    "),p.Bb(3),p.Ac(": [\n      MccTimerPickerModule\n    ]\n    ...\n  ","}",")\n  "))},directives:[m.a,s.b,s.a,s.c,o.a,o.c,h,f],styles:[".mat-grid-list{border-bottom:1px solid #dadada}  .mat-grid-tile:first-child .mat-figure{justify-content:flex-start;align-items:flex-start}  .mat-grid-tile:first-child .mat-figure h2{border:0}.source-code[_ngcontent-%COMP%]{height:35px}"],changeDetection:0}),e})()}];let O=(()=>{class e{}return e.\u0275mod=p.Lb({type:e}),e.\u0275inj=p.Kb({factory:function(t){return new(t||e)},imports:[[c.c,u.c.forChild(T),r.y,n.d,a.b,b.d,m.b,o.b,s.d,d.e]]}),e})()}}]);