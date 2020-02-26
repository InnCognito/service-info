const { Pool } = require('pg');

const pool = new Pool(
  {
    host: '44.231.247.5',
    database: 'listings_db',
    user: 'postgres',
    password: 'schoolhouserock',
    port: 5432,
  },
);

pool.on('connect', () => {
  console.log('SUCCESSFULLY CONNECTED TO DB');
});

const getListing = (req, res) => {
  const { id } = req.params;
  pool.query(`SELECT * FROM listings WHERE id = ${id}`, (err, results) => {
    if (err) {
      console.log(`ERROR QUERYING DATABASE: ${err}`);
      res.status(400).send(err);
    } else if (!results.rows[0]) {
      console.log('ERROR; LISTING NOT FOUND!');
      res.sendStatus(404);
    } else {
      // console.log(`RESULT FOUND FOR LISTING ID ${id}! RETURNING RESULT...`);
      res.status(200).send(results.rows[0]);
    }
  });
};

module.exports = {
  getListing,
};
