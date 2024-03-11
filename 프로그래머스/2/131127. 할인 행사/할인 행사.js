function solution(want, number, discount) {
    let days = 0
    
    for (let i=0; i<discount.length; i++) {
        let tempNum = [...number]

        for (let j=0; j<10; j++) {
            if (i+j<discount.length && want.includes(discount[i+j]) && tempNum[want.indexOf(discount[i+j])] > 0) {
                tempNum[want.indexOf(discount[i+j])] = tempNum[want.indexOf(discount[i+j])]-1
            }
        }

        if (tempNum.reduce((acc, cur) => acc+cur) === 0) {
            days++
        }
    }

    return days
}
