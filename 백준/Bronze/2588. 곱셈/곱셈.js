var readline = require('readline');

var rl = readline.createInterface({
	input:process.stdin
})

rl.question('', (x) => {rl.question('', (y) => {
    x = Number(x)
    console.log(x*Number(y[2]))
    console.log(x*Number(y[1]))
    console.log(x*Number(y[0]))
    console.log(x*Number(y))
    rl.close()
})})