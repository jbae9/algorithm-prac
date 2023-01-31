function solution(array, height) {
    var answer = 0;
    array.forEach(elem => {
        if(elem > height) answer++
    })
    return answer;
}