function solution(topping) {
    let answer = 0
    let aToppings = new Map()
    let bToppings = new Set()
    
    for (let t of topping) {
        if (!aToppings.get(t)) {
            aToppings.set(t, 1)
        } else {
            aToppings.set(t, aToppings.get(t)+1)
        }
    }
    
    let a = aToppings.size
    let b = 0
    
    for (let t of topping) {
        if (!bToppings.has(t)) {
            bToppings.add(t)
            b++
        }
        
        if (aToppings.get(t) === 1) {
            aToppings.delete(t)
            a--
        } else {
            aToppings.set(t, aToppings.get(t)-1)
        }
        
        if (a===b) answer++
    }
    
    return answer
}