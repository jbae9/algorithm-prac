var readline = require('readline');

var rl = readline.createInterface({
	input:process.stdin
})

rl.question('', (str) => {
    let inputArr = str.split(' ')
    const originalCnt = [1, 1, 2, 2, 2, 8]
    let ans = ''
    for (let i=0; i<inputArr.length; i++) {
        ans += (originalCnt[i] - inputArr[i])
        ans += i === inputArr.length-1 ? '' : ' '
    }
    console.log(ans)
})