var readline = require('readline');

var rl = readline.createInterface({
	input:process.stdin
})

rl.question('', (str) => console.log(`${str}??!`))