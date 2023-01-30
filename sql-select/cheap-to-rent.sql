SELECT "filmId",
"title"
from "films"
where "rentalRate" < 1
order by "filmId"
limit 50;
