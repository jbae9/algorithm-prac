function solution(A, B) {
    var pushed = 0
    for (let i=0; i<A.length; i++) {
        if (A === B) return pushed
        A = A[A.length-1] + A.substring(0,A.length-1)
        pushed++
    }
    return -1
}