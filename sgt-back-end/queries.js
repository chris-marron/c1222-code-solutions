const doesGradeIdExist = 'SELECT * FROM grades WHERE gradeId = $1';
const UPDATE = 'UPDATE "grades" SET "name" = $2,"course" = $3,"score" = $4 WHERE "gradeId" = $1 RETURNING *';
module.exports = {
  doesGradeIdExist,
  UPDATE
};
