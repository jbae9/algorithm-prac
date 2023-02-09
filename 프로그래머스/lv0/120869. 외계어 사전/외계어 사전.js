function solution(spell, dic) {
    var answer = 2;
    let tempCnt = 0
    for (word of dic) {
        for (letter of spell) {
            if (!word.includes(letter)) break
            else tempCnt++
        }
        if (tempCnt === spell.length) return 1
        else tempCnt = 0
    }
    return answer;
}