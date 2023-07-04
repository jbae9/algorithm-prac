function solution(n, stages) {
    let winRates = []
    let players = stages.length
        
    for (let i=1; i<=n; i++) {
        let failed = 0
        let idx = stages.indexOf(i)
        
        while (idx !== -1) {
            failed++
            idx = stages.indexOf(i, idx+1)
        }
        
        winRates.push([i,failed/players])
        
        players -= failed
    }

    return winRates.sort((a,b) => b[1]-a[1]).map(x => x[0])
}