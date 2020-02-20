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