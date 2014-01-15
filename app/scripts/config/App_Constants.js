/**
* Created by brian on 14.01.14.
*/
var Application;
(function (Application) {
    ///<reference path="../_refs.ts" />
    (function (config) {
        var App_Constants = (function () {
            function App_Constants() {
            }
            App_Constants.APP_NAME = "DemoApp";
            App_Constants.APP_BASE_URL = "http://10.254.9.33:8080/ServiceGateway/";
            App_Constants.APP_BASE_RESTURL = "http://10.254.9.33:8080/ServiceGateway/rest/";
            App_Constants.APP_MODULE = "app";
            App_Constants.APP_CONTROLLERS_MODULE = "app.controllers";
            App_Constants.APP_DIRECTIVES_MODULE = "app.directives";
            App_Constants.APP_SERVICES_MODULE = "app.services";
            App_Constants.APP_FILTERS_MODULES = "app.filters";
            return App_Constants;
        })();
        config.App_Constants = App_Constants;
    })(Application.config || (Application.config = {}));
    var config = Application.config;
})(Application || (Application = {}));
//# sourceMappingURL=App_Constants.js.map
