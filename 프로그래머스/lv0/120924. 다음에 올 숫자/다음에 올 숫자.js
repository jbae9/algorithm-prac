function solution(common) {
    if (common[1]/common[0] === common[common.length-1]/common[common.length-2]) {
        const multiple = common[1]/common[0]
        return common[common.length-1] * multiple
    } else {
        const diff = common[1] - common[0]
        return common[common.length-1] + diff
    }
}