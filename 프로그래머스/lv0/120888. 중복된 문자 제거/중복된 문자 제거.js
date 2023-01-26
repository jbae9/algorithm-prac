function solution(my_string) {
    var answer = '';
    for(s of my_string) {
        if (answer.includes(s) === false) answer += s
    }
    return answer;
}