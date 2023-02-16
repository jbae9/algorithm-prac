function solution(before, after) {
    for (letter of before) {
        if (after.includes(letter)) {
            after = after.replace(letter,'')
        }
    }
    
    return after.length === 0 ? 1 : 0
}