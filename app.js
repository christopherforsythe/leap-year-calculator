function checkLeapYear() {

    var year;

    year = document.getElementById("year").value;

    if( (0 == year % 4) && (0 != year % 100) || (0 == year % 400))
    {
        document.getElementById("result").value = "Leap year.";
    }
    else
    {
        document.getElementById("result").value = " Not a leap year.";
    }
}
