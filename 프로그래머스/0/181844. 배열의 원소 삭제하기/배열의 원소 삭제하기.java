import java.util.*;

class Solution {
    public int[] solution(int[] arr, int[] delete_list) {
        ArrayList<Integer> answer = new ArrayList<>();
        ArrayList<Integer> delete_arrList = new ArrayList<>();
        for (int n:delete_list) delete_arrList.add(n);
        
        for (int i=0; i<arr.length; i++) {
            if (delete_arrList.indexOf(arr[i]) <0) {
                answer.add(arr[i]);
            }
        }
        
        int[] arrAnswer = new int[answer.size()];
        int size = 0;
        for (int n:answer) arrAnswer[size++] = n;
        return arrAnswer;
    }
}