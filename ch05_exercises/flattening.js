var arrOfArrs = [[true, false], ["string"], [1, 2, 3]],
    merged = [];

arrOfArrs.reduce(function (val, merged) {
    return val.concat(merged);
});