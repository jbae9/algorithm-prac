SELECT CAR_ID, ROUND(AVERAGE_DURATION,1) AS AVERAGE_DURATION
FROM (SELECT *, AVG(DATEDIFF(END_DATE, START_DATE)+1) AS AVERAGE_DURATION
    FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY
    GROUP BY CAR_ID) AS A
WHERE AVERAGE_DURATION >= 7
ORDER BY AVERAGE_DURATION DESC, CAR_ID DESC

# SELECT CAR_ID, ROUND(AVG(DATEDIFF(END_DATE, START_DATE)+1),1) AS AVERAGE_DURATION
# FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY
# GROUP BY CAR_ID
# HAVING AVERAGE_DURATION >= 7
# ORDER BY AVERAGE_DURATION DESC, CAR_ID DESC