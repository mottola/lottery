function chooseNumbers() {
    var arr = [];
    for (var i = 0; i < 10, i++) {
        arr.push(prompt("Choose number" + (i + 1)));
        //        if (i != range(1, 10)) {
        //            alert("You must enter a number between 1 and 10");
        //        } 
    }
}
var userNumbers = document.getElementById('ticketButton');
userNumbers.addEventListener('click', chooseNumbers, false);