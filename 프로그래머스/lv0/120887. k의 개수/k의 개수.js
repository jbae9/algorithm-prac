function solution(i, j, k) {
    var answer = 0;
    k = k.toString()
    for (let n=i; n<=j; n++) {
        let temp = n.toString()
        while (temp.includes(k)) {
            answer++
            temp = temp.replace(k, '')
        }
    }
    return answer;
}