/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let mj = new Map()

    nums.forEach(v=> {
        if(mj.has(v)) mj.set(v, mj.get(v)+1)
        else (mj.set(v,1))
    })

    return [...mj.entries()].sort((a, b) => b[1] - a[1])[0][0]
};