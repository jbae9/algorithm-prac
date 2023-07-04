function solution(sizes) {
    let w = sizes[0][0] >= sizes[0][1] ? sizes[0][0] : sizes[0][1]
    let h = sizes[0][0] <= sizes[0][1] ? sizes[0][0] : sizes[0][1]
    
    for (let i=1; i<sizes.length; i++) {
        if (sizes[i][0] >= sizes[i][1]) {
            if (w < sizes[i][0]) w = sizes[i][0]
            if (h < sizes[i][1]) h = sizes[i][1]
        }
        
        if (sizes[i][1] >= sizes[i][0]) {
            if (w < sizes[i][1]) w = sizes[i][1]
            if (h < sizes[i][0]) h = sizes[i][0]
        }
    }
    
    return w*h
}