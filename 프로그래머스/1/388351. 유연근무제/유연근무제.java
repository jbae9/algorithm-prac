class Solution {
    public int solution(int[] schedules, int[][] timelogs, int startday) {
        int answer = 0;
        for (int i=0; i<timelogs.length; i++) {
            Boolean safe = true;
            int day = startday;
            
            // 희망시간 계산
            int arriveBy = 0;
            if (schedules[i] % 100 >= 50) {
                // arriveBy = (시+1)*100 + (분+10)%10
                arriveBy = ((schedules[i]/100 + 1)*100) + ((schedules[i]%100)+10)%10;
            } else arriveBy = schedules[i]+10;
            
            for (int j=0; j<timelogs[i].length; j++) {
                // 일요일이 넘었으면
                if (day > 7) day -=7;
                // 주말이면 continue
                if (day == 6 || day == 7) {
                    day++;
                    continue;
                }
                
                // 제시간에 출근 안했으면 break
                if (timelogs[i][j] > arriveBy) {
                    safe = false;
                    break;
                }

                day++;
            }
            if(safe) answer++;
        }
        
        return answer;
    }
}