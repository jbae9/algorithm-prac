function solution(sides) {
    let [x,y] = sides.sort((a,b)=>a-b)
    var answer = (y-(y-x))+((x+y-1)-y)
    return answer;
}