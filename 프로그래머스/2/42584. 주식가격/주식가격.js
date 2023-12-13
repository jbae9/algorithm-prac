function solution(prices) {
    let answer = new Array(prices.length).fill(0)
    
    for (let i=0; i<prices.length-1; i++) {
        let sec = 0
        for (let j=i+1; j<prices.length; j++) {
            sec++
            answer[i] = sec
            if (prices[j] < prices[i]) {
                break
            }
        }
    }
    
    return answer
}