function solution(n, words) {
    for (let i=0; i<words.length; i++) {
        const word = words[i]
        
        // 같은 단어 반복
        if (words.slice(0,i).includes(word)) {
            return [n-(i+1)%n, Math.ceil((i+1)/n)]
        }
        
        // 끝말잇기 실패
        if (i>0 && words[i-1][words[i-1].length-1] !== word[0]) {
            return [(i+1)%n, Math.ceil((i+1)/n)]
        }
    }
    
    return [0,0]
}
