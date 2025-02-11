function isEven(num) {
    return num % 2 === 0;
}

function isGreater(a, b) {
    return a > b;
}

function isLessOrEqual(a, b) {
    return a <= b;
}

function isInRange(value, min, max) {
    return value >= min && value <= max;
}

function areEqual(a, b) {
    return a === b;
}

function areNotEqual(a, b) {
    return a !== b;
}

function eitherOr(a, b) {
    return a || b; // Devuelve true si al menos uno es true
}

function neitherNor(a, b) {
    return !a && !b; // Devuelve true si ambos son false
}

function bothAnd(a, b) {
    return a && b; // Devuelve true si ambos son true
}

function exclusiveOr(a, b) {
    return !!(a ^ b); // XOR lógico: true solo si uno es true y el otro false
}

module.exports = {
    isEven,
    isGreater,
    isLessOrEqual,
    isInRange,
    areEqual,
    areNotEqual,
    eitherOr,
    neitherNor,
    bothAnd,
    exclusiveOr
};
