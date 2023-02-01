const pg = require('pg');
const port = 3000;
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});
const express = require('express');
const app = express();
const ok = require('./queries');
app.use(express.json());

app.get('/api/grades', (req, res) => {

  db.query(ok.GET)
    .then(results => {
      const all = results.rows;
      res.status(200).json(all);
    })
    .catch(error => {
      console.error(error);
      res.status(500).send(error);
    });
});
app.get('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({ error: 'grade id must be a positive integer' });
  }
  db.query(ok.doesGradeIdExist, [gradeId])
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with gradeId ${gradeId}`
        });
      } else {
        res.json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured.'
      });
    });
});
app.post('/api/grades', (req, res) => {
  const { name, course, score } = req.body;
  const nums = Number(score);
  if (!course || !name || !nums || nums < 0 || nums > 100) {
    res.status(400).send({ error: 'missing name or course, or score. posibbly not score is not a number between 0 -100' });
    return;
  }
  if (!Number.isInteger(nums)) {
    res.status(400).send({ error: `invalid score ${score}` });
    return;
  }

  db.query(ok.INSERT, [name, course, score])
    .then(result => {
      res.status(201).send(req.body);
    })
    .catch(error => {
      console.error(error);
      res.status(500).send(error);
    });

});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({ error: 'grade id must be a positive integer' });
  }
  db.query(ok.DELETE, [gradeId])
    .then(result => {
      const grade = result.rowCount;
      if (grade === 0) {
        res.status(404).send({ error: `${gradeId} does not exist` });
      } else {
        res.sendStatus(204);
      }
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'An unexpected error occured' });
    });
});
app.put('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({ error: 'grade id must be a positive integer' });
  }
  const { name, course, score } = req.body;

  if (!name || !course || !score) {
    res.status(400).json({ error: 'invalid name,course, or score' });
  }

  db.query(ok.UPDATE, [gradeId, name, course, score])
    .then(result => {
      const grade = result.rows.length;
      if (grade === 0) {
        res.status(404).json({ error: `cannot find grade with gradeId ${gradeId}` });
      } else {
        res.sendStatus(200);
      }
    })
    .catch(error => {
      console.error(error);
      res.status(500).send(error);
    });
});
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${port}!`);
});
