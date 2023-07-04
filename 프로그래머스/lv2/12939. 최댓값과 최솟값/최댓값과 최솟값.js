function solution(s) {
    s = s.split(' ').sort((a,b) => a-b)
    
    return s.slice(0,1).concat(s.slice(-1)).join(' ')
}