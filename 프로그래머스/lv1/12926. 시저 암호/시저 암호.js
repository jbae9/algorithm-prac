function solution(s, n) {
    s = s.split('')
    
    for (let i=0; i<s.length; i++) {
        if (s[i] === ' ') {
            continue
        } else {
            if (s[i] === s[i].toLowerCase()) {
                s[i] = String.fromCharCode((s[i].charCodeAt(0) - 97 + n) % 26 + 97)
            } else {
                s[i] = String.fromCharCode((s[i].charCodeAt(0) - 65 + n) % 26 + 65)
            }
        }
    }
    
    return s.join('')
}