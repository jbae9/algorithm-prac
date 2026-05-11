import java.util.Set;
import java.util.HashSet;

class Solution {
    public int[] solution(int n, String[] words) {
        int[] answer = {0,0};
        Set<String> wordsSaid = new HashSet<>();
        
        wordsSaid.add(words[0]);
        
        // 전 단어의 마지막 글자
        char prevChar = words[0].charAt(words[0].length()-1);
        
        for(int i=1; i<words.length; i++) {
            // 현재 단어의 첫 글자
            char curChar = words[i].charAt(0);
            
            // 끝말잇기 실패:
            // 1. 마지막 문자로 시작하는 단어가 아님
            // 2. 이전에 등장한 단어임
            // 3. 한 글자임
            if (words[i].length() == 1 || prevChar != curChar || wordsSaid.contains(words[i])) {
                answer[0] = (i%n)+1;
                answer[1] = (i/n)+1;
                return answer;
            }
            
            wordsSaid.add(words[i]);
            prevChar = words[i].charAt(words[i].length()-1);
        }

        return answer;
    }
}