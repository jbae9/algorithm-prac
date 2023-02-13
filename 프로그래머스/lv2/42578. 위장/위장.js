function solution(clothes) {
    let answer = 1
    let ootd = {}
    
    for (outfit of clothes) {
        let [outfitName, outfitType] = outfit
        if (Object.keys(ootd).includes(outfitType)) ootd[outfitType].push(outfitName)
        else ootd[outfitType] = [outfitName]
    }

    const outfitType = Object.keys(ootd)
    for (let i=0; i<outfitType.length; i++) {
        answer *= (ootd[outfitType[i]].length+1)
    }
    
    return answer-1
}