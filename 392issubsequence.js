/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let res = 0; let el = s[res]

    t.split('').forEach((v,i) => {
        if(v == el) {
            res++;
            el=s[res]
            if(res == s.length) return
        }
    })

    return res == s.length

    //change searched element midway
};