DELETE
from films
WHERE "rating" != 'G'
RETURNING *
