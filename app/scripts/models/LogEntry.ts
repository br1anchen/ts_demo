/**
 * Created by brian on 14.01.14.
 */

/// <reference path="../_refs.ts" />

module Application.models {
    import Call = Application.models.Call;
    import IQueue = Application.models.IQueue;

    export class LogEntry {
        constructor(public callerNumber:string,
                    public duration:number,
                    public time:number,
                    public callHistory:Call[],
                    public queue:IQueue,
                    public callerName?:string) { }
    }
}