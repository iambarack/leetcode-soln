/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let w = []; let min = word1.length > word2.length ? word2 : word1; let max = (min==word1) ? word2 : word1;
    for(let i=0;i<2*min.length;i+=2) {
        w.push(word1[i/2], word2[i/2])
    }
    max.split("").forEach((v,i) => {
        if(i>=min.length) w.push(v)
    })
    return w.join("");
};