/**
* Created by brian on 14.01.14.
*/
var Application;
(function (Application) {
    /// <reference path="../_refs.ts" />
    (function (models) {
        var Queue = (function () {
            function Queue(cid, name, serviceNumber) {
                this.cid = cid;
                this.name = name;
                this.serviceNumber = serviceNumber;
            }
            return Queue;
        })();
        models.Queue = Queue;
    })(Application.models || (Application.models = {}));
    var models = Application.models;
})(Application || (Application = {}));
//# sourceMappingURL=Queue.js.map
