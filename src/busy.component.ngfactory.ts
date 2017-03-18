/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './busy.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@angular/core/src/linker/compiler';
import * as import9 from './promise-tracker.service';
import * as import10 from '@angular/core/src/animation/animation_transition';
import * as import11 from '@angular/core/src/animation/animation_sequence_player';
import * as import12 from '@angular/core/src/animation/animation_styles';
import * as import13 from '@angular/core/src/animation/animation_style_util';
import * as import14 from '@angular/core/src/animation/animation_keyframe';
import * as import15 from '@angular/core/src/animation/animation_player';
import * as import16 from '@angular/core/src/linker/view_container';
import * as import17 from '@angular/core/src/change_detection/change_detection_util';
import * as import18 from '@angular/core/src/linker/query_list';
import * as import19 from '../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import20 from '@angular/core/src/linker/template_ref';
import * as import21 from '@angular/common/src/directives/ng_if';
export class Wrapper_BusyComponent {
  /*private*/ _eventHandler:Function;
  context:import0.BusyComponent;
  /*private*/ _changed:boolean;
  constructor(p0:any,p1:any) {
    this._changed = false;
    this.context = new import0.BusyComponent(p0,p1);
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
    return changed;
  }
  checkHost(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import1.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_BusyComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_BusyComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.BusyComponent>;
  _BusyComponent_0_3:Wrapper_BusyComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_BusyComponent_Host0,renderType_BusyComponent_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'ng-busy',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_BusyComponent0(this.viewUtils,this,0,this._el_0);
    this._BusyComponent_0_3 = new Wrapper_BusyComponent(this.injectorGet(import8.Compiler,this.parentIndex),this.injectorGet(import9.PromiseTrackerService,this.parentIndex));
    this.compView_0.create(this._BusyComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._BusyComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.BusyComponent) && (0 === requestNodeIndex))) { return this._BusyComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._BusyComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const BusyComponentNgFactory:import7.ComponentFactory<import0.BusyComponent> = new import7.ComponentFactory<import0.BusyComponent>('ng-busy',View_BusyComponent_Host0,import0.BusyComponent);
const styles_BusyComponent:any[] = ([] as any[]);
var BusyComponent_flyInOut_states:any = {
  '*': {},
  'void': {}
}
;
function BusyComponent_flyInOut_factory(view:import1.AppView<any>,element:any,currentState:any,nextState:any):import10.AnimationTransition {
  var previousPlayers:any = view.animationContext.getAnimationPlayers(element,((nextState == 'void')? (null as any): 'flyInOut'));
  var collectedStyles:any = {};
  var player:any = (null as any);
  var totalTime:any = 0;
  var defaultStateStyles:any = BusyComponent_flyInOut_states['*'];
  var startStateStyles:any = BusyComponent_flyInOut_states[currentState];
  if ((startStateStyles == (null as any))) { (startStateStyles = defaultStateStyles); }
  var endStateStyles:any = BusyComponent_flyInOut_states[nextState];
  if ((endStateStyles == (null as any))) { (endStateStyles = defaultStateStyles); }
  if (((player == (null as any)) && ((currentState == 'void') && true))) {
      player = new import11.AnimationSequencePlayer([view.renderer.animate(element,new import12.AnimationStyles(import13.collectAndResolveStyles(collectedStyles,[
        startStateStyles,
        {
          'opacity': '0',
          'transform': 'translateY(-40px)'
        }

      ]
      )),import13.balanceAnimationKeyframes(collectedStyles,endStateStyles,[
        new import14.AnimationKeyframe(0,new import12.AnimationStyles(import13.collectAndResolveStyles(collectedStyles,[{}]))),
        new import14.AnimationKeyframe(1,new import12.AnimationStyles(import13.collectAndResolveStyles(collectedStyles,[{}])))
      ]
    ),300,0,'ease',previousPlayers)]);
    totalTime = 300;
  }
  if (((player == (null as any)) && (true && (nextState == 'void')))) {
      player = new import11.AnimationSequencePlayer([view.renderer.animate(element,new import12.AnimationStyles(import13.collectAndResolveStyles(collectedStyles,[startStateStyles])),[
          new import14.AnimationKeyframe(0,new import12.AnimationStyles(import13.collectAndResolveStyles(collectedStyles,[{
            'opacity': 'true',
            'transform': 'true'
          }
        ]))),
          new import14.AnimationKeyframe(1,new import12.AnimationStyles(import13.collectAndResolveStyles(collectedStyles,[{
            'opacity': '0',
            'transform': 'translateY(-40px)'
          }
        ])))
      ]
    ,300,0,'ease',previousPlayers)]);
    totalTime = 300;
  }
  if ((player == (null as any))) { (player = new import15.NoOpAnimationPlayer()); }
  player.onDone(():void => {
    player.destroy();
    import13.renderStyles(element,view.renderer,import13.prepareFinalAnimationStyles(startStateStyles,endStateStyles));
  });
  new import11.AnimationSequencePlayer(previousPlayers).destroy();
  import13.renderStyles(element,view.renderer,import13.clearStyles(startStateStyles));
  view.animationContext.queueAnimation(element,'flyInOut',player);
  return new import10.AnimationTransition(player,currentState,nextState,totalTime);
}
class View_BusyComponent1 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  /*private*/ _vc_2:import16.ViewContainer;
  _text_3:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import16.ViewContainer) {
    super(View_BusyComponent1,renderType_BusyComponent,import5.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_5 = import17.UNINITIALIZED;
    this._expr_6 = import17.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._vc_2 = new import16.ViewContainer(2,0,this,this._el_2);
    this._text_3 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3
    ]
    ),(null as any));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_6:any = (null as any);
    if (import3.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      var animationTransition_flyInOut:any = this.componentType.animations['flyInOut'](this,this._el_0,((this._expr_6 == import17.UNINITIALIZED)? 'void': this._expr_6),((currVal_6 == import17.UNINITIALIZED)? 'void': currVal_6));
      this._expr_6 = currVal_6;
    }
    this._vc_2.detectChangesInNestedViews(throwOnChange);
    const currVal_5:any = this.parentView.context.wrapperClass;
    if (import3.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setElementProperty(this._el_0,'className',currVal_5);
      this._expr_5 = currVal_5;
    }
  }
  dirtyParentQueriesInternal():void {
    (<View_BusyComponent0>this.parentView)._viewQuery_templateContainer_0.setDirty();
  }
  destroyInternal():void {
    this._vc_2.destroyNestedViews();
  }
  detachInternal():void {
    var animationTransition_flyInOut:any = this.componentType.animations['flyInOut'](this,this._el_0,this._expr_6,'void');
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
var renderType_BusyComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,styles_BusyComponent,{'flyInOut': BusyComponent_flyInOut_factory});
export class View_BusyComponent0 extends import1.AppView<import0.BusyComponent> {
  _viewQuery_templateContainer_0:import18.QueryList<any>;
  _text_0:any;
  _anchor_1:any;
  /*private*/ _vc_1:import16.ViewContainer;
  _TemplateRef_1_5:any;
  _NgIf_1_6:import19.Wrapper_NgIf;
  _text_2:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_BusyComponent0,renderType_BusyComponent,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._viewQuery_templateContainer_0 = new import18.QueryList<any>();
    this._text_0 = this.renderer.createText(parentRenderNode,'\n        ',(null as any));
    this._anchor_1 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._vc_1 = new import16.ViewContainer(1,(null as any),this,this._anchor_1);
    this._TemplateRef_1_5 = new import20.TemplateRef_(this,1,this._anchor_1);
    this._NgIf_1_6 = new import19.Wrapper_NgIf(this._vc_1.vcRef,this._TemplateRef_1_5);
    this._text_2 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._anchor_1,
      this._text_2
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import20.TemplateRef) && (1 === requestNodeIndex))) { return this._TemplateRef_1_5; }
    if (((token === import21.NgIf) && (1 === requestNodeIndex))) { return this._NgIf_1_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_1_0_0:any = this.context.isActive();
    this._NgIf_1_6.check_ngIf(currVal_1_0_0,throwOnChange,false);
    this._NgIf_1_6.ngDoCheck(this,this._anchor_1,throwOnChange);
    this._vc_1.detectChangesInNestedViews(throwOnChange);
    if (!throwOnChange) { if (this._viewQuery_templateContainer_0.dirty) {
        this._viewQuery_templateContainer_0.reset([this._vc_1.mapNestedViews(View_BusyComponent1,(nestedView:View_BusyComponent1):any => {
          return [nestedView._vc_2.vcRef];
      })]);
      this.context.templateContainer = this._viewQuery_templateContainer_0.first;
    } }
  }
  destroyInternal():void {
    this._vc_1.destroyNestedViews();
  }
  createEmbeddedViewInternal(nodeIndex:number):import1.AppView<any> {
    if ((nodeIndex == 1)) { return new View_BusyComponent1(this.viewUtils,this,1,this._anchor_1,this._vc_1); }
    return (null as any);
  }
}