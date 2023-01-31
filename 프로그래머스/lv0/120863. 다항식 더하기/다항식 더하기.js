function solution(polynomial) {
    var answer = '';
    let b = 0
    let c = 0
    polynomial = polynomial.split(' ')
    for (elem of polynomial) {
        if (elem.includes('x')) {
            if (elem.split('x')[0].length === 0) {
                b++
            } else {
                b += parseInt(elem.split('x')[0])
            }
        } else if (!isNaN(parseInt(elem))) {
            c += parseInt(elem)
        }
    }
    
    if (b>0 && c>0) {
        answer = b===1 ? `x + ${c}` : `${b}x + ${c}`
    } else if (b>0 && c===0) {
        answer = b===1 ? `x` : `${b}x`
    } else if (b===0 && c>0) {
        answer = `${c}`
    }
    
    return answer
}