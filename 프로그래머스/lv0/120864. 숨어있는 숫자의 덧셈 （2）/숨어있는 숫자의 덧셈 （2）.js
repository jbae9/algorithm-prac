function solution(my_string) {
    var answer = 0;
    let tempNumStr = ''
    
    for(let i=0; i<my_string.length; i++) {
        if (!isNaN(parseInt(my_string[i]))) {
            tempNumStr += my_string[i]
        } 
        
        if ((isNaN(parseInt(my_string[i])) && tempNumStr.length > 0) || (i === my_string.length-1 && tempNumStr.length > 0)) {
            answer += Number(tempNumStr)
            tempNumStr = ''
        }
    }
    
    return answer;
}