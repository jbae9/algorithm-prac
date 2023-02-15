function solution(numlist, n) {
    numlist.sort(function sortFn(a,b) {
        if (Math.abs(n-a)<Math.abs(n-b)) return -1
        else if (Math.abs(n-a)>Math.abs(n-b)) return 1
        else if ((Math.abs(n-a)===Math.abs(n-b)) && a>b) return -1
        else if ((Math.abs(n-a)===Math.abs(n-b)) && a<b) return 1
        else return 0
    })
    return numlist
}