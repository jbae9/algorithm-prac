class Solution {
    public String solution(int n, int t, int m, int p) {
        int curDecNum = 0;
        String curBaseNNum = Integer.toString(curDecNum, n);
        StringBuilder answer = new StringBuilder();
        
        for (int i=1; i<=(t-1)*m+p; i++) {
            // 튜브(p) 순서
            if (i%m == p%m) {
                answer.append(curBaseNNum.substring(0,1));
            }
            
            // curBaseNNum에서 첫 숫자 빼기
            // curBaseNNum에서 하나만 남아있으면
            if (curBaseNNum.length() == 1) {
                curDecNum++;
                curBaseNNum = Integer.toString(curDecNum,n);
            } else {
                curBaseNNum = curBaseNNum.substring(1, curBaseNNum.length());
            }                       
        }
        
        return answer.toString().toUpperCase();
    }
}