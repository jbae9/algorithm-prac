function solution(n, m, section) {
    let answer = 0
    let idx = 0
    
    for (let i=0; i<section.length; i++) {
        if (section[i] > idx) {
            idx = section[i]+m-1
            answer++
        }
    }
    
    return answer
}