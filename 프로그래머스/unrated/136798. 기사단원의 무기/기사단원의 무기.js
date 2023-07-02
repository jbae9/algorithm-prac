function numOfDivisors(n) {
    if (n===1) {
        return 1
    }
    
    if (n===2) {
        return 2
    }
    
    let divisors = 0
    
    for (let i=1; i<=Math.floor(Math.sqrt(n)); i++) {       
        if (n/i===i) {
            divisors -=1
        }
        if (n%i===0) {
            divisors += 2
        }
    }
    
    return divisors
}

function solution(number, limit, power) {
    var answer = 0
    
    for (let i=1; i<=number; i++) {
        const divisors = numOfDivisors(i)
        
        if (divisors>limit) {
            answer += power
        } else {
            answer += divisors
        }
    }
    
    return answer
}