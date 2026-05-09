class Solution {
    public int[] solution(int[] num_list, int n) {
        int[] dest = new int[num_list.length-n+1];
        System.arraycopy(num_list, n-1, dest, 0, num_list.length-n+1);
        return dest;
    }
}