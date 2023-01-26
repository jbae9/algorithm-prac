var readline = require('readline');

var rl = readline.createInterface({
	input:process.stdin
})

rl.question('', (dice) => {
    [a,b,c] = dice.split(' ')
    a = Number(a)
    b = Number(b)
    c = Number(c)
    
    // 같은 눈 3개일 경우
    if (a===b && b===c && c===a){
        console.log(10000+a*1000)
    } else if (a===b || b===c || c===a){
        if(a===b) console.log(1000+a*100)
        else if(b===c) console.log(1000+b*100)
        else if(c===a) console.log(1000+a*100)
    } else {
        console.log([a,b,c].sort((a,b)=>a-b)[2]*100)
    }
    rl.close()
})