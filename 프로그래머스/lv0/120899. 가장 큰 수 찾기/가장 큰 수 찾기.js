function solution(array) {
    var answer = [[...array].sort((a,b)=>a-b)[array.length-1]];
    answer.push(array.indexOf(answer[0]))
    return answer;
}