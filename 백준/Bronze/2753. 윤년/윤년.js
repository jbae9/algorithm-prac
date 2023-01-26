var readline = require('readline');

var rl = readline.createInterface({
	input:process.stdin
})

rl.question('', (year) => {
    year = Number(year)
    if ((year%4===0 && year%100!==0) || year%400===0) {
        console.log('1')
    } else {
        console.log('0')
    }
})