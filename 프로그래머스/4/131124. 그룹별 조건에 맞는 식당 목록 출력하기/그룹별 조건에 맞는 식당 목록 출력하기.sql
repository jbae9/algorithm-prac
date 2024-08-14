# SELECT MEMBER_ID, COUNT(*) AS REVIEWS
# FROM REST_REVIEW
# GROUP BY MEMBER_ID
# HAVING COUNT(*) = (
#     SELECT MAX(REVIEWS)
#     FROM (SELECT MEMBER_ID, COUNT(*) AS REVIEWS
#         FROM REST_REVIEW
#         GROUP BY MEMBER_ID) A)


SELECT MEMBER_NAME,
       REVIEW_TEXT,
       DATE_FORMAT(REVIEW_DATE,'%Y-%m-%d') AS REVIEW_DATE
FROM REST_REVIEW RR
JOIN MEMBER_PROFILE MP ON RR.MEMBER_ID = MP.MEMBER_ID
WHERE RR.MEMBER_ID IN (
    SELECT MEMBER_ID
    FROM (SELECT MEMBER_ID, COUNT(*) AS REVIEWS
        FROM REST_REVIEW
        GROUP BY MEMBER_ID
        HAVING COUNT(*) = (
            SELECT MAX(REVIEWS)
            FROM (SELECT MEMBER_ID, COUNT(*) AS REVIEWS
                FROM REST_REVIEW
                GROUP BY MEMBER_ID) A)) A)
ORDER BY REVIEW_DATE, REVIEW_TEXT