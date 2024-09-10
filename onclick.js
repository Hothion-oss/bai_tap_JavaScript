function myFunction() {
    var number = document.getElementById("nhap").value;
    var greeting;
    if (number == 0) {
        greeting = "Bạn dược 0 điểm";
        document.getElementById("demo").style.color = "red";
    } else if (number > 0) {
        greeting = "đó là số dương"
        document.getElementById("demo").style.color = "green";
    } else {
        greeting = "Đay là số âm"
        document.getElementById("demo").style.color = "gray";
    }
    document.getElementById("demo").innerHTML = greeting;

}