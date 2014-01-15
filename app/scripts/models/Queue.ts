/**
 * Created by brian on 14.01.14.
 */

/// <reference path="../_refs.ts" />

module Application.models{

    export interface IQueue {
        cid:string;
        name:string;
        serviceNumber:string;
    }

    export class Queue implements IQueue {

        constructor(public cid:string, public name:string, public serviceNumber:string) {

        }

    }
}