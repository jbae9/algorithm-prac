var readline = require('readline');

var rl = readline.createInterface({
	input:process.stdin
})

rl.question('', (str) => {
    const grade = Number(str)
    if (grade>=90 && grade<=100) {
        console.log('A')
    } else if (grade>=80 && grade<=89) {
        console.log('B')
    } else if (grade>=70 && grade<=79) {
        console.log('C')
    } else if (grade>=60 && grade<=69) {
        console.log('D')
    } else {
        console.log('F')
    }
})