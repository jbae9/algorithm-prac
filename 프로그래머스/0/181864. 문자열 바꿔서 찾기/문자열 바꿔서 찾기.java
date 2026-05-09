

class Solution {
    public int solution(String myString, String pat) {
        String newString = myString.replace('B','C').replace('A','B').replace('C','A');
        return newString.contains(pat) ? 1 : 0;
    }
}