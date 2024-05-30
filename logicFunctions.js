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
    if (a || b)
        return true
    else
        return false
}

function neitherNor(a, b) {
    return !(a || b);
}

function bothAnd(a, b) {
    return a && b;
}

function exclusiveOr(a, b) {
    if (a && !b || !a && b)
        return true
    else 
        return false    
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
