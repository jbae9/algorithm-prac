function solution(A, B) {
    var pushed = 0
    for (let i=0; i<A.length; i++) {
        if (A === B) return pushed
        A = A.slice(-1) + A.slice(0,-1)
        pushed++
    }
    return -1
}