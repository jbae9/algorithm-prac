import java.lang.Math;

class Solution {
    public int solution(int n, int k) {
        String baseN = Integer.toString(n, k);
        
        int answer = 0;
        String[] testNumbers = baseN.split("0+");
        for (String s:testNumbers) {
            long curInt = Long.parseLong(s);
            
            if (isPrime(curInt)) answer++;
        }
               
        return answer;
    }
    
    public Boolean isPrime (long n) {
        if (n<=1) return false;
        if (n==2) return true;
        if (n%2==0) return false;
        
        for (int i=2; i<=Math.sqrt(n); i++) {
            if (n%i==0) return false;
        }
        return true;
    }
}