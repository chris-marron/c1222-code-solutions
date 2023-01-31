SELECT "g"."name" ,
count("g".*) as "amountOfFilms"

from "genres" as "g"
JOIN "filmGenre" as "f" USING ("genreId")
JOIN "films" as "fm" USING ("filmId")
JOIN "castMembers" USING ("filmId")
JOIN "actors" USING ("actorId")
where "actors"."firstName" = 'Lisa' and "actors"."lastName" = 'Monroe'
GROUP BY "g"."genreId"
