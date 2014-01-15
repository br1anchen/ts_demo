/**
 * Created by brian on 14.01.14.
 */

/// <reference path="../../../app/scripts/services/CallLogService.ts" />
/// <reference path="../../../app/scripts/models/LogEntry.ts" />
/// <reference path="../../_test_refs.ts" />

module Test.services.CallLog{
    import ICallLogService = Application.services.ICallLogService;
    import LogEntry = Application.models.LogEntry;
    import App = Application.App;
    import AppConstants = Application.config.App_Constants;

    describe('CallLogServiceTest',() =>{

        var CLService : ICallLogService;

        beforeEach(() => {
            App.defineModules();
            module(AppConstants.APP_MODULE);
        });

        beforeEach(() => {
            inject((callLogService) => {
                CLService = callLogService;
            });
        });

        it("should fetch two fake call logs with fetchCallLogs method", () =>{
            var tempCallLogs = CLService.fetchCallLogs();

            expect(tempCallLogs.length).toEqual(2);
        });

    });
}