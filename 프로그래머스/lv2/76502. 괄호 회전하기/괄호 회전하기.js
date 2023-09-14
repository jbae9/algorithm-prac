function solution(s) {
    let answer = 0
    
    for (let i=0; i<s.length-1; i++) {
        let tempArr = s.split('')
        let temp = []

        whileloop: while (tempArr.length > 0) {
            if (tempArr[0] === '[' || tempArr[0] === '(' || tempArr[0] === '{') {
                temp.push(tempArr.shift())
            } else {
                if (tempArr[0] === ']') {
                    if (temp[temp.length-1] === '[') {
                        temp.pop()
                        tempArr.shift()
                    } else {
                        break whileloop
                    }
                }

                else if (tempArr[0] === ')') {
                    if (temp[temp.length-1] === '(') {
                        temp.pop()
                        tempArr.shift()
                    } else {
                        break whileloop
                    }
                }

                else if (tempArr[0] === '}') {
                    if (temp[temp.length-1] === '{') {
                        temp.pop()
                        tempArr.shift()
                    } else {
                        break whileloop
                    }
                }
            }
        }
        if (tempArr.length === 0 && temp.length === 0) answer++

        s = s.slice(1) + s[0]
    }
    
    return answer
}