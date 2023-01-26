function solution(s) {
    var answer = 0;
    s = s.split(' ')
    for (let i=0; i<s.length; i++) {
        if (s[i]==="Z"){
            answer -= Number(s[i-1])
        } else {
            answer += Number(s[i])
        }
    }
    
    return answer;
}