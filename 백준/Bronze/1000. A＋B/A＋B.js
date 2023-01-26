var readline = require('readline');

var rl = readline.createInterface({
	input:process.stdin
})

rl.question('', (str) =>
    str.split(' ').reduce((a,b) => console.log(Number(a) + Number(b))))
