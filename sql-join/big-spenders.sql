SELECT "firstName",
"lastName",
"amount",
"customerId"
from "customers"
join "payments" USING ("customerId")
ORDER BY "amount" desc
LIMIT 10;
