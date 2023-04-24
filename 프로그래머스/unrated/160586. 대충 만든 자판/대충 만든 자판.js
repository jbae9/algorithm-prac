function solution(keymap, targets) {
    const keys = {}

    for (let i=0; i<keymap.length; i++) {
        for (let j=0; j<keymap[i].length; j++) {
            const key = keymap[i][j]
            if (keys[key] === undefined) {
                keys[key] = keymap[i].indexOf(key)+1
            } else {
                if (keys[key] > keymap[i].indexOf(key)+1) {
                    keys[key] = keymap[i].indexOf(key)+1
                }
            }
        }
    }

    const answer = []
    for (let i=0; i<targets.length; i++) {
        let count = 0
        for (let j=0; j<targets[i].length; j++) {
            const key = targets[i][j]
            if (keys[key] === undefined) {
                count = -1
                j = targets[i].length
            } else {
                count += keys[key]
            }
        }
        answer[i] = count
        count = 0
    }

    return answer
}