function solution(s) {
    let answer = []
    let map = new Map()
    
    // Change input to array
    const arr = s.slice(1,-1).replace(/{|}/g,'').split(',')
    
    // Iterate array
    for (let n of arr) {
        n = Number(n)
        if (!map.has(n)) {
            map.set(n,0)
        } else {
            map.set(n, map.get(n)+1)
        }
    }
    
    for (let n of map.keys()) {
        answer[map.size-1-map.get(n)] = n
    }
    
    return answer
}