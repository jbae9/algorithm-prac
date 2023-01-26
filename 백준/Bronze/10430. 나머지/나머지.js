var readline = require('readline');

var rl = readline.createInterface({
	input:process.stdin
})

rl.question('', (str) => {
    [A,B,C] = str.split(' ')
    A = Number(A)
    B = Number(B)
    C = Number(C)
    console.log((A+B)%C)
    console.log(((A%C) + (B%C))%C)
    console.log((A*B)%C)
    console.log(((A%C) * (B%C))%C)
})