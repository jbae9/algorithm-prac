function calculate (prevNum, currNum, operator) {
    if (operator.codePointAt(0) === 43) {
        return (prevNum + currNum)
    } else {return (prevNum - currNum)}
}

function solution(my_string) {
    let answer = 0
    let strArr = my_string.split(' ')
    for (i=0; i<strArr.length; i=i+2) {
        if (i===0) answer = Number(strArr[i])
        if (i%2===0 && i>0) {
            answer = calculate(answer,Number(strArr[i]),strArr[i-1])
        }
    }
    
    
    return answer
}