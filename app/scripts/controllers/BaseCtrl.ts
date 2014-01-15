/**
 * Created by brian on 14.01.14.
 */

/// <reference path="../_refs.ts" />

module Application.controllers {

    export class BaseCtrl{

        public ctrl;
        public $scope;
        public $rootScope;
        public $state;
        public $location;
        public $filter;
        public $window;

        public static $inject = [
            '$scope',
            '$rootScope',
            '$state',
            '$location',
            '$filter',
            '$window'
        ];

        constructor($scope,
                    $rootScope,
                    $state,
                    $location,
                    $filter,
                    $window){

            this.$scope = $scope;
            this.$rootScope = $rootScope;
            this.$state = $state;
            this.$location = $location;
            this.$filter = $filter;
            this.$window = $window;

            this.ctrl = this;
        }

    }

}