function solution(wallpaper) {
    let answer = [undefined,undefined,undefined,undefined];
    for (let i=0; i<wallpaper.length; i++) {
        if (wallpaper[i].includes('#')) {
            const lux = i
            const luy = wallpaper[i].indexOf('#')

            const rdx = i+1
            let rdy = wallpaper[i].indexOf('#')
            while (wallpaper[i].indexOf('#', rdy+1) !== -1) {
                rdy = wallpaper[i].indexOf('#', rdy+1)
            }
            rdy++
            
            if (answer[0] === undefined || answer[0] > lux) answer[0] = lux
            
            if (answer[1] === undefined || answer[1] > luy) answer[1] = luy
            
            if (answer[2] === undefined || answer[2] < rdx) answer[2] = rdx
            
            if (answer[3] === undefined || answer[3] < rdy) answer[3] = rdy
        }
    }
    return answer
}