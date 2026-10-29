/*
Problem 1.7
====================================================
Write an SQL query that will produce in one table a 
list of all the acceptable trunks that can be used 
to route a call to (416) 334-XXXX. List the trunks 
in the order of preference: (416,334), then (416,000), 
and finally (000,000).
 */
SELECT
    t.portid,
    t.foreign_switch
FROM
    trunks t
    JOIN trunk_routes tr ON t.portid = tr.portid
WHERE
    (
        tr.area = '416'
        AND tr.office = '334'
    )
    OR (
        tr.area = '416'
        AND tr.office = '000'
    )
    OR (
        tr.area = '000'
        AND tr.office = '000'
    )
GROUP BY
    t.portid,
    t.foreign_switch
ORDER BY
    MIN(
        CASE
            WHEN tr.area = '416'
            AND tr.office = '334' THEN 1
            WHEN tr.area = '416'
            AND tr.office = '000' THEN 2
            WHEN tr.area = '000'
            AND tr.office = '000' THEN 3
        END
    ) ASC;

/*
Test Output:
portid  foreign_switch
------  --------------
101     ORLEANS
102     RIDEAU
106     BAY
...
 */