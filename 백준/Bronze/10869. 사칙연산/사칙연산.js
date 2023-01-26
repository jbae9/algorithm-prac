var readline = require('readline');

var rl = readline.createInterface({
	input:process.stdin
})

rl.question('', (str) =>
    str.split(' ').reduce((a,b) =>
    {console.log(Number(a) + Number(b))
    console.log(Number(a) - Number(b))
    console.log(Number(a) * Number(b))
    console.log(Math.floor(Number(a) / Number(b)))
    console.log(Number(a) % Number(b))}))