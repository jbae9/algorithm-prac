function solution(dots) {
    var answer = 0
    let x = 0
    let y = 0
    
    for (i=1; i<dots.length; i++) {
        // Find x where y of first point === y of next point
        if(dots[0][1] === dots[i][1]) {
            x = Math.abs(dots[i][0]-dots[0][0])
        }
        // Find y where x of first point === x of next point
        else if(dots[0][0] === dots[i][0]) {
            y = Math.abs(dots[i][1]-dots[0][1])
        }
    }
    
    return x*y
}