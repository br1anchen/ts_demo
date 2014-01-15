/**
* Created by brian on 14.01.14.
*/
var Application;
(function (Application) {
    /// <reference path="../_refs.ts" />
    (function (controllers) {
        var BaseCtrl = (function () {
            function BaseCtrl($scope, $rootScope, $state, $location, $filter, $window) {
                this.$scope = $scope;
                this.$rootScope = $rootScope;
                this.$state = $state;
                this.$location = $location;
                this.$filter = $filter;
                this.$window = $window;

                this.ctrl = this;
            }
            BaseCtrl.$inject = [
                '$scope',
                '$rootScope',
                '$state',
                '$location',
                '$filter',
                '$window'
            ];
            return BaseCtrl;
        })();
        controllers.BaseCtrl = BaseCtrl;
    })(Application.controllers || (Application.controllers = {}));
    var controllers = Application.controllers;
})(Application || (Application = {}));
//# sourceMappingURL=BaseCtrl.js.map
