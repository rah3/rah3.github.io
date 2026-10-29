/*
Problem 1.1
===================================================
Produce a table consisting of the names and address-
es of the subscribers and their phone numbers.
 */
SELECT
    s.name, -- subscriber's name
    s.address, -- subscriber's address
    l.area, -- lines' area
    l.office, -- lines' office
    l.number -- lines' number
FROM
    subscribers s
    JOIN lines l ON s.portid = l.portid;

/*
Test Output:
name          address                area  office  number
------------  ---------------------  ----  ------  ------
Mats Sundin   101 Maple Leaf Street  613   712     0024
Jason Allis   202 Blue Jays Way      416   334     0012
Homer Simps   303 Evergreen Street   905   212     0034
Michael Jor   404 United Way         312   121     0023
Ed Belfour    505 Eagle Way          416   334     1024
...
 */