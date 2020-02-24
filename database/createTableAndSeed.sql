DROP TABLE IF EXISTS listings;

CREATE TABLE listings (
  id SERIAL PRIMARY KEY,
  city varchar,
  title varchar,
  hostImage varchar,
  roomInfo varchar,
  numberOfGuests integer,
  numberOfBedrooms integer,
  numberOfBeds integer,
  numberOfBaths integer,
  isSuperhost boolean,
  isGreatLocation boolean,
  isSparklingClean boolean,
  isGreatCheckIn boolean,
  isSelfCheckIn boolean,
  description varchar);

\COPY listings (city, title,hostImage,roomInfo,numberOfGuests,numberOfBedrooms,numberOfBeds,numberOfBaths,isSuperhost,isGreatLocation,isSparklingClean,isGreatCheckIn,isSelfCheckIn, description) FROM '/Users/andychung/Coding/gHRSEA07/wk8/SDC/service-info/database/listingsWithoutIds.csv' DELIMITER ',' CSV
