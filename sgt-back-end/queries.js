const doesGradeIdExist = 'SELECT * FROM "grades" WHERE "gradeId" = $1';
const UPDATE = 'UPDATE "grades" SET "name" = $2,"course" = $3,"score" = $4 WHERE "gradeId" = $1 RETURNING *';
const INSERT = `
  INSERT INTO GRADES (name,course,score)
  VALUES($1,$2,$3)
  `;
const GET = 'SELECT * FROM GRADES';
const DELETE = 'DELETE FROM "grades" WHERE "gradeId" = $1';

module.exports = {
  doesGradeIdExist,
  UPDATE,
  INSERT,
  GET,
  DELETE

};
