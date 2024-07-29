var year = 2001;


if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
  console.log("Year is Leap Year");
} 

else {
  console.log("Year is not Leap year");
}
