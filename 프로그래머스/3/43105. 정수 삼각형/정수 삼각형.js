function solution(triangle) {    
    // Start from second to last row
    for (let i=triangle.length-2; i>=0; i--) {
        // Go through elements of row
        for (let j=0; j<triangle[i].length; j++) {
            const cur = triangle[i][j]
            triangle[i][j] = Math.max(cur+triangle[i+1][j], cur+triangle[i+1][j+1])
        }
    }
    
    return triangle[0][0]
}