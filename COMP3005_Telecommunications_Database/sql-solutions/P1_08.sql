/*
Problem 1.8
====================================================
Write an SQL query to find if the line with phone 
number (613) 712-0024 is currently available because 
its channel is IDLE. Select the portid, directory 
number, and channel state.
 */
SELECT
    l.portid,
    '(' || l.areacode || ') ' || l.officecode || '-' || l.stationcode AS directory_number,
    c.state
FROM
    lines l
    JOIN channels c ON l.portid = c.portid
WHERE
    l.areacode = '613'
    AND l.officecode = '712'
    AND l.stationcode = '0024';

/*
Test Output:
portid  directory_number  state
------  ----------------  -----
24      (613) 712-0024    BUSY
 */