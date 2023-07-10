function solution(n) {
    let fib = [0,1]
    
    while (fib.length-1 < n) {
        fib.push((fib[fib.length-1]+fib[fib.length-2])%1234567)
    }
    
    return fib[n]
}