function solution(r1, r2) {
    let answer = 0

    for (let x=1; x<=r2; x++) {
        // Find maximum value of y for each x
        let maxY = Math.floor(Math.sqrt(r2**2 - x**2))

        // Find minimum value of y for each x
        let minY = r1>x ? Math.ceil(Math.sqrt(r1**2 - x**2)) : 0

        // Calculate dots in Q1
        answer += (maxY - minY +1)
    }
    
    return answer*4
}