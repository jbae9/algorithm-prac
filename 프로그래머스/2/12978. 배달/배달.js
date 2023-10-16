function solution(n, road, k) {
    let map = {}
    
    for (let i=0; i<road.length; i++) {
        // 출발 마을이 등록 안 되었을 시
        if (!Object.keys(map).includes(road[i][0].toString())) {
            map[road[i][0]] = {[road[i][1]]: road[i][2]}
        } else {
            // 출발 마을과 도착 마을으로 가는 길이 더 있을 시
            if (map[road[i][0]][road[i][1]] > road[i][2]){
                map[road[i][0]][road[i][1]] = road[i][2]
            } else if (!Object.keys(map[road[i][0]]).includes(road[i][1].toString())) {
                map[road[i][0]][road[i][1]] = road[i][2]
            }
        }

        if (!Object.keys(map).includes(road[i][1].toString())) {
            map[road[i][1]] = {[road[i][0]]: road[i][2]}
        } else {
            // 출발 마을과 도착 마을으로 가는 길이 더 있을 시
            if (map[road[i][1]][road[i][0]] > road[i][2]){
                map[road[i][1]][road[i][0]] = road[i][2]
            } else if (!Object.keys(map[road[i][1]]).includes(road[i][0].toString())) {
                map[road[i][1]][road[i][0]] = road[i][2]
            }
        }
    }
    
    
    let dist = {}
    
    for (let i=1; i<=n; i++) {
        dist[i] = 600000
    }
    dist[1] = 0
    
    let towns = Object.keys(map)

    while (towns.length > 0) {
        let shortest = undefined

        for (let town of towns) {
            if (shortest === undefined) {
                shortest = town
            } else if (dist[town] < dist[shortest]) {
                shortest = town
            }
        }
        
        for (let toTown of Object.keys(map[shortest])) {
            const cost = map[shortest][toTown]

            if (cost + dist[shortest] < dist[toTown]) {
                dist[toTown] = cost + dist[shortest]
            }
        }

        towns.splice(towns.indexOf(shortest),1)
    }


    let answer = 0

    for (let town of Object.keys(dist)) {
        if (dist[town] <= k) answer++
    }

    return answer
}