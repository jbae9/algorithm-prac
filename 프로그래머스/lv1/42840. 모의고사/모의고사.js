function solution(answers) {
    let guesses = [[1, 2, 3, 4, 5],
                  [2, 1, 2, 3, 2, 4, 2, 5],
                  [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]]
    let scores = [0,0,0]
    
    for (let i=0; i<answers.length; i++) {
        if (answers[i] === guesses[0][i%guesses[0].length]) scores[0] = scores[0]+1
        
        if (answers[i] === guesses[1][i%guesses[1].length]) scores[1] = scores[1]+1
        
        if (answers[i] === guesses[2][i%guesses[2].length]) scores[2] = scores[2]+1
    }

    
    return scores.reduce((acc, cur, index) => {
        if (cur === Math.max(...scores)) acc.push(index+1)
        
        return acc
    }, [])
}