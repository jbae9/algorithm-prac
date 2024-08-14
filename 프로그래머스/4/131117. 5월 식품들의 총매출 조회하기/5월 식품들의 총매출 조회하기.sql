SELECT FO.PRODUCT_ID, PRODUCT_NAME, SUM(AMOUNT*PRICE) AS TOTAL_SALES
FROM FOOD_ORDER FO
INNER JOIN FOOD_PRODUCT FP ON FO.PRODUCT_ID = FP.PRODUCT_ID
WHERE YEAR(PRODUCE_DATE) = '2022'
      AND MONTH(PRODUCE_DATE) = '5'
GROUP BY FO.PRODUCT_ID
ORDER BY TOTAL_SALES DESC, PRODUCT_ID

# SELECT PRODUCT_ID, AMOUNT, PRODUCE_DATE
# FROM FOOD_ORDER
# WHERE YEAR(PRODUCE_DATE) = '2022'
#       AND MONTH(PRODUCE_DATE) = '5'

# SELECT *
# FROM FOOD_PRODUCT