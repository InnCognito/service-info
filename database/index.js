const { Pool } = require('pg');
const path = require('path');

const connectionString = 'postgres://localhost:5432/listings_db';

const pool = new Pool(
  {
    connectionString,
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
      console.log(`RESULT FOUND FOR LISTING ID ${id}! RETURNING RESULT...`);
      res.status(200).send(results.rows[0]);
    }
  });
};

const seedTable = () => {
  console.log('INITIALIZING SEED...');
  pool.query(`COPY listings (
    city,
    title,
    hostImage,
    roomInfo,
    numberOfGuests,
    numberOfBedrooms,
    numberOfBeds,
    numberOfBaths,
    isSuperhost,
    isGreatLocation,
    isSparklingClean,
    isGreatCheckIn,
    isSelfCheckIn,
    description
    ) FROM '${path.join(__dirname, './listingsWithoutIds.csv')}' DELIMITER ',' CSV`, (err) => {
    if (err) {
      console.log(`ERROR SEEDING DATABASE: ${err}`);
    } else {
      console.log('SUCCESSFULLY SEEDED DATABASE');
    }
  });
};

module.exports = {
  getListing,
  seedTable,
};
