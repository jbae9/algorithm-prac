function solution(array) {
    var answer = 0;
    array.forEach(elem => {
        if(elem.toString().includes('7')) {
            elem.toString().split('').forEach(n => {if(n==='7') answer++})
        }
    })
    return answer;
}