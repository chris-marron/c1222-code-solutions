const GET_GRADE = 'SELECT * FROM "grades" WHERE "gradeId" = $1';
const UPDATE_GRADE = 'UPDATE "grades" SET "name" = $2,"course" = $3,"score" = $4 WHERE "gradeId" = $1 RETURNING *';
const INSERT_GRADE = `
  INSERT INTO GRADES (name,course,score)
  VALUES($1,$2,$3)
  RETURNING *
  `;
const GET_ALL_GRADES = 'SELECT * FROM GRADES';
const DELETE_GRADE = 'DELETE FROM "grades" WHERE "gradeId" = $1';

module.exports = {
  GET_GRADE,
  UPDATE_GRADE,
  INSERT_GRADE,
  GET_ALL_GRADES,
  DELETE_GRADE

};
