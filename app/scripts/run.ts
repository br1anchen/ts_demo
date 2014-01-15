/**
 * Created by brian on 14.01.14.
 */

/// <reference path='_refs.ts' />

module Application{

    export class Run {

        public  module:ng.IModule;

        public static go(module:ng.IModule) {
            //console.log('Run configuration  block  started');

            module.
                run(
                    [
                        '$rootScope',
                        '$state',
                        function ($rootScope,$state) {
                            $rootScope.$state = $state;
                            $rootScope.APP_BASE_URL = config.App_Constants.APP_BASE_URL;
                            $rootScope.APP_NAME = config.App_Constants.APP_NAME;
                        }]); //run
        }

    }

}