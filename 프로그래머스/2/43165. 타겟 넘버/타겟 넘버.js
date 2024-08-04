function solution(numbers, target) {
    let answer = 0

    function recursive(sum, idx) {
        if (idx === numbers.length) {
            if (sum === target) {
                answer++
            }
            return
        }

        const num = numbers[idx]

        recursive(sum+num, idx+1)
        recursive(sum-num, idx+1)
    }

    recursive(numbers[0],1)
    recursive(-numbers[0],1)
    
    return answer
}