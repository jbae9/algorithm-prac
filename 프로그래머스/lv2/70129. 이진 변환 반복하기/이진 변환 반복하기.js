function recursive(s, zeroes, turns) {
    if (s === '1') {
        return [turns, zeroes]
    }
    
    let tempZeroes = s.includes('0') ? s.match(/0/g).length : 0
    s = s.replace(/0/g, '').length.toString(2)
    
    return recursive(s, zeroes + tempZeroes, turns+1)
}

function solution(s) {
    return recursive(s,0,0)
}