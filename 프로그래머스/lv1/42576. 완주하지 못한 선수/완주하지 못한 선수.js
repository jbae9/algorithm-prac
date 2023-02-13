function solution(participant, completion) {
    participant.sort()
    completion.sort()
    let idx = 0
    while(participant[idx] === completion[idx]) {
        idx++
    }
    
    return participant[idx];
}