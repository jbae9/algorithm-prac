import java.util.Map;
import java.util.HashMap;
import java.util.ArrayList;

class Solution {
    public String[] solution(String[] record) {
        // uidName Map: key uid, value name
        Map<String, String> uidName = new HashMap<>();
        ArrayList<String> answerList = new ArrayList<>();
        
        // Parse record for names
        for (int i=0; i<record.length; i++){
            String[] msg = record[i].split(" ");
            if (msg[0].equals("Enter") || msg[0].equals("Change")) {
                uidName.put(msg[1], msg[2]);
            }
        }

        // Parse record again for messages
        for (int i=0; i<record.length; i++) {
            String[] msg = record[i].split(" ");
            String action = msg[0];
            String uid = msg[1];
            String name = uidName.get(uid);
            
            if (action.equals("Enter")) {
                answerList.add(String.format("%s님이 들어왔습니다.", name));
            } else if (action.equals("Leave")) {
                answerList.add(String.format("%s님이 나갔습니다.", name));
            }
        }
        
        String[] answer = new String[answerList.size()];
        for (int i=0; i<answerList.size(); i++) {
            answer[i] = answerList.get(i);
        }
        
        return answer;
    }
}