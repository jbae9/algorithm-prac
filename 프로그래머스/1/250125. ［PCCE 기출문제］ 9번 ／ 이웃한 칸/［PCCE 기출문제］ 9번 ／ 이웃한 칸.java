class Solution {
    public int solution(String[][] board, int h, int w) {
        int answer = 0;
        String color = board[h][w];
        
        // Up
        if (h>0 && color.equals(board[h-1][w])) {
            answer++;
        }
        // Down
        if (h<board.length-1 && color.equals(board[h+1][w])) {
            answer++;
        }
        // Right
        if (w<board[0].length-1 && color.equals(board[h][w+1])) {
            answer++;
        }
        // Left
        if (w>0 && color.equals(board[h][w-1])) {
            answer++;
        }
        
        return answer;
    }
}