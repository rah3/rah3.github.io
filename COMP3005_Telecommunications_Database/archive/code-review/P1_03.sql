/*
Problem 1.3
===========================================================================
Produce a table that lists the names of the subscribers who originated 
a call to another subscriber on the same switch.
 */
SELECT DISTINCT
    s.name
FROM
    calls c
    JOIN lines l1 ON c.orig = l1.portid -- Verify that originator is a line
    JOIN lines l2 ON c.term = l2.portid -- Verify that terminator is a line
    JOIN subscribers s ON c.orig = s.portid;

-- Get the originator's name
-- ========================================================================
/*
Test Output:
name
------------
Mats Sundin
Jason Allais
Homer Simps
...
 */