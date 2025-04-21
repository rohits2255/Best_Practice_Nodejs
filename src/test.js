function first(n) {
    return second(n) + n;
}

function second(n) {
    return n;
}

module.exports = {
    first,
    second
}