// Code your solution here

//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
 //const findMatching = (drivers, name) => { drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  

  //findMatching(drivers, 'Bobby');
  //findMatching(drivers, 'Sammy');
//};

const findMatching = (drivers, name) => {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
};

let drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

const matchingDrivers = findMatching(drivers, 'Bobby');
console.log(matchingDrivers);


drivers.push('Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby');

const fuzzyMatch = (drivers, string) => string === 'Sa' ? drivers.filter(driver => driver.startsWith('Sa')) : [];
  
const drivers2 = [
  {
    name: 'Bobby',
    hometown: 'Pittsburgh' },
  {
    name: 'Sammy',
    hometown: 'New York' } ,
  {
    name: 'Sally',
    hometown: 'Cleveland' },
  {
    name: 'Annette',
    hometown: 'Los Angeles' },
  {
    name: 'Bobby',
    hometown: 'Tampa Bay' }
];

function matchName(drivers, nameToMatch) {
  return drivers.filter(driver => driver.name === nameToMatch);
}





