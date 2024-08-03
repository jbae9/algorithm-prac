function solution(maps) {
    const rows = maps[0].length-1
    const cols = maps.length-1

    // Right, down, left, up directions (x,y)
    const dirs = [[1,0],[0,1],[-1,0],[0,-1]]

    // Use breadth-first search (x,y,steps)
    let queue = [[0,0,1]]

    // Create set to keep track of paths visited
    const visited = new Set([[0,0].toString()])

    while(queue.length > 0) {
        const [x,y,steps] = queue.shift()

        // Check if at finish point
        if (x === rows && y === cols) {
            return steps
        }

        for (const [dx,dy] of dirs) {
            const newX = dx + x
            const newY = dy + y

            if (newX >= 0 && newX <= rows && newY >= 0 && newY <= cols &&
                maps[newY][newX] === 1 && !visited.has([newX, newY].toString())) {
                    queue.push([newX,newY,steps+1])

                    // Add current path to visited
                    visited.add([newX,newY].toString())
                }
        }
    }

    return -1
}
