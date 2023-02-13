function solution(a, b) {
    let denom = b
    while (a!==0 && b!==0) {
        if (a > b) {
            a = a%b
        } else {
            b = b%a
        }
    }
    const gcd = a > b ? a : b

    denom = denom/gcd
    while ((denom%2===0 || denom%5===0) && denom !== 1) {
        if (denom%2===0) denom = denom/2
        else if (denom%5===0) denom = denom/5
    }
    
    return denom===1 ? 1 : 2
}