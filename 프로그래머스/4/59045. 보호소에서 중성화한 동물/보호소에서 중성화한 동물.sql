SELECT AO.ANIMAL_ID, AO.ANIMAL_TYPE, AO.NAME
FROM ANIMAL_OUTS AO
JOIN (SELECT *
    FROM ANIMAL_INS
    WHERE SEX_UPON_INTAKE NOT LIKE 'Spayed%'
        AND SEX_UPON_INTAKE NOT LIKE 'Neutered%') AS AI ON AO.ANIMAL_ID = AI.ANIMAL_ID
WHERE SEX_UPON_OUTCOME LIKE 'Spayed%'
    OR SEX_UPON_OUTCOME LIKE 'Neutered%'
ORDER BY ANIMAL_ID