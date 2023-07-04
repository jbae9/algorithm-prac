function solution(dart) {
    let total = 0
    let prev = 0
    
    for (let i=0; i<dart.length; i++) {
        let point = 0
        let curr = 0
        
        // Check if number is below 10
        if (isNaN(parseInt(dart[i+1]))) {
            point = parseInt(dart[i])   
        } else {
            point = parseInt(dart.substring(i, i+2))
            i++
        }
        
        if (dart[i+1] === 'S') {
            total += point
            curr = point
        } else if (dart[i+1] === 'D') {
            total += point**2
            curr = point**2
        } else if (dart[i+1] === 'T') {
            total += point**3
            curr = point**3
        }
        i++
        
        // Check if * or # option exists
        if (dart[i+1] === '*') {
            total += curr + prev
            curr *= 2
            i++
        } else if (dart[i+1] === '#') {
            total -= curr * 2
            curr *= -1
            i++
        }
        
        prev = curr
    }
    
    return total
}