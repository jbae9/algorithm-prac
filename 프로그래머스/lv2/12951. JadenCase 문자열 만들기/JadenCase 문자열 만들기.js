function solution(s) {
    return s.split(' ').map(str => str ? str[0].toUpperCase() + str.substring(1).toLowerCase() : '').join(' ')
}