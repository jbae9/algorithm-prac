function solution(k, dungeons) {
    let answer = 0
    const stack = []

    stack.push({current: [], remaining: dungeons})

    while (stack.length > 0) {
        const {current, remaining} = stack.pop()

        // If permutation complete
        if (remaining.length === 0) {
            let stamina = k
            let dungeonsCompleted = 0
            for (let dungeon of current) {
                const [staminaReq, staminaSpent] = dungeon
                if (stamina >= staminaReq) {
                    stamina -= staminaSpent
                    dungeonsCompleted++
                }
            }
            if (dungeonsCompleted > answer) answer = dungeonsCompleted
            if (answer === dungeons.length) return answer
        } else {
            // Create permutation
            for (let i=0; i< remaining.length; i++) {
                const newCurrent = current.concat([remaining[i]])
                const newRemaining = remaining.slice(0,i).concat(remaining.slice(i+1))
                stack.push({current:newCurrent, remaining: newRemaining})
            }
        }
    }
    
    return answer
}