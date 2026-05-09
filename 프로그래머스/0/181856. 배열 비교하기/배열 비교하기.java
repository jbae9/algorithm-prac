class Solution {
    public int solution(int[] arr1, int[] arr2) {
        if (arr1.length > arr2.length) {
            return 1;
        } else if (arr1.length < arr2.length) {
            return -1;
        } else {
            int arr1Sum = 0;
            int arr2Sum = 0;
            for (int i : arr1) arr1Sum += i;
            for (int i : arr2) arr2Sum += i;
            
            if (arr1Sum == arr2Sum) return 0;
            return (arr1Sum > arr2Sum) ? 1 : -1;
        }
    }
}