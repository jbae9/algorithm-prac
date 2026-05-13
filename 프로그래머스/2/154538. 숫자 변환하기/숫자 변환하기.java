import java.util.Queue;
import java.util.LinkedList;
import java.util.HashSet;
import java.util.Set;

class Solution {
    public int solution(int x, int y, int n) {
        int answer = -1;
        Queue<int[]> q = new LinkedList<int[]>();
        Set<Integer> visited = new HashSet<>();
        int[] init = {x,0};
        q.add(init);
        
        while(q.size() != 0) {
            int cur = q.peek()[0];
            int step = q.poll()[1];
            
            // cur이 visited에 있으면 스킵
            if (visited.contains(cur)) {
                continue;
            } else {
                visited.add(cur);
            }
            
            if (cur == y) {
                // 연산 횟수 1이면 최소
                if (step == 1) return 1;
                
                if (answer == -1) answer = step;
                else if (step < answer) answer = step;
                continue;
            }
            
            if (cur*3 <= y){
                int[] next = {cur*3, step+1};
                q.add(next);   
            }
            if (cur*2 <=y) {
                int[] next = {cur*2, step+1};
                q.add(next);
            }
            if (cur+n <= y) {
                int[] next = {cur+n, step+1};
                q.add(next);
            }
        }
        
        return answer;
    }
}