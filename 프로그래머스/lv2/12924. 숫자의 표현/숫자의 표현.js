function solution(n) {
    let answer = 1
    
    for (let i=1; i<Math.ceil(n/2); i++) {
        let total = i
        
        for (let j=i+1; j<=n; j++) {
            total += j
            
            if (total > n) break
            
            if (total === n) {
                answer++
                break
            }
        }
    }
    
    return answer
}