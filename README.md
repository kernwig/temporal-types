# Temporal Types
Typescript types for time-based fields

## Why?

THe point of optional typing in Typescript is to provide extra context to the reader of your
code. But when we want to give the type of some number of seconds, days, or any other unit of
time we end up just typing it as `number`. But what does `timeout: number` mean? Often we must
dig into the source code to know if that timeout is in seconds or milliseconds. When writing
our own code, hopefully we do better than that by documenting the time units in a comment or
in the variable name itself (i.e.: `timeoutSeconds: number`). Doing so is just a poor trade-off
for not having proper types.

Now for use in your program, a library like [js-joda](https://js-joda.github.io/js-joda/)
may be a good choice; you can specify `timeout: Duration`. That's nice, but maybe a bit heavy
and absolutely won't work if you want to serialize to JSON.

This library defines typescript alias types. They are still just primitives and thus work
with JSON, but provide _context_ to your declarations. So instead of:

```
class UnclearThing {
  duration: number; //in minutes
  walkSeconds: number;
  yearsWithCompany: number;
  lastChange: string;
}
```

You can write:

```
import {MillisecondsInMinute, Minutes, Seconds, Years} from "temporal-types";
​
class BetterThing {
  duration: Minutes;
  walkTime: Seconds;
  timeWithCompany: Years;
  lastChange: ISODateTime;
}
```

It's the same thing, only clearer.

## FAQ

*Q:* Why should I introduce another dependency for a few types that I can define myself?

*A:* Have you defined them? Probably not. We can do such things, but often don't.

If you don't want a dependency, feel free to copy the lines into your own source.

## See also....

- [temporal-constants](https://github.com/kernwig/temporal-constants) - Constants to compute with time units without magic numbers.
- [js-joda](https://js-joda.github.io/js-joda/) - Complete library for date and time representation and manipulation
 
