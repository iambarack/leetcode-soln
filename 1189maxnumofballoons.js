/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let bmap = new Map([
        ['b', 0],
        ['a', 0],
        ['l', 0],
        ['o', 0],
        ['n', 0]
    ])
    let bset = new Set(['a','b', 'l','o','n'])

    text.split('').forEach(v => bset.has(v) ? bmap.set(v, bmap.get(v)+1) : 1)
    return Math.min(bmap.get('b'), bmap.get('a'), Math.floor(bmap.get('l')/2), Math.floor(bmap.get('o')/2), bmap.get('n'))
};