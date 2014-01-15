/**
* Created by brian on 13.01.14.
*/
var Application;
(function (Application) {
    /// <reference path="../_refs.ts" />
    (function (models) {
        (function (CallResult) {
            CallResult[CallResult["Answered"] = 0] = "Answered";
            CallResult[CallResult["MissedCall"] = 1] = "MissedCall";
            CallResult[CallResult["PutInQueue"] = 2] = "PutInQueue";
            CallResult[CallResult["Forsarded"] = 3] = "Forsarded";
        })(models.CallResult || (models.CallResult = {}));
        var CallResult = models.CallResult;

        var Call = (function () {
            function Call(callerNumber, result) {
                this.callerNumber = callerNumber;
                this.result = result;
            }
            return Call;
        })();
        models.Call = Call;
    })(Application.models || (Application.models = {}));
    var models = Application.models;
})(Application || (Application = {}));
//# sourceMappingURL=Call.js.map
