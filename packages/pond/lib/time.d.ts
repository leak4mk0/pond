import { Key } from "./key";
import { Period } from "./period";
import { TimeRange } from "./timerange";
import { TimeAlignment } from "./types";
/**
 * Constructs a new `Time` object that can be used as
 * a key for `Event`'s. A `Time` object represents a
 * timestamp, and is stored as a Javascript `Date`
 * object. The difference with just a Date is that
 * is conforms to the interface required to be an
 * `Event` key.
 */
export declare class Time extends Key {
    static isTime(t: Time): boolean;
    private _d;
    constructor(d?: number | string | Date);
    type(): string;
    toJSON(): {};
    toString(): string;
    /**
     * The timestamp of this data, in UTC time, as a string.
     */
    toUTCString(): string;
    /**
     * The timestamp of this data, in Local time, as a string.
     */
    toLocalString(): string;
    /**
     * The timestamp of this data
     */
    timestamp(): Date;
    valueOf(): number;
    /**
     * The begin time of this `Event`, which will be just the timestamp
     */
    begin(): Date;
    /**
     * The end time of this `Event`, which will be just the timestamp
     */
    end(): Date;
    toTimeRange(period: Period, align: TimeAlignment): TimeRange;
}
declare function timeFactory(d?: number | string | Date): Time;
export { timeFactory as time };
