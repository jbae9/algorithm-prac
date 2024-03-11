function solution(cacheSize, cities) {
    if (cacheSize === 0) return cities.length * 5
    
    let runtime = 0
    let cache = []
    
    for (let c of cities) {
        c = c.toLowerCase()
        if (cache.length < cacheSize) {
            if (cache.includes(c)) {
                cache.splice(cache.indexOf(c), 1)
                cache.push(c)
                runtime++
            } else {
                cache.push(c.toLowerCase())
                runtime+=5   
            }
        } else {
            if (cache.includes(c)) {
                cache.splice(cache.indexOf(c), 1)
                cache.push(c)
                runtime++
            } else {
                cache.shift()
                cache.push(c)
                runtime+=5
            }
        }
    }
    
    return runtime
}