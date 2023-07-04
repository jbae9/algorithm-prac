function solution(s) {
    s = s.split('')
    
    let index = 0
    for (let i=0; i<s.length; i++) {
        if (s[i] !== ' ') {
            if (index%2===0) s[i] = s[i].toUpperCase()
            if (index%2===1) s[i] = s[i].toLowerCase()
            index++
        } else {
            index = 0
        }
    }
    
    return s.join('')
}