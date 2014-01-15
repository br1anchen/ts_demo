/**
 * Created by brian on 13.01.14.
 */

/// <reference path="../_refs.ts" />

module Application.services{
    import Call = Application.models.Call;
    import CallResult = Application.models.CallResult;
    import Queue = Application.models.Queue;
    import LogEntry = Application.models.LogEntry;

    export interface ICallLogService{
        fetchCallLogs() : LogEntry[];
    }

    export class CallLogService {

        fetchCallLogs(agentId ?: string) : LogEntry[] {

            var callLogs : LogEntry[] = [];

            var caller1 = new Call('654321',CallResult.Answered);
            var queue1 = new Queue('1','Support','123');
            var log1 = new LogEntry('123456',100,123456,[caller1],queue1);
            var caller2 = new Call('6543210',CallResult.Answered);
            var queue2 = new Queue('1','Support','123');
            var log2 = new LogEntry('0123456',1000,1234560,[caller2],queue2);

            callLogs.push(log1);
            callLogs.push(log2);

            return callLogs;
        }

    }

}