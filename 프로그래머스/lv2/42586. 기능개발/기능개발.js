function solution(progresses, speeds) {
    var answer = [];
    let biggest
    
    for (let i=0; i<progresses.length; i++) {
        let todayRequired = Math.ceil((100-progresses[i])/speeds[i])

        if (biggest === undefined|| todayRequired > biggest) {
            answer.push(1)
            biggest = todayRequired
        }
        else if (biggest >= todayRequired) answer[answer.length-1]++
    }
    
    return answer
}