function solution(players, callings) {
    let names = {}

    // Create object of players and their initial standings
    for (let idx in players) {
        names[players[idx]] = Number(idx)
    }

    // Adjust rankings
    for (let curName of callings) {
        const curIdx = names[curName]
        const prevName = players[curIdx-1]

        players[curIdx-1] = curName
        players[curIdx] = prevName

        names[curName] = names[curName] -1
        names[prevName] = curIdx
    }
    
    return players
}
