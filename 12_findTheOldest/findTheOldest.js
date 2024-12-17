const findTheOldest = function(people)  {
    return people.reduce((oldest, person) => {
      const currentYear = new Date().getFullYear(); // 1
      const personAge = (person.yearOfDeath || currentYear) - person.yearOfBirth; // 2
      const oldestAge = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth; // 3
      return personAge > oldestAge ? person : oldest; // 4
    });
  }
  
// теперь можно и поспать
module.exports = findTheOldest;
