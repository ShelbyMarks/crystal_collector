

var totalscore = 0;
var wins = 0;
var losses = 0;

$(document).ready(function () {
    //defining seperate randomized number values for each diamondd
    var diamondnum1 = Math.floor(Math.random() * 12) + 1;
    console.log("this is# " + diamondnum1);
    var diamondnum2 = Math.floor(Math.random() * 12) + 1;
    console.log("this is# " + diamondnum2);
    var diamondnum3 = Math.floor(Math.random() * 12) + 1;
    console.log("this is# " + diamondnum3);
    var diamondnum4 = Math.floor(Math.random() * 12) + 1;
    console.log("this is# " + diamondnum4);
    $('.Score').text(totalscore);

    //generating a random number that needs to be matched
    var randomnumber = Math.floor(Math.random() * 120) + 19;
    console.log(randomnumber);
    document.querySelector("#Value").innerHTML = randomnumber;

    //Push number assigned to each diamond into a total score
    document.querySelector("#Score").innerHTML = totalscore;
    $("#Diamond1").on("click", diamond1s)
    function diamond1s() {
        console.log("diamond-1 clicked" + diamondnum1);
        totalscore += diamondnum1 ;
        console.log(totalscore);
        $('.Score').text(totalscore);
        return totalscore;
    }
    
    if (totalscore > randomnumber) {
        losses++;
        alert("You lost, loser!");
        //defining seperate randomized number values for each diamondd
        var diamondnum1 = Math.floor(Math.random() * 12) + 1;
        console.log("this is# " + diamondnum1);
        var diamondnum2 = Math.floor(Math.random() * 12) + 1;
        console.log("this is# " + diamondnum2);
        var diamondnum3 = Math.floor(Math.random() * 12) + 1;
        console.log("this is# " + diamondnum3);
        var diamondnum4 = Math.floor(Math.random() * 12) + 1;
        console.log("this is# " + diamondnum4);

        //generating a random number that needs to be matched
    }
    else {
            wins++;
            //defining seperate randomized number values for each diamondd
            var diamondnum1 = Math.floor(Math.random() * 12) + 1;
            console.log("this is# " + diamondnum1);
            var diamondnum2 = Math.floor(Math.random() * 12) + 1;
            console.log("this is# " + diamondnum2);
            var diamondnum3 = Math.floor(Math.random() * 12) + 1;
            console.log("this is# " + diamondnum3);
            var diamondnum4 = Math.floor(Math.random() * 12) + 1;
            console.log("this is# " + diamondnum4);

            //generating a random number that needs to be matched
            var randomnumber = Math.floor(Math.random() * 120) + 19;
            console.log(randomnumber);
            document.querySelector("#Value").innerHTML = randomnumber;

            //Push number assigned to each diamond into a total score
            document.querySelector("#Score").innerHTML = totalscore;
        };
    });
