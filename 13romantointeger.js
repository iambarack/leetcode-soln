/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const roman = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000]
    ])
    let total = 0;
    s.split('').forEach((v,i) => {
        if(roman.get(s[i+1]) > roman.get(s[i])) total-=roman.get(v) 
        else total+=roman.get(v);
    })
    return total;
};