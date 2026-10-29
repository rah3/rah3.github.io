/*
Problem 1.9
====================================================
List all acceptable trunks to route a call to (416) 
334-XXXX that have at least one 'IDLE' channel. 
Order by preference: (416,334), (416,000), (000,000).
 */
SELECT DISTINCT
    t.portid,
    t.foreign_switch
FROM
    trunks t
    JOIN trunk_routes tr ON t.portid = tr.portid
    JOIN channels c ON t.portid = c.portid
WHERE
    (
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
    )
    AND c.state = 'IDLE'
ORDER BY
    CASE
        WHEN tr.area = '416'
        AND tr.office = '334' THEN 1
        WHEN tr.area = '416'
        AND tr.office = '000' THEN 2
        ELSE 3
    END ASC;

/*
Test Output:
portid  foreign_switch
------  --------------
106     BAY
102     RIDEAU
...
 */