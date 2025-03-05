// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  }
  
  // Example usage:
  const fareDoubler = createFareMultiplier(2);  // Creates a function that doubles the fare
  console.log(fareDoubler(10));  // Outputs: 20
  
  const fareTripler = createFareMultiplier(3);  // Creates a function that triples the fare
  console.log(fareTripler(10));  // Outputs: 30
  
  const fareQuadrupler = createFareMultiplier(4);  // Creates a function that quadruples the fare
  console.log(fareQuadrupler(10));  // Outputs: 40
  
 
function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  }
  
  console.log(fareDoubler(10)); 
  

function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  }
  
  function selectDifferentDrivers(drivers) {
    return drivers.slice(0, 2);
  }
  
  // Function to return the last two drivers
  function selectDifferentDrivers(drivers) {
    return drivers.slice(-2);
  }
  
  // Main function that selects either the first two or the last two drivers
  function selectDifferentDrivers(drivers, returnDriversFunction) {
    return returnDriversFunction(drivers);
  }
  
