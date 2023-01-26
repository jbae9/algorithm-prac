var readline = require('readline');

var rl = readline.createInterface({
	input:process.stdin
})

rl.question('', (x) => {
    [h,m] = x.split(' ')
    h = Number(h)
    m = Number(m)
    if (m-45>=0) {
        m = m-45
    } else {
        m = 60+m-45
        h = h-1<0 ? 24+h-1 : h-1
    }
    console.log(`${h} ${m}`)
})