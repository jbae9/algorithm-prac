function solution(chicken) {
    let ans = 0
    while(chicken >=1) {
        chicken = chicken/10
        ans += chicken
    }

    return Math.floor(ans)
}