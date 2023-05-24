const peopleNames = require("../country/state/city/index.js");
const getfirstNames = require("../utilities/utils/index.js");

const getPeopleInCity = (peopleNames) => {
  return getfirstNames(peopleNames);
};

module.exports = getPeopleInCity;
