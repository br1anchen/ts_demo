/**
* Created by brian on 14.01.14.
*/
var Application;
(function (Application) {
    /// <reference path="../_refs.ts" />
    (function (models) {
        var Call = Application.models.Call;

        var LogEntry = (function () {
            function LogEntry(callerNumber, duration, time, callHistory, queue, callerName) {
                this.callerNumber = callerNumber;
                this.duration = duration;
                this.time = time;
                this.callHistory = callHistory;
                this.queue = queue;
                this.callerName = callerName;
            }
            return LogEntry;
        })();
        models.LogEntry = LogEntry;
    })(Application.models || (Application.models = {}));
    var models = Application.models;
})(Application || (Application = {}));
//# sourceMappingURL=LogEntry.js.map
