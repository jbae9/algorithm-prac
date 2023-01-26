var readline = require('readline');

var rl = readline.createInterface({
	input:process.stdin
})

rl.question('', (x) => {rl.question('', (y) => {
    x = Number(x)
    y = Number(y)
    if (x>0) {
        if(y>0){
            console.log('1')
        } else {
            console.log('4')
        }
    } else if (x<0) {
        if(y>0){
            console.log('2')
        } else {
            console.log('3')
        }
    }
})})