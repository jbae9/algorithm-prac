class Solution {
    public int[] solution(int[] arr, int n) {
        int bool = 1-(arr.length % 2);
        for (int i=0+bool; i<arr.length; i+=2) {
            arr[i] += n;
        }
        return arr;
    }
}