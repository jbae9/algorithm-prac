function solution(dirs) {
    let answer = 0
    dirs = dirs.split('')
    let cur = [0,0]
    let next = [0,0]
    let path = {}
    
    for (let d of dirs) {
        switch(d) {
            case 'U':
                next = [cur[0]+1 > 5 ? cur[0] : cur[0]+1, cur[1]]
                break;
            case 'D':
                next = [cur[0]-1 < -5 ? cur[0] : cur[0]-1, cur[1]]
                break;
            case 'L':
                next = [cur[0], cur[1]-1 < -5 ? cur[1] : cur[1]-1]
                break;
            case 'R':
                next = [cur[0], cur[1]+1 > 5 ? cur[1] : cur[1]+1]
                break;
        }
        
        let curKey = cur[0].toString() + cur[1].toString()
        let nextKey = next[0].toString() + next[1].toString()
        
        if (curKey !== nextKey) {
            if (Object.keys(path).includes(curKey)) {
                if (!path[curKey].includes(nextKey)) {
                    path[curKey].push(nextKey)
                    answer++
                }
            } else {
                path[curKey] = [nextKey]
                answer++
            }
            
            if (Object.keys(path).includes(nextKey)) {
                if (!path[nextKey].includes(curKey)) {
                    path[nextKey].push(curKey)
                }
            } else {
                path[nextKey] = [curKey]
            }
        }

        cur = next
    }
    
    return answer
}