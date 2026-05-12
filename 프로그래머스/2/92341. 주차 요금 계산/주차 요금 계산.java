import java.util.Map;
import java.util.HashMap;
import java.time.Duration;
import java.time.LocalTime;

class Solution {
    public int[] solution(int[] fees, String[] records) {
        // cars map:
        // key: car number, value: [accumulated time, last in/out, last recorded time]
        Map<String, String[]> cars = new HashMap<String, String[]>();
        
        // Parse records
        for (String s:records) {
            // record = [time, car num, IN/OUT]
            String[] record = s.split(" ");
            String time = record[0];
            String carNum = record[1];
            String inOrOut = record[2];
            
            // 차 번호가 기록 안 되었으면
            if (cars.get(carNum) == null) {
                String[] value = {"", inOrOut, time};
                cars.put(carNum, value);
            } else {
                // 나가는 차일 때
                if (inOrOut.equals("OUT")) {
                    LocalTime lastTime = LocalTime.parse(cars.get(carNum)[2]);
                    LocalTime currentTime = LocalTime.parse(time);
                    Duration timeElapsed = Duration.between(lastTime, currentTime);
                    // 누적 시간 업데이트
                    if (cars.get(carNum)[0].equals("")) {
                        cars.get(carNum)[0] = Long.toString(timeElapsed.toMinutes());
                    } else {
                        cars.get(carNum)[0] = Long.toString(Long.parseLong(cars.get(carNum)[0]) + timeElapsed.toMinutes());
                    }

                    // OUT으로 업데이트
                    cars.get(carNum)[1] = "OUT";

                } else {
                    // 다시 들어오는 차일 때
                    cars.get(carNum)[1] = inOrOut;
                    cars.get(carNum)[2] = time;
                }
                
            }
            
            
        }
        
        // Sort car numbers
        String[] sortedCarNumbers = cars.keySet().stream().sorted().toArray(String[]::new);
        int[] answer = new int[sortedCarNumbers.length];

        // Calculate fees
        int idx = 0;
        for (String s:sortedCarNumbers) {
            // OUT이 아닌 차는 23:59에 나간 것으로 간주
            if (cars.get(s)[1].equals("IN")) {
                LocalTime lastTime = LocalTime.parse(cars.get(s)[2]);
                LocalTime currentTime = LocalTime.parse("23:59");
                Duration timeElapsed = Duration.between(lastTime, currentTime);

                // 누적 시간 업데이트
                if (cars.get(s)[0].equals("")) {
                    cars.get(s)[0] = Long.toString(timeElapsed.toMinutes());
                } else {
                    cars.get(s)[0] = Long.toString(Long.parseLong(cars.get(s)[0]) + timeElapsed.toMinutes());
                }
            }
            
            // 요금 계산
            int timeSpent = Integer.parseInt(cars.get(s)[0]);

            // 기본 시간을 초과 했는지 확인
            if (timeSpent > fees[0]) {
                timeSpent -= fees[0];
                answer[idx] = fees[1] + (int)Math.ceil((double)timeSpent/fees[2]) * fees[3];
            } else {
                answer[idx] = fees[1];
            }
            idx++;
        }
        return answer;
    }
}