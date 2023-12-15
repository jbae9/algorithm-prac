function solution(a, b) {
    const date = new Date(`2016-${a}-${b}`)
    const day = date.getDay()
    
    const dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU','FRI', 'SAT']
    
    return dayNames[day]
}