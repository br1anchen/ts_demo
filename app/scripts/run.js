/**
* Created by brian on 14.01.14.
*/
/// <reference path='_refs.ts' />
var Application;
(function (Application) {
    var Run = (function () {
        function Run() {
        }
        Run.go = function (module) {
            //console.log('Run configuration  block  started');
            module.run([
                '$rootScope',
                '$state',
                function ($rootScope, $state) {
                    $rootScope.$state = $state;
                    $rootScope.APP_BASE_URL = Application.config.App_Constants.APP_BASE_URL;
                    $rootScope.APP_NAME = Application.config.App_Constants.APP_NAME;
                }]); //run
        };
        return Run;
    })();
    Application.Run = Run;
})(Application || (Application = {}));
//# sourceMappingURL=run.js.map
