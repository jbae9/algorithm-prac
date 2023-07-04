function solution(newId) {
    // 1~4단계
    newId = newId.toLowerCase().replace(/[^\da-z._-]/g, '').replace(/\.+/g, '.').replace(/^[.]|[.]$/g, '')
    
    // 5단계
    if (newId.length === 0) newId = newId + 'a'
    
    // 6단계
    if (newId.length > 15) newId = newId.substring(0,15).replace(/[.]$/g, '')
    
    // 7단계
    if (newId.length < 3) newId = newId + newId[newId.length-1].repeat(3-newId.length)
    
    return newId
}
