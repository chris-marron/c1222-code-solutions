SELECT "b"."name" as "country",
  count("c".*) as "totalCities"
from "cities" as c
join "countries" as b USING ("countryId")
group by "b"."countryId"
