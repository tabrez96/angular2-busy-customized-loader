/**
 * @file Component: Busy
 * @author yumao<yuzhang.lille@gmail.com>
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var promise_tracker_service_1 = require("./promise-tracker.service");
var inactiveStyle = core_1.style({
    opacity: 0,
    transform: 'translateY(-40px)'
});
var timing = '.3s ease';
;
var BusyComponent = (function () {
    function BusyComponent(compiler, tracker) {
        this.compiler = compiler;
        this.tracker = tracker;
        this.template = "";
        this.context = {
            message: null
        };
    }
    BusyComponent.prototype.isActive = function () {
        return this.tracker.isActive();
    };
    BusyComponent.prototype.ngOnInit = function () {
        this.addComponent(this.template);
    };
    BusyComponent.prototype.addComponent = function (template) {
        var TemplateComponent = (function () {
            function TemplateComponent() {
            }
            return TemplateComponent;
        }());
        TemplateComponent = __decorate([
            core_1.Component({ template: template })
        ], TemplateComponent);
        var TemplateModule = (function () {
            function TemplateModule() {
            }
            return TemplateModule;
        }());
        TemplateModule = __decorate([
            core_1.NgModule({ declarations: [TemplateComponent] })
        ], TemplateModule);
        var mod = this.compiler.compileModuleAndAllComponentsSync(TemplateModule);
        var factory = mod.componentFactories.find(function (comp) {
            return comp.componentType === TemplateComponent;
        });
        if (factory) {
            var component = this.templateContainer.createComponent(factory);
        }
    };
    return BusyComponent;
}());
__decorate([
    core_1.ViewChild('templateContainer', { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef)
], BusyComponent.prototype, "templateContainer", void 0);
BusyComponent = __decorate([
    core_1.Component({
        selector: 'ng-busy',
        template: "\n        <div [class]=\"wrapperClass\" *ngIf=\"isActive()\" @flyInOut>\n            <div #templateContainer></div>\n        </div>\n    ",
        animations: [
            core_1.trigger('flyInOut', [
                core_1.transition('void => *', [
                    inactiveStyle,
                    core_1.animate(timing)
                ]),
                core_1.transition('* => void', [
                    core_1.animate(timing, inactiveStyle)
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [core_1.Compiler, promise_tracker_service_1.PromiseTrackerService])
], BusyComponent);
exports.BusyComponent = BusyComponent;
//# sourceMappingURL=busy.component.js.map