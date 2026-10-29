/*
Problem 1.2
===================================================
Produce a table that lists all the area code,
office code combinations  in the database, 
the number of subscribers with that area code 
office code combination
 */
SELECT
    area,
    office,
    COUNT(*) AS num_subscribers
FROM
    lines
GROUP BY
    area,
    office;

/*
Test Output:
area  office  num_subscribers
----  ------  ---------------
312   121     1
416   334     2
613   712     1
905   212     1
...
 */