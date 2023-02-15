function solution(lines) {
    let ans = 0
    let total = new Array(201).fill(0)
    let smallest = 201
    let biggest = 0
    for (line of lines) {
        let [x,y] = line
        if (x===y) break

        if (x+100<smallest) smallest = x+100
        if (y+100>biggest) biggest = y+100
        for(i=x+100; i<y+100; i++) {
            total[i] += 1
        }
    }
    
    for(i=smallest; i<=biggest; i++) {
        if (total[i] > 1) {
            ans++
        } 
    }
    
    return ans
}