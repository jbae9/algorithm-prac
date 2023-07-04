function solution(survey, choices) {
    const types = {R:0, T:0,
                  C:0, F:0,
                  J:0, M:0,
                  A:0, N:0}
    
    for (let i=0; i<choices.length; i++) {
        const choice = choices[i]-4
        if (choice < 0) {
            types[survey[i][0]] = types[survey[i][0]] - choice
        } else if (choice > 0) {
            types[survey[i][1]] = types[survey[i][1]] + choice
        }
    }
    
    let result = ''
    
    if (types.R === types.T || types.R > types.T) {
        result += 'R'
    } else {
        result += 'T'
    }
    
    if (types.C === types.F || types.C > types.F) {
        result += 'C'
    } else {
        result += 'F'
    }
    
    if (types.J === types.M || types.J > types.M) {
        result += 'J'
    } else {
        result += 'M'
    }
    
    if (types.A === types.N || types.A > types.N) {
        result += 'A'
    } else {
        result += 'N'
    }
    
    return result
}