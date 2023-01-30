function solution(num, k) {
    var answer = num.toString().includes(k.toString()) ? num.toString().indexOf(k.toString()) + 1 : -1
    return answer;
}