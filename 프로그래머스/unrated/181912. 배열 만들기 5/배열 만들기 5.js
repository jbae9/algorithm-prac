function solution(intStrs, k, s, l) {
    var answer = [];
    for (let i=0; i<intStrs.length; i++) {
        if (Number(intStrs[i].substring(s,l+s)) > k) {
            answer.push(Number(intStrs[i].substring(s,l+s)))
        }
    }
    
    return answer;
}