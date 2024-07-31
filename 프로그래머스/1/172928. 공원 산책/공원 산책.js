function solution(park, routes) {
    let answer = []
    let h = 0
    let w = 0

    for (let idx in park) {
        idx = Number(idx)
        if (park[idx].includes('S')) {
            answer = [idx, park[idx].indexOf('S')]
        }
        h = park[idx].length
        w = park.length
        park[idx] = park[idx].split('')
    }

    for (let route of routes) {
        let [dir, length] = route.split(' ')
        length = Number(length)
        let y = answer[0]
        let x = answer[1]

        switch (dir) {
            case 'E':
                if (x + length < h) {
                    let path = true
                    for (let i=1; i<=length; i++) {
                        if (park[y][x+i] === 'X') {
                            path = false
                            break
                        }
                    }
                    if (path) answer = [y,x+length]
                }
                break;
            case 'W':
                if (x - length >= 0) {
                    let path = true
                    for (let i=1; i<=length; i++) {
                        if (park[y][x-i] === 'X') {
                            path = false
                            break
                        }
                    }
                    if (path) answer = [y,x-length]
                }
                break;
            case 'S':
                if (y + length < w) {
                    let path = true
                    for (let i=1; i<=length; i++) {
                        if (park[y+i][x] === 'X') {
                            path = false
                            break
                        }
                    }
                    if (path) answer = [y+length,x]
                }
                break;
            case 'N':
                if (y - length >= 0) {
                    let path = true
                    for (let i=1; i<=length; i++) {
                        if (park[y-i][x] === 'X') {
                            path = false
                            break
                        }
                    }
                    if (path) answer = [y-length,x]
                }
                break;
        }
    }

    return answer
}
