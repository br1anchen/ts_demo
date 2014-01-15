/**
 * Created by brian on 14.01.14.
 */

/// <reference path="../_refs.ts" />

module Application.config{

    export class App_Router{

        public module : ng.IModule;

        constructor(){
            throw new Error("Can not instantiate this Class");
        }

        public static configure(module : ng.IModule){

            var mainView : Object = {
                templateUrl : "views/main.html",
                controller : Application.controllers.MainCtrl
            };

            module.config(
                [
                    '$stateProvider',
                    '$urlRouterProvider',
                    function($stateProvider,$urlRouterProvider){

                        $urlRouterProvider.otherwise('/');

                        $stateProvider
                            .state('main',{
                                url : "/",
                                views : {
                                    'main' : mainView
                                }
                            });

                    }
                ]
            );

        }

    }

}