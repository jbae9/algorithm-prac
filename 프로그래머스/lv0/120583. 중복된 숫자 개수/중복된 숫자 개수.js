function solution(array, n) {
    var answer = 0;
    let idx = array.indexOf(n)
    while (idx !== -1){
        answer++
        idx = array.indexOf(n,idx+1)
    }
    
    return answer;
}