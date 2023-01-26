var readline = require('readline');

var rl = readline.createInterface({
	input:process.stdin
})

rl.question('', (str) => {
    [x,y] = str.split(' ')
    x = Number(x)
    y = Number(y)
    if (x>y) {
        console.log('>')
    } else if (x<y) {
        console.log('<')
    } else {
        console.log('==')
    }
})