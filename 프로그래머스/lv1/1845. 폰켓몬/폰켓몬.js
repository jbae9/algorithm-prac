function solution(nums) {
    var answer = 0;
    let pokedex = {}
    for (n of nums) {
        if (Object.keys(pokedex).includes(n.toString()) === false) {
            pokedex[n] = 0
        } else {
            pokedex[n] = pokedex[n] + 1
        }
    }
    answer = nums.length/2 < Object.keys(pokedex).length ? nums.length/2 : Object.keys(pokedex).length
    
    return answer;
}