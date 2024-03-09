function solution(s) {
    let xCnt = 0
    let yCnt = 0
    
    let total = 0
    
    while (s.length > 0) {
        if (s.length === 1) {
            return total+1
        }
        
        let x = s[0]
        xCnt = 1
        
        for (let i=1; i<s.length; i++) {
            if (x != s[i]) {
                yCnt++
            } else {
                xCnt++
            }
            
            if (xCnt === yCnt) {
                xCnt = 0
                yCnt = 0
                s = s.slice(i+1)
                total++
                break
            } else if (s[i+1] === undefined) {
                return total+1
            } 
        }
    }
    
    return total
}