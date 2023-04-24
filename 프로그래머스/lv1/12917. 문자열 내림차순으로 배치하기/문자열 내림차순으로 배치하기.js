function solution(s) {
    return s.split('').sort((a,b) => {
        let isALowerCase = true
        let isBLowerCase = true
        if (a !== a.toLowerCase()) {
            isALowerCase = false
        }
        
        if (b !== b.toLowerCase()) {
            isBLowerCase = false
        }
        if ((isALowerCase === true && isBLowerCase=== true) || (isALowerCase === false && isBLowerCase === false)) {
            if (a < b) {
                return 1
            }
            if (a > b) {
                return -1
            }
        }
        
        if (isALowerCase === false) {
            return 1
        }
        
        if (isBLowerCase === false) {
            return -1
        }
        return 0
    }).join('')
}