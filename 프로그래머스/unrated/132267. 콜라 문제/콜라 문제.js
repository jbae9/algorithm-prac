function solution(a, b, n) {
    if(n < a) {
        return 0
    }
    
    let rem = n - (Math.floor(n/a)*a) + (Math.floor(n/a)*b)
    
    return (Math.floor(n/a)*b) + solution(a,b,rem)
}