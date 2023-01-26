var readline = require('readline');

var rl = readline.createInterface({
	input:process.stdin
})

rl.question('', (n) => {
    n = Number(n)
    for (let i=1; i<=9; i++){
        console.log(`${n} * ${i} = ${n*i}`)
    }
})