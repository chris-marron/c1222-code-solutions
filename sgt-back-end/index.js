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

app.get('/api/grades', (req, res, next) => {

  const info = 'SELECT * FROM GRADES';
  db.query(info)
    .then(results => {
      const all = results.rows;
      res.status(200).json(all);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

app.post('/api/grades', (req, res) => {
  const { course, name, score } = req.body;
  if (!course || !name || !score || score < 0 || score > 100) {
    res.status(400).semd({ error: 'missing name or course, or score. posibbly not score is not a number between 0 -100' });
  }
  const sql = `
  INSERT INTO GRADES (course,name,score)
  VALUES($1,$2,$3)
  `;
  db.query(sql, [course, name, score])
    .then(result => {
      res.status(201).send(req.body);
    })
    .catch(error => {
      res.status(500).send(error);
    });

});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = req.params.gradeId;
  const sql = 'DELETE FROM "grades" WHERE "gradeId" = $1';
  db.query(ok.doesGradeIdExist, [gradeId], results => {
    if (!gradeId) {
      res.status(404).send('test');
    }
    db.query(sql, [gradeId])
      .then(result => {
        res.sendStatus(204);
      })
      .catch(error => {
        console.error(error);
        res.status(500).json({ error: 'An unexpected error occured' });
      });
  });
});
app.put('/api/grades/:gradeId', (req, res) => {
  const { name, course, score } = req.body;
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId)) {
    res.status(400).json({
      error:
        'invalid ID'
    });
  }
  if (name === undefined || course === undefined || score === undefined) {
    res.status(400).json({ error: 'invalid name,course, or score' });
  }

  db.query(ok.UPDATE, [gradeId, name, course, score])
    .then(result => {
      res.status(200).send('ok');
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
