function solution(my_str, n) {
    var answer = [];
    let startIdx = 0
    let endIdx = n
    while(startIdx<=my_str.length-1) {
        answer.push(my_str.slice(startIdx,endIdx))
        startIdx += n
        endIdx = endIdx + n > my_str.length ? my_str.length : endIdx + n
    }
    
    return answer;
}