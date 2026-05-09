class Solution {
    public int[] solution(String myString) {
        String[] splitStr = myString.split("x",-1);
        int[] answer = new int[splitStr.length];
        for (int i=0; i<answer.length; i++) {
            answer[i] = splitStr[i].length();
        }
        return answer;
    }
}