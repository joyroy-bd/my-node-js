const abc = (x)=> {
    var re;
    if (x > 0) {
        re = x;
    } else {
        re = x*(-1);
    }
    return re;
};
const fect = (n) => {
    if (n == 0) {
        n = 1;
        return n;
    } else {
        return n*fect(n-1);
    }
};
const toPow = (x, y)=> {
    var result = 1;
    for (var i = 1; i <= y; i++) {
        result = result*x;
    }
    return result;
};


exports.abc = abc;
exports.fect = fect;
exports.toPow=toPow;