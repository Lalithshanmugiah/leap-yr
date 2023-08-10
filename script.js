function checkLeapYear(year){
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + 'is leap year');


    }else {
    console.log(year + ' is not a leap year');
    }
}
const year = prompt('enter the year');
console.log(year);