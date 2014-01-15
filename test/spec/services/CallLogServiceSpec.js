/**
* Created by brian on 14.01.14.
*/
var Test;
(function (Test) {
    (function (services) {
        /// <reference path="../../../app/scripts/services/CallLogService.ts" />
        /// <reference path="../../../app/scripts/models/LogEntry.ts" />
        /// <reference path="../../_test_refs.ts" />
        (function (CallLog) {
            var LogEntry = Application.models.LogEntry;
            var App = Application.App;
            var AppConstants = Application.config.App_Constants;

            describe('CallLogServiceTest', function () {
                var CLService;

                beforeEach(function () {
                    App.defineModules();
                    module(AppConstants.APP_MODULE);
                });

                beforeEach(function () {
                    inject(function (callLogService) {
                        CLService = callLogService;
                    });
                });

                it("should fetch two fake call logs with fetchCallLogs method", function () {
                    var tempCallLogs = CLService.fetchCallLogs();

                    expect(tempCallLogs.length).toEqual(2);
                });
            });
        })(services.CallLog || (services.CallLog = {}));
        var CallLog = services.CallLog;
    })(Test.services || (Test.services = {}));
    var services = Test.services;
})(Test || (Test = {}));
//# sourceMappingURL=CallLogServiceSpec.js.map
