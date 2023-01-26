function solution(array, n) {
    var answer = 0;
    array.forEach(element => {
        if (Math.abs(n-answer)>Math.abs(n-element)) {
            answer = element
        } else if (Math.abs(n-answer)===Math.abs(n-element)) {
            answer = answer < element ? answer : element
        }
    })
    
    return answer;
}