function solution(s){
    s = s.toLowerCase()
    
    let p = 0
    let y = 0
    
    let pIdx = s.indexOf('p')
    while (pIdx !== -1) {
        p++
        pIdx = s.indexOf('p', pIdx+1)
    }
    
    let yIdx = s.indexOf('y')
    while (yIdx !== -1) {
        y++
        yIdx = s.indexOf('y', yIdx+1)
    }
    
    return p === y ? true : false
}