/**
 * Created by brian on 14.01.14.
 */

/// <reference path='_refs.ts' />

module Application{
    import App_Constants = Application.config.App_Constants;
    import App_Router = Application.config.App_Router;

    export class App {

        public static Filters : ng.IModule = angular.module(App_Constants.APP_FILTERS_MODULES,[]);
        public static Directives : ng.IModule = angular.module(App_Constants.APP_DIRECTIVES_MODULE,[]);
        public static Services : ng.IModule = angular.module(App_Constants.APP_SERVICES_MODULE,[]);
        public static Controllers : ng.IModule = angular.module(App_Constants.APP_CONTROLLERS_MODULE,[]);

        public static Module : ng.IModule;

        public static defineModules() : void{

            //register controllers
            this.Controllers.controller('baseCtrl',Application.controllers.BaseCtrl);
            this.Controllers.controller('mainCtrl',Application.controllers.MainCtrl);

            //register services
            this.Services.service('callLogService',Application.services.CallLogService);

            //register directives

            //define main application module
            this.Module =angular.module(App_Constants.APP_MODULE,
                [
                    App_Constants.APP_FILTERS_MODULES,
                    App_Constants.APP_DIRECTIVES_MODULE,
                    App_Constants.APP_SERVICES_MODULE,
                    App_Constants.APP_CONTROLLERS_MODULE,
                    'ui.router',
                    'ui.bootstrap',
                    'ngRoute'
                ]
            );

        }

        public static config() : void{

            Application.config.App_Router.configure(this.Module);

        }

        public static run() : void{

            Application.Run.go(this.Module);

        }

        public static start() : void {

            angular.bootstrap(document,[App_Constants.APP_MODULE]);

        }


    }

}