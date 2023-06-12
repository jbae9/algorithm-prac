function solution(s, skip, count) {
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let answer = ''
    
    for (let i=0; i<s.length; i++) {
        let idx = alphabet.indexOf(s[i])
        
        let cnt = 1
        while (cnt <= count) {
            idx = idx+1 > alphabet.length-1 ? idx+1-alphabet.length : idx+1
            if (!skip.includes(alphabet[idx])) {
                cnt++
            }
        }
        answer += alphabet[idx]
    }
    return answer
}