/*
Problem 1.10
====================================================
Produce a table that lists the name of all the 
service-subscribers that subscribe to at least all 
the same services as Jason Allison subscribes to 
but possibly others as well. Jason Allison rents 
the line with portID=2.
 */
SELECT
    s.name
FROM
    subscribers s
WHERE
    NOT EXISTS (
        -- Get all services that Jason Allison (portid 2) has
        SELECT
            ss1.service
        FROM
            service_subscribers ss1
        WHERE
            ss1.portid = 2
        EXCEPT
        -- Subtract all services that the current subscriber (s) has
        SELECT
            ss2.service
        FROM
            service_subscribers ss2
        WHERE
            ss2.portid = s.portid
    );

/*
Test Output:
name
--------------
Jason Allison
Michael Jordan
...
 */