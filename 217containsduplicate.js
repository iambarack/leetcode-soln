/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let set = new Set()
    return nums.some(v=>{
        if(!set.has(v)) set.add(v)
        else return true
    })
};