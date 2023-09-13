function solution(k, tangerine) {
    let tangerines = {}
    let answer = 0

    for (let t of tangerine) {
        if (tangerines[t] === undefined) {
            tangerines[t] = 1
        } else {
            tangerines[t] = tangerines[t] + 1
        }
    }

    let tangerinesSorted = Object.keys(tangerines).sort((a,b) => {return tangerines[b] - tangerines[a]})

    for (let t of tangerinesSorted) {
        k -= tangerines[t]
        answer++

        if (k <= 0) {
            return answer
        }
    }
}
