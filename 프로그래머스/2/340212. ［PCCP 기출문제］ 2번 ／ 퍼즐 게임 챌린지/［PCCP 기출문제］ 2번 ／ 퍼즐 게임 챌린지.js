function solution(diffs, times, limit) {
    let min = 1
    let max = 100000
    
    function timeInLimit(l) {
        let timeTaken = 0
        for (let i=0; i<diffs.length; i++) {
            let diff = diffs[i]
            let time = times[i]
            
            if (l >= diff) {
                timeTaken += time
            } else {
                if (i>0) {
                    timeTaken += (time+times[i-1])*(diff-l) + time       
                } else {
                    timeTaken += time*(diff-l) + time 
                }
            }
        }
        return timeTaken <= limit
    }

    //Binary search for optimal level
    while (min<max) {
        const mid = Math.floor((max-min)/2)+min
        const midTime = timeInLimit(mid)

        if (mid === max) return mid

        if (midTime) {
            // If difficulty in middle of min and max is in limit, make mid the new max
            max = mid
        } else {
            // If middle difficulty is not in limit, make mid the new min
            min = mid+1
        }

    }
    return min
}