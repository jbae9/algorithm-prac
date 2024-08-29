SELECT U.USER_ID, NICKNAME,
    CONCAT(CITY, ' ', STREET_ADDRESS1, ' ', STREET_ADDRESS2) AS 전체주소,
    CONCAT(SUBSTRING(TLNO,1,3), '-',
          SUBSTRING(TLNO,4,4), '-',
          SUBSTRING(TLNO,8,4)) AS 전화번호
FROM USED_GOODS_USER U
JOIN USED_GOODS_BOARD B ON U.USER_ID = B.WRITER_ID
GROUP BY U.USER_ID
HAVING COUNT(U.USER_ID) >= 3
ORDER BY USER_ID DESC