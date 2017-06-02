export const libSource = `/** An 8-bit signed integer. */
declare type sbyte = number;

/** An 8-bit unsigned integer. */
declare type byte = number;

/** A 16-bit signed integer. */
declare type short = number;

/** A 16-bit unsigned integer. */
declare type ushort = number;

/** A 32-bit signed integer. */
declare type int = number;

/** A 32-bit unsigned integer. */
declare type uint = number;

/** A 64-bit signed integer. */
declare type long = number;

/** A 64-bit unsigned integer. */
declare type ulong = number;

/** A 1-bit unsigned integer.*/
declare type bool = boolean;

/** A 32-bit float. */
declare type float = number;

/** A 64-bit float. */
declare type double = number;

/** A 32-bit unsigned integer when targeting WASM32 respectively a 64-bit unsigned integer when targeting WASM64. */
declare type uintptr = number;

/** A class describing a pointer to a data structure. */
/* declare class Ptr<T> {
    offset: uintptr;
    value: T;
    constructor(offset: uintptr);
    increment(diff: uintptr): Ptr<T>;
    decrement(diff: uintptr): Ptr<T>;
} */

// Type aliases
declare type int8 = sbyte;
declare type uint8 = byte;
declare type int16 = short;
declare type uint16 = ushort;
declare type int32 = int;
declare type uint32 = uint;
declare type int64 = long;
declare type uint64 = ulong;

// Fillers for TypeScript complaining about missing types with 'nolib'
declare class Array<T> {
  readonly length: uint;
  constructor(size: uint);
}
interface Boolean { }
interface Function { }
interface IArguments { }
interface Number { }
interface Object { }
interface RegExp { }
interface String { }

// Builtins
declare function rotl(value: int, shift: int): int;
declare function rotll(value: long, shift: long): long;
declare function rotr(value: int, shift: int): int;
declare function rotrl(value: long, shift: long): long;
declare function clz(value: int): int;
declare function clzl(value: long): long;
declare function ctz(value: int): int;
declare function ctzl(value: long): long;
declare function popcnt(value: int): int;
declare function popcntl(value: long): long;
declare function abs(value: double): double;
declare function absf(value: float): float;
declare function ceil(value: double): double;
declare function ceilf(value: float): float;
declare function floor(value: double): double;
declare function floorf(value: float): float;
declare function sqrt(value: double): double;
declare function sqrtf(value: float): float;
declare function trunc(value: double): double;
declare function truncf(value: float): float;
declare function nearest(value: double): double;
declare function nearestf(value: float): float;
declare function min(left: double, right: double): double;
declare function minf(left: float, right: float): float;
declare function max(left: double, right: double): double;
declare function maxf(left: float, right: float): float;
declare function copysign(left: double, right: double): double;
declare function copysignf(left: float, right: float): float;
declare function reinterpreti(value: float): int;
declare function reinterpretl(value: double): long;
declare function reinterpretf(value: int): float;
declare function reinterpretd(value: long): double;
declare function current_memory(): int;
declare function grow_memory(value: int): int;

declare function sizeof<T>(): uintptr;
// declare function astype<T>(ptr: uintptr): T;
// declare function allocate<T>(): T;
// declare function allocate<T>(size: uint): T[];
// declare function deallocate<T>(reference: T): void;

// Linked-in standard library
declare function memset(dest: uintptr, c: int, size: uintptr): uintptr;
declare function memcpy(dest: uintptr, src: uintptr, size: uintptr): uintptr;
declare function malloc(size: uintptr): uintptr;
declare function free(ptr: uintptr): void;
`;

export const mallocBlob = "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";
