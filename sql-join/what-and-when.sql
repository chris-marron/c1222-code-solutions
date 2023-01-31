SELECT "releaseYear",
"genres"."name",
"title"
from "genres"
join "filmGenre" using ("genreId")
join "films" using ("filmId")
where "title" = 'Boogie Amelie'
