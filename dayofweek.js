function myFunction() {
    var day = parseInt(document.getElementById("nhap").value);
    var today;
    switch (day) {
        case 1:
            today = "Monday"
            break;
        case 2:
            today = "Tuesday"
            break;
        case 3:
            today = "Wenesday"
            break;
        case 4:
            today = "Thurday"
            break;
        case 5:
            today = "Friday"
            break;
        case 5:
            today = "Saturday"
            break;
        case 6:
            today = "Sunday"
        default:
            today = "Invalid"
        
        
    }
    document.getElementById("demo").innerHTML = today;
}