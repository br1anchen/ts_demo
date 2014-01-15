/**
* Created by brian on 14.01.14.
*/
/// <reference path='_refs.ts' />
var Application;
(function (Application) {
    var App_Constants = Application.config.App_Constants;
    var App_Router = Application.config.App_Router;

    var App = (function () {
        function App() {
        }
        App.defineModules = function () {
            //register controllers
            this.Controllers.controller('baseCtrl', Application.controllers.BaseCtrl);
            this.Controllers.controller('mainCtrl', Application.controllers.MainCtrl);

            //register services
            this.Services.service('callLogService', Application.services.CallLogService);

            //register directives
            //define main application module
            this.Module = angular.module(App_Constants.APP_MODULE, [
                App_Constants.APP_FILTERS_MODULES,
                App_Constants.APP_DIRECTIVES_MODULE,
                App_Constants.APP_SERVICES_MODULE,
                App_Constants.APP_CONTROLLERS_MODULE,
                'ui.router',
                'ui.bootstrap',
                'ngRoute'
            ]);
        };

        App.config = function () {
            Application.config.App_Router.configure(this.Module);
        };

        App.run = function () {
            Application.Run.go(this.Module);
        };

        App.start = function () {
            angular.bootstrap(document, [App_Constants.APP_MODULE]);
        };
        App.Filters = angular.module(App_Constants.APP_FILTERS_MODULES, []);
        App.Directives = angular.module(App_Constants.APP_DIRECTIVES_MODULE, []);
        App.Services = angular.module(App_Constants.APP_SERVICES_MODULE, []);
        App.Controllers = angular.module(App_Constants.APP_CONTROLLERS_MODULE, []);
        return App;
    })();
    Application.App = App;
})(Application || (Application = {}));
//# sourceMappingURL=app.js.map
