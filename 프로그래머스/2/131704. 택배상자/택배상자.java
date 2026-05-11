import java.util.Queue;
import java.util.LinkedList;
import java.util.Stack;

class Solution {
    public int solution(int[] order) {
        int answer = 0;
        Queue<Integer> mainBelt = new LinkedList<>();
        Stack<Integer> subBelt = new Stack<>();
        
        // 메인 벨트 초기화
        for (int i=1; i<=order.length; i++){
            mainBelt.add(i);
        }
        
        for (int n:order) {
            // 메인 벨트에서 뺄 수 있는지 확인
            if (mainBelt.size() > 0 && mainBelt.peek() == n) {
                mainBelt.remove();
                answer++;
            } else if (subBelt.size() > 0 && subBelt.peek() == n) {
                // 서브 벨트에서 뺄 수 있는지 확인
                subBelt.pop();
                answer++;
            } else {
                // 못하면 서브 벨트로 옮기기
                while (mainBelt.peek() != n) {
                    if (mainBelt.size() == 1) break;
                    int head = mainBelt.remove();
                    subBelt.push(head);   
                }
                
                // 옮긴 후 메인과 서브 벨트 확인
                if (mainBelt.peek() == n) {
                    mainBelt.remove();
                    answer++;
                } else if (subBelt.peek() == n) {
                    subBelt.pop();
                    answer++;
                } else{
                    return answer;
                }
            }
        }
        return answer;
    }
}