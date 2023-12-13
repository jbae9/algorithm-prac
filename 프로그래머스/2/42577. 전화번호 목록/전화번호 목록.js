function solution(phoneBook) {
    phoneBook = phoneBook.sort()
    
    for (let i=0; i<phoneBook.length-1; i++) {
        if (phoneBook[i].slice(0,phoneBook[i+1].length).includes(phoneBook[i+1]) || phoneBook[i+1].slice(0,phoneBook[i].length).includes(phoneBook[i])) return false
    }
    
    return true
}