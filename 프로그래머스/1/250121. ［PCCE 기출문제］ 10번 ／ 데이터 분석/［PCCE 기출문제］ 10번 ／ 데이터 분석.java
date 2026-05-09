import java.util.*;

class Solution {
    public int[][] solution(int[][] data, String ext, int val_ext, String sort_by) {
        ArrayList<int[]> arrList = new ArrayList<>();
        int extInt = 0;
        int sortInt = 0;
        switch (ext) {
            case("code"):
                extInt = 0;
                break;
            case("date"):
                extInt = 1;
                break;
            case("maximum"):
                extInt = 2;
                break;
            case("remain"):
                extInt = 3;
                break;
        }
        switch (sort_by) {
            case("code"):
                sortInt = 0;
                break;
            case("date"):
                sortInt = 1;
                break;
            case("maximum"):
                sortInt = 2;
                break;
            case("remain"):
                sortInt = 3;
                break;
        }
        
        for (int i=0; i<data.length; i++) {
            if (data[i][extInt] < val_ext) {
                arrList.add(data[i]);
            }
        }
        
        
        final int finalSortInt = sortInt;
        arrList.sort((a,b) -> {
            return Integer.compare(a[finalSortInt], b[finalSortInt]);
        });
        
        
        int[][] answer = new int[arrList.size()][arrList.get(0).length];
        for (int i=0; i<answer.length; i++) {
            answer[i] = arrList.get(i);
        }
        
        return answer;
    }
}