const faker = require('faker');
const fs = require('fs');

const titleRandom = ['Perfectly located', 'Light & spacious garden flat', 'Private Modern Guesthouse', 'Ocean View Hideaway', 'Perfect Haven by Golden Gate', 'Private Backyard Cottage', 'Sunny Room Heart of', 'Luxury Gold Coast', 'Central Surfers Studio OceanView', 'Broken Head Bodhi Treehouse', 'Mountain tiny house', 'Blue Mountains Cottage', 'The Copa Cabana', 'The Tree House', 'Stroll Around Victoria Park', 'Entire Home with Opera House views', 'Luxury Apartment in the heart of', 'Stylish inner-city home', 'Little Paradise', 'Stunning River View'];

const roomInfoRandom = ['Private room', 'Entire guesthouse', 'Entire guestsuite', 'Entire House'];

function booleanGenerator() {
  return Math.random() > 0.5;
}

function generateListing() {
  const titleRandomArray = titleRandom[Math.floor(Math.random() * titleRandom.length)];
  const roomInfoRandomArray = roomInfoRandom[Math.floor(Math.random() * roomInfoRandom.length)];
  const hostImage = Math.floor(Math.random() * 30) + 1;
  function numberOfGuests() {
    if (roomInfoRandomArray === 'Private room') {
      return 2;
    }
    return 6;
  }

  function numberOfBedrooms() {
    if (roomInfoRandomArray === 'Private room') {
      return 1;
    }
    return Math.floor(Math.random() * (5 - 2)) + 2;
  }

  function numberOfBeds() {
    if (roomInfoRandomArray === 'private room') {
      return 1;
    }
    return Math.floor(Math.random() * (5 - 2)) + 2;
  }

  function numberOfBaths() {
    if (roomInfoRandomArray === 'private room') {
      return 1;
    }
    return Math.floor(Math.random() * (4 - 2)) + 2;
  }
  const bedrooms = numberOfBedrooms();
  const city = faker.address.city();
  const listing = {
    // listing_id: i,
    city,
    title: `${titleRandomArray} ${city}`,
    hostImage: `https://s3-us-west-1.amazonaws.com/airbnb-host-photos/host${hostImage}.jpg`,
    roomInfo: roomInfoRandomArray,
    numberOfGuests: numberOfGuests(),
    numberOfBedrooms: bedrooms,
    numberOfBeds: numberOfBeds(),
    numberOfBaths: numberOfBaths(),
    isSuperhost: booleanGenerator(),
    isGreatLocation: booleanGenerator(),
    isSparklingClean: booleanGenerator(),
    isGreatCheckIn: booleanGenerator(),
    isSelfCheckIn: booleanGenerator(),
    description: faker.lorem.paragraph(4),
  };
  return listing;
}

const createCsvRow = (idx) => {
  const listing = generateListing(idx);
  const keys = Object.keys(listing);
  const resultsArr = [];
  // loop through keys and push the values into an array which will be joined and comma separated
  keys.forEach(key => resultsArr.push(listing[key]));
  return `${resultsArr.join(',')}\n`;
};

// const createCsvHeader = () => {
//   const listing = generateListing();
//   const keys = Object.keys(listing);
//   const resultsArr = [];
//   // loop through keys and push the values into an array which will be joined and comma separated
//   keys.forEach(key => resultsArr.push(key));
//   return `${resultsArr.join(',')}\n`;
// };

const writeToFileCsv = (writer, callback) => {
  const start = Date.now();
  let i = -1;
  function write() {
    let ok = true;
    while (i < 9999999 && ok) {
      i += 1;
      if (i === 9999999) {
        // Last time!
        writer.write(createCsvRow(), callback(start));
      } else {
        ok = writer.write(createCsvRow());
      }
      // else if (i === -1) {
      //   ok = writer.write(createCsvHeader());
      // }
    }
    if (i < 9999999) {
      writer.once('drain', write);
    }
  }
  write();
};

writeToFileCsv(fs.createWriteStream('./database/listingsWithoutIds.csv'), (time) => {
  const seconds = (Date.now() - time) / 1000;
  const min = Math.floor(seconds / 60);
  const sec = Math.round(seconds % 60);
  console.log('FINISHED WRITING DATA');
  console.log(`${min} minutes, ${sec} seconds`);
});
