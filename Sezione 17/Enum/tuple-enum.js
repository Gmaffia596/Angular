function isWorkingDay(day) {
    if (day === 7 /* SUN */ || day === 6 /* SAT */) {
        return true;
    }
    return false;
}
//console.log(isWorkingDay(DAYS.SUN))
//console.log(isWorkingDay(3))
var myDay = 8;
//console.log(isWorkingDay(999))
//console.log(DAYS[1])
