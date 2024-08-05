function solution(numbers) {
    let answer = new Array(numbers.length).fill(-1)
    let stack = []
    
    for (let i = numbers.length - 1; i >= 0; i--) {
        const num = numbers[i]
        
        // Top of the stack should be greater than current num
        while (stack.length > 0 && stack[stack.length - 1] <= num) {
            stack.pop()
        }
        
        // The top element in the stack is the next greater element
        if (stack.length > 0) {
            answer[i] = stack[stack.length - 1]
        }
        
        // Push current number to the stack
        stack.push(num)
    }
    
    return answer
}