function calculateMyAge(birthYear: number) {
  let currentYear = new Date();
  let myAge = currentYear.getFullYear() - birthYear;
  console.log(myAge);
}

function compareAges(myAge:number,yourAge:number)
{
    let ageDifference = myAge - yourAge;
    return console.log(ageDifference);
}

calculateMyAge(1993);
compareAges(32,26);
