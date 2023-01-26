var readline = require('readline');

var rl = readline.createInterface({
	input:process.stdin
})

rl.question('', (time) => {rl.question('', (timer) => {
    [h, m] = time.split(' ')
    h = Number(h)
    m = Number(m)
    timer = Number(timer)
    
    if (m+timer < 60){
        m = m+timer
    } else {
        h = h + Math.floor((m+timer)/60) > 23 ?
            h + Math.floor((m+timer)/60) - 24 : h + Math.floor((m+timer)/60)
        m = (m+timer)%60
    }
    console.log(`${h} ${m}`)
})})