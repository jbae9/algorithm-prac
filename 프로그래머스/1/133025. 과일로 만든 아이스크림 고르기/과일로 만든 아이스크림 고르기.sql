-- 코드를 입력하세요
SELECT I.FLAVOR
FROM ICECREAM_INFO I
LEFT JOIN FIRST_HALF F ON I.FLAVOR = F.FLAVOR
WHERE INGREDIENT_TYPE = 'fruit_based' AND TOTAL_ORDER > 3000
ORDER BY TOTAL_ORDER DESC