function solution(priorities, location) {
    let index = Array.from(priorities.keys())
    let jobs = 0

    while (true) {
        for (let i=0; i<priorities.length; i++) {
            if (priorities.find((e) => e > priorities[0]) !== undefined) {
                priorities.push(priorities.shift())
                index.push(index.shift())
            }
        }
        jobs++
        if (index[0] === location) break
        else {
            priorities.shift()
            index.shift()
        }
    }

    return jobs
}