function solution(n,a,b) {
    let players = Array(n).fill().map((_, index) => index + 1)
    let rounds = 1
    
    while (players.length >= 2) {
        let current = []
        for (let i=0; i<players.length; i=i+2) {
            if ((players[i] === a && players[i+1] === b) || (players[i] === b && players[i+1] === a)) {
                return rounds
            }
            
            if (players[i] !== a && players[i] !== b && players[i+1] !== a && players[i+1] !== b) {
                current.push(players[i])
            } else if (players[i] === a || players[i] === b) {
                current.push(players[i])
            } else if (players[i+1] === a || players[i+1] === b) {
                current.push(players[i+1])
            }
        }
        
        players = current
        rounds++
    }
}