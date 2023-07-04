function solution(board, moves) {
    let result = 0
    let basket = []
    const rows = board.length
    
    for (let i=0; i<moves.length; i++) {
        const col = moves[i]-1
        for (let j=0; j<rows; j++) {
            if (board[j][col] !== 0) {
                const char = board[j][col]
                if (char === basket[basket.length-1]) {
                    basket.pop()
                    result += 2
                } else {
                    basket.push(char)
                }
                board[j][col] = 0
                break
            }
        }
    }
    
    return result
}