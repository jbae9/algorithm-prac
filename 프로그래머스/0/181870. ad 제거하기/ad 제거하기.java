import java.util.ArrayList;
import java.util.Arrays;

class Solution {
    public String[] solution(String[] strArr) {
        ArrayList<String> strList = new ArrayList<>();
        for(String s : strArr) {
            if (!s.contains("ad")) {
                strList.add(s);   
            }
        }
                
        String[] answer = new String[strList.size()];
        answer = strList.toArray(answer);
        return answer;
    }
}