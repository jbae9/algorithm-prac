class Solution {
    public int solution(String binomial) {
        String[] splitStr = binomial.split(" ");
        int int1 = Integer.parseInt(splitStr[0]);
        int int2 = Integer.parseInt(splitStr[2]);
        switch (splitStr[1]) {
            case "+":
                return int1+int2;
            case "-":
                return int1-int2;
            case "*":
                return int1*int2;
        }
        return 0;
    }
}