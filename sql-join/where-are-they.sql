SELECT "line1",
"city"."name" as "city",
"district",
"countries"."name" as "country"
from "cities" as "city"
join "addresses" using ("cityId")
JOIN "countries" USING ("countryId")
