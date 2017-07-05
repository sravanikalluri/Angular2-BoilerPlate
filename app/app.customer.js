System.register(['angular2/core', './app.customerlist.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, app_customerlist_service_1;
    var customer;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_customerlist_service_1_1) {
                app_customerlist_service_1 = app_customerlist_service_1_1;
            }],
        execute: function() {
            customer = (function () {
                function customer(customerlist) {
                    this.customername = "list of customers";
                    this.customer = customerlist.getcustomer();
                }
                customer = __decorate([
                    core_1.Component({
                        selector: "customer",
                        template: "<div>\n                <div>\n                     <p>{{customername}}</p>\n                </div>\n                <div>\n                    <ul >\n                        <li *ngFor=\"#customer of customer\" >\n                            {{customer}}\n                        </li>\n                    </ul>\n                </div>\n            </div>",
                        providers: [app_customerlist_service_1.customerlist]
                    }), 
                    __metadata('design:paramtypes', [app_customerlist_service_1.customerlist])
                ], customer);
                return customer;
            }());
            exports_1("customer", customer);
        }
    }
});
//# sourceMappingURL=app.customer.js.map