function solution(num, total) {
    var answer = [];
    const startNum = (2*total/num+1-num)/2
    for(let i=startNum; i<startNum+num; i++) {
        answer.push(i)
    }
    return answer;
}