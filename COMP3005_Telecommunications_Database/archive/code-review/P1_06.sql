/*
Problem 1.6
====================================================
Produce a table that lists the most popular service 
(or services). That is, give the name of the service 
that has the most subscribers subscribing to it.
 */
SELECT
    service
FROM
    service_subscribers
GROUP BY
    service
HAVING
    COUNT(*) = (
        SELECT
            MAX(service_count)
        FROM
            (
                SELECT
                    COUNT(*) AS service_count
                FROM
                    service_subscribers
                GROUP BY
                    service
            )
    );

/*
Test Output:
service
-------------------
Message Answer
 */