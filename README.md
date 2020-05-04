# Listings Module

> Listing Description module for a short term rental housing app

![](Listings.gif)

## Table of Contents
1. <a href="#how_to_use">How To Use</a>
2. <a href="#requirements">Requirements</a>
3. <a href="#related_projects">Related Projects</a>
## <a id="how_to_use">How To Use</a>
```
# clone this repository
$ git clone https://github.com/hacker-home/Airbnb-info.git

# install dependencies
$ npm install

# generate data
$ npm run generateData

# compile/transpile files with webpack
$ npm run react-dev

# create database in Postgres
$ psql postgres -c "CREATE DATABASE listings_db";

# initialize psql env and create table
$ psql listings_db < ./database/createTableAndSeed.sql;
```

## <a id="requirements">Requirements</a>
* [npm](https://www.npmjs.com/)
* [Node.js](https://nodejs.org/en/download/)
* [Git](https://git-scm.com/)

