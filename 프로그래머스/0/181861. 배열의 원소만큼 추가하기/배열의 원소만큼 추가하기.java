import java.util.*;

class Solution {
    public int[] solution(int[] arr) {
        ArrayList<Integer> arrList = new ArrayList<>();
        for (int i=0; i<arr.length; i++) {
            for (int j=0; j<arr[i]; j++) {
                arrList.add(arr[i]);
            }
        }
        int[] result = arrList.stream().mapToInt(i -> i).toArray();
        return result;
    }
}