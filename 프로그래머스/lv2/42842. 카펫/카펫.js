function solution(brown, yellow) {
    const total = brown + yellow
    
    for (let i = 1; i <= brown; i++) {
        if (total%i === 0 && i*2 + (total/i-2)*2 === brown) {
            return i > total/i ? [i, total/i] : [total/i, i]
        }
    }
}