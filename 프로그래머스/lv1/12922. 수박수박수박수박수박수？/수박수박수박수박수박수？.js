function solution(n) {
    if (n===1) return '수'
    
    return n%2===0 ? '수박'.repeat(n/2) : '수박'.repeat(Math.min(n/2)) + '수'
}