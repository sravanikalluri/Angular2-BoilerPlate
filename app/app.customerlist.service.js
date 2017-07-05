System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var customerlist;
    return {
        setters:[],
        execute: function() {
            customerlist = (function () {
                function customerlist() {
                }
                customerlist.prototype.getcustomer = function () {
                    return ["Hannah", "Kevin", "Justin"];
                };
                return customerlist;
            }());
            exports_1("customerlist", customerlist);
        }
    }
});
//# sourceMappingURL=app.customerlist.service.js.map