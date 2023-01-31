SELECT "line1",
"city"."name",
"district",
"countries"."name" as "country"
from "cities" as "city"
join "addresses" using ("cityId")
JOIN "countries" USING ("countryId")
