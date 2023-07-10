function solution(n) {
    let next = n+1
    
    while (n.toString(2).match(/1/g).length !== next.toString(2).match(/1/g).length) {
        next++
    }
    
    return next
}
