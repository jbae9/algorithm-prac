function solution(s) {
    var answer = 0;
    const numDic = {"zero":0,
                    "one":1,
                    "two":2,
                    "three":3,
                    "four":4,
                    "five":5,
                    "six":6,
                    "seven":7,
                    "eight":8,
                    "nine":9}
    
    while (s.length > 0) {
        if(isNaN(parseInt(s[0]))) {
            for(let j=0; j<Object.keys(numDic).length; j++){
                if(s.startsWith(Object.keys(numDic)[j])){
                    answer = answer*10 + numDic[Object.keys(numDic)[j]]
                    s = s.replace(Object.keys(numDic)[j],'')
                }
            }
        } else {
            answer = answer*10 + parseInt(s[0])
            s = s.replace(s[0],'')
        }
    }

    return answer;
}