/**
 * Created by brian on 14.01.14.
 */

/// <reference path="../_refs.ts" />

module Application.controllers {

    export class MainCtrl extends BaseCtrl {

        private _result;

        constructor($scope,
                    $rootScope,
                    $state,
                    $location,
                    $filter,
                    $window,
                    callLogService){

            super($scope,
                $rootScope,
                $state,
                $location,
                $filter,
                $window);

            this._result = callLogService;

        }




    }

}