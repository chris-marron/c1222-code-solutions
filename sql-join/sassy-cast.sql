SELECT "firstName",
"lastName"
from "actors"
JOIN "castMembers" USING ("actorId")
JOIN "films" USING ("filmId")
where "title" = 'Jersey Sassy';
