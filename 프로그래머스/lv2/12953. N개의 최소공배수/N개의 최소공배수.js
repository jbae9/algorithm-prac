function GCD (a, b) {
    let t = 0
    while (b!==0) {
        t = b
        b = a%b
        a = t
    }
    return a
}


function solution(arr) {
    let gcd = GCD(arr[0], arr[1])
    let product = arr[0] * arr[1]
    let lcm = product/gcd
    
    for (let i=2; i<arr.length; i++) {
        gcd = GCD(lcm, arr[i])
        product = lcm * arr[i]
        lcm = product/gcd
    }
    
    return lcm
}