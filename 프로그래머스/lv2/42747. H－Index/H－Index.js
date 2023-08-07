function solution(cites) {
    cites = cites.sort((a,b) => a-b)
    
    for (let i=0; i<cites.length; i++) {
        if (cites[i] >= cites.length - i) {
            return cites.length - i
        }
    }
    
    return 0
}