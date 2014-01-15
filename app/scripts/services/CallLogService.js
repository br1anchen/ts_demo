/**
* Created by brian on 13.01.14.
*/
var Application;
(function (Application) {
    /// <reference path="../_refs.ts" />
    (function (services) {
        var Call = Application.models.Call;
        var CallResult = Application.models.CallResult;
        var Queue = Application.models.Queue;
        var LogEntry = Application.models.LogEntry;

        var CallLogService = (function () {
            function CallLogService() {
            }
            CallLogService.prototype.fetchCallLogs = function (agentId) {
                var callLogs = [];

                var caller1 = new Call('654321', 0 /* Answered */);
                var queue1 = new Queue('1', 'Support', '123');
                var log1 = new LogEntry('123456', 100, 123456, [caller1], queue1);
                var caller2 = new Call('6543210', 0 /* Answered */);
                var queue2 = new Queue('1', 'Support', '123');
                var log2 = new LogEntry('0123456', 1000, 1234560, [caller2], queue2);

                callLogs.push(log1);
                callLogs.push(log2);

                return callLogs;
            };
            return CallLogService;
        })();
        services.CallLogService = CallLogService;
    })(Application.services || (Application.services = {}));
    var services = Application.services;
})(Application || (Application = {}));
//# sourceMappingURL=CallLogService.js.map
