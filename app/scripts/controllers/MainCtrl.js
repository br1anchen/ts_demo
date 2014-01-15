/**
* Created by brian on 14.01.14.
*/
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Application;
(function (Application) {
    /// <reference path="../_refs.ts" />
    (function (controllers) {
        var MainCtrl = (function (_super) {
            __extends(MainCtrl, _super);
            function MainCtrl($scope, $rootScope, $state, $location, $filter, $window, callLogService) {
                _super.call(this, $scope, $rootScope, $state, $location, $filter, $window);

                this._result = callLogService;
            }
            return MainCtrl;
        })(Application.controllers.BaseCtrl);
        controllers.MainCtrl = MainCtrl;
    })(Application.controllers || (Application.controllers = {}));
    var controllers = Application.controllers;
})(Application || (Application = {}));
//# sourceMappingURL=MainCtrl.js.map
