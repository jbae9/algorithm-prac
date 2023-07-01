function isNumOfDivisorsEven(n) {
    if (n === 1) {
        return false
    }
    
    let divisors = 0
    
    for (let i=2; i<n; i++) {
        if (n%i===0) {
            divisors++
        }
    }
    
    if (divisors%2===0) {
        return true
    } else {
        return false
    }
}

function solution(left, right) {
    let answer = 0
    
    for (let i=left; i<=right; i++) {
        if (isNumOfDivisorsEven(i)) {
            answer += i
        } else {
            answer -= i
        }
    }
    
    return answer
}