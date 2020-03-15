// Time units - provide more meaningful types
export type Milliseconds = number;
export type Seconds = number;
export type Minutes = number;
export type Hours = number;
export type Days = number;
export type Weeks = number;
export type Months = number;
export type Years = number;

/** Date in YYYY-MM-DD format, common with SQL and ISO 8601 */
export type SQLDate = string;
export type ISODate = string;

/** Time in HH:MM:SS format, common with SQL */
export type SQLTime = string;

/** Timestamp in yyyy-mm-dd hh:mm:ss format, common with SQL */
export type SQLDateTime = string;

/** Timestamp in yyyy-mm-ddThh:mm:ss.nnnnnn+|-hh:mm format, common with ISO 8601 */
export type ISODateTime = string;
