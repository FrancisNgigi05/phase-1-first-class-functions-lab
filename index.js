// Code your solution in this file!
const returnFirstTwoDrivers = function (arrayOfDrivers) {
    const first = arrayOfDrivers[0];
    const second = arrayOfDrivers[1];

    return [first, second];
}

const returnLastTwoDrivers = function (arrayOfDrivers) {
    const length = arrayOfDrivers.length;
    const secondLast = arrayOfDrivers[length - 2];
    const last = arrayOfDrivers[length - 1];

    return [secondLast, last];
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return function (fare) {
      return fare * multiplier;
    };
  }

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
  
console.log(fareDoubler(10));
console.log(fareQuintupler(5));

function selectDifferentDrivers (arrayOfDrivers, functionPassed) {
    if (functionPassed === returnFirstTwoDrivers){
        return functionPassed(arrayOfDrivers);
    }
    else {
        return functionPassed(arrayOfDrivers);
    }
}
