SELECT APNT_NO, PT_NAME, A.PT_NO, A.MCDP_CD, DR_NAME, APNT_YMD
FROM APPOINTMENT A
JOIN PATIENT P ON A.PT_NO = P.PT_NO
JOIN DOCTOR D ON A.MDDR_ID = D.DR_ID
WHERE DATE(APNT_YMD) = '2022-04-13'
    AND APNT_CNCL_YN = 'N'
ORDER BY APNT_YMD