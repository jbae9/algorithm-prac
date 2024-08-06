SELECT ID, EMAIL, FIRST_NAME, LAST_NAME
FROM DEVELOPERS
WHERE CONVERT(BIN(SKILL_CODE),CHAR) LIKE CONCAT('%',
        REPLACE((SELECT CONVERT(BIN(CODE), CHAR)
        FROM SKILLCODES
        WHERE NAME = 'C#'),'0', '_'))
    OR CONVERT(BIN(SKILL_CODE),CHAR) LIKE CONCAT('%',
        REPLACE((SELECT CONVERT(BIN(CODE), CHAR)
        FROM SKILLCODES
        WHERE NAME = 'Python'),'0', '_'))
ORDER BY ID ASC
