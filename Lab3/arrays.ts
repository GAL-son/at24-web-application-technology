function mergeArrays<T, U>(array1: Array<T>, array2: Array<U>) : Array<T|U> {
    return [...array1, ...array2];
}