function solution(my_string) {
    var answer = my_string.toLowerCase().split('').sort().reduce((acc,curr) => acc+curr,'');
    return answer;
}