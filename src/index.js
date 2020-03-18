
exports.min = function min(array) {
    if (!array || Array.isArray(array) && array.length < 1) return 0;
    return Math.min.apply(null, array);
}

exports.max = function max(array) {
    if (!array || Array.isArray(array) && array.length < 1) return 0;
    return Math.max.apply(null, array);
}

exports.avg = function avg(array) {
    if (!array || Array.isArray(array) && array.length < 1) return 0;
    arguments.reduce = Array.prototype.reduce;
    return array.reduce(function (sum, current) {
        return (sum + current);
    }, 0)/array.length;
}
