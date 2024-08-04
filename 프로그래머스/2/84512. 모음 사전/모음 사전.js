function cutUs (str) {
    str = str.substring(0,str.length-1)
    
    if (str[str.length-1] === 'U') {
        return cutUs(str)
    } else return str
}

function solution(word) {
    let answer = 0
    let cur = ''
    const vowels = ['A','E','I','O','U']
    
    while (cur!=word) {
        if (cur.length<5) {
            cur += 'A'
            answer++
        } else {
            if (cur[4] === 'U') {
                cur = cutUs(cur)
                cur = cur.substring(0,cur.length-1) + vowels[vowels.indexOf(cur[cur.length-1])+1]
                answer++
            } else {
                cur = cur.substring(0,4) + vowels[vowels.indexOf(cur[4])+1]
                answer++
            }
        }
    }
    
    return answer
}
