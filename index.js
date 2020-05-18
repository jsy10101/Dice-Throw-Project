var counterLimit = prompt("Please enter the number of matches to be played");
var player1 = prompt("Player 1 name");
var player2 = prompt("Player 2 name");
document.querySelector(".player-1").innerHTML = player1;
document.querySelector(".player-2").innerHTML = player2;
document.querySelector("td.player-1").innerHTML = player1;
document.querySelector("td.player-2").innerHTML = player2;
var cntr1 = 0;
var cntr2 = 0;

function myFunction() {
    document.querySelector("button").innerHTML = "Toss Again";
    function iTS(ranNum,ID) {

        var temp =document.querySelector("#" + ID).classList;
        temp.remove(temp[1]);

        switch(ranNum) {
            case 1:
                temp.add("fa-dice-one");
            break;
            case 2:
                temp.add("fa-dice-two");
            break;
            case 3:
                temp.add("fa-dice-three");
            break;
            case 4:
                temp.add("fa-dice-four");
            break;
            case 5:
                temp.add("fa-dice-five");
            break;
            case 6:
                temp.add("fa-dice-six");
            break;
        }
    }

    var randomNumber1 = Math.ceil(Math.random() * 6);
    var randomNumber2 = Math.ceil(Math.random() * 6);

    iTS(randomNumber1, "p1");
    iTS(randomNumber2, "p2");


    if((cntr1 < counterLimit) && (cntr2 < counterLimit)) {
        if(randomNumber1 > randomNumber2) {
            document.querySelector("h1").innerHTML = "WINNER: " + player1;
            document.querySelector(".cntr1").innerHTML = ++cntr1;
        }
        else if(randomNumber1 < randomNumber2) {
            document.querySelector("h1").innerHTML = "WINNER: " + player2;
            document.querySelector(".cntr2").innerHTML = ++cntr2;
        }
        else {
            document.querySelector("h1").innerHTML = "T I E";
        }
    }
    else {
        var celebrationAudio = new Audio("sounds/yee-jadu-mimic.mp3");
        celebrationAudio.play();

        if(cntr1 > cntr2) {
            document.querySelector(".row1").classList.add("bg-danger");
            document.querySelector("h1").innerHTML = "Champion of the best of " + counterLimit + " dice throw tournament<br>"+ player1.toUpperCase();
        }
        else {
            document.querySelector(".row2").classList.add("bg-danger");
            document.querySelector("h1").innerHTML = "Champion of the best of " + counterLimit + " dice throw tournament<br>" + player2.toUpperCase();
        }

        document.querySelector("button").innerHTML = "Refresh to play AGAIN!";
        document.querySelector("button").setAttribute("onClick", "window.location.reload()");   //add '/' at function end
    }
}

function buttonClickSound() {
    var audio = new Audio("sounds/clickSound2.mp3");
    audio.play();
}
