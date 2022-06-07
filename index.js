// Code your solution in this file!
const returnFirstTwoDrivers = function (cabDrivers) {
    return cabDrivers.slice(0, 2);
  };
  
  const returnLastTwoDrivers = function (cabDrivers) {
    return cabDrivers.slice(-2);
  };
  
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  const createFareMultiplier = function (timesValue) {
    return function (value) {
      return timesValue * value;
    };
  };
  
  const fareDoubler = createFareMultiplier(2);
  
  const fareTripler = createFareMultiplier(3);
  
  const selectDifferentDrivers = function (cabDrivers, driversToReturn) {
    return driversToReturn(cabDrivers);
  };