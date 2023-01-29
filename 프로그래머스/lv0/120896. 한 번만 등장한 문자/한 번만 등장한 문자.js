function solution(s) {
    var answer = '';
    let arr = s.split('').sort()
    let sObj = {}
    
    for (let i=0; i<arr.length; i++) {
        if (Object.keys(sObj).includes(arr[i])) {
            sObj[arr[i]] = sObj[arr[i]] + 1
        } else {
            sObj[arr[i]] = 1
        }
    }
    Object.keys(sObj).forEach((key) => {
        if (sObj[key] === 1) answer += key
    })
    
    return answer;
}