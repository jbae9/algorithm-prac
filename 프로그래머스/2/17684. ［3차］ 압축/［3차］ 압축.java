import java.util.*;

class Solution {
    public int[] solution(String msg) {
        ArrayList<String> list = new ArrayList<>();
        ArrayList<Integer> idxs = new ArrayList<>();
        
        // 사전 초기화
        for (char c='A'; c<='Z'; c++) {
            list.add(String.valueOf(c));
        }
        
        String[] msgArr = msg.split("");
        int i = 0;
        while (i<msgArr.length) {
            int idx = list.indexOf(msgArr[i]);
            int match = 1;
            String word = msgArr[i];
            while(i+match<msgArr.length) {
                word = word + msgArr[i+match];
                if (list.indexOf(word) >= 0) {
                    idx = list.indexOf(word);
                    match++;
                } else{
                    list.add(word);
                    break;
                }
            }
            i += match;
            idxs.add(idx+1);
        }
        
        
        int[] answer = new int[idxs.size()];
        for (int n=0; n<answer.length; n++) {
            answer[n] = idxs.get(n);
        }
        
        return answer;
    }
}