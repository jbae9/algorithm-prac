function solution(lottos, winNums) {
    let best = 7
    let worst = 7
    
    lottos = lottos.sort()
    
    for (let i=0; i<lottos.length; i++) {
        if (lottos[i] === 0) {
            best--
        }
        
        if (winNums.includes(lottos[i])) {
            best--
            worst--
        }
    }
    
    best = best > 6 ? 6 : best
    worst = worst > 6 ? 6 : worst
    
    return [best,worst]
}