SELECT "firstName",
"lastName",
sum("p"."amount") as "amount"
from "customers" as "c"
JOIN "payments" as "p" USING ("customerId")
JOIN "rentals" as "r" USING ("rentalId")
GROUP BY "c"."customerId"
ORDER BY "amount" DESC
