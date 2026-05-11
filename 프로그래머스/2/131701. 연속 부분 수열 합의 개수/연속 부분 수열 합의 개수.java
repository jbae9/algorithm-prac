import java.util.Set;
import java.util.HashSet;

class Solution {
    public int solution(int[] elements) {
        Set<Integer> set = new HashSet<>();
        int len = elements.length;
        
        for(int i=0; i<len; i++) {
            for(int j=0; j<len; j++) {
                int sum = 0;
                sum += elements[j];
                
                // 길이 더하기
                int k=0;
                while(k<i) {
                    k++;
                    sum += elements[(j+k)%len];
                }
                
                set.add(sum);
            }
        }
        
        return set.size();
    }
}