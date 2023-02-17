function solution(s){
    if (s.length === 1) return false
    
    let temp = []
    for (let i=0; i<s.length; i++) {
        if (s[i] === ')' && temp.length === 0) return false
        else if (s[i]==='(') temp.push(s[i])
        else if (s[i] === ')') temp.pop()
    }

    return temp.length === 0
}