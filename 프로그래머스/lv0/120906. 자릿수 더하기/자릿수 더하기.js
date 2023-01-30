function solution(n) {
    var answer = 0
    n.toString().split('').forEach((elem) => answer += Number(elem));
    return answer;
}