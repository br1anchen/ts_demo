/**
* Created by brian on 14.01.14.
*/
var Application;
(function (Application) {
    /// <reference path="../_refs.ts" />
    (function (config) {
        var App_Router = (function () {
            function App_Router() {
                throw new Error("Can not instantiate this Class");
            }
            App_Router.configure = function (module) {
                var mainView = {
                    templateUrl: "views/main.html",
                    controller: Application.controllers.MainCtrl
                };

                module.config([
                    '$stateProvider',
                    '$urlRouterProvider',
                    function ($stateProvider, $urlRouterProvider) {
                        $urlRouterProvider.otherwise('/');

                        $stateProvider.state('main', {
                            url: "/",
                            views: {
                                'main': mainView
                            }
                        });
                    }
                ]);
            };
            return App_Router;
        })();
        config.App_Router = App_Router;
    })(Application.config || (Application.config = {}));
    var config = Application.config;
})(Application || (Application = {}));
//# sourceMappingURL=App_Router.js.map
