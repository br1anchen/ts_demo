/**
 * Created by brian on 13.01.14.
 */

/// <reference path="../_refs.ts" />

module Application.models{

    export enum CallResult {
        Answered,
        MissedCall,
        PutInQueue,
        Forsarded
    }

    export class Call{

        constructor(public callerNumber:string,public result:CallResult){

        }

    }

}