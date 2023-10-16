function solution(skill, skillTrees) {
    let answer = 0    
    
    for (let tree of skillTrees) {
        let idx = 0
        let valid = true
        for (let t of tree) {
            if (skill.indexOf(t) > -1) {
                if (skill.indexOf(t) === idx) {
                    idx++
                } else {
                    valid = false
                    break
                }
            }
        }

        if (valid) answer++
    }
    
    return answer
}
