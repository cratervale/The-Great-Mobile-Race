divID="";
winnerCount=-1;
done=false;

firstWinner=false;
secondWinner=false;
thirdWinner=false;
firstWinnerName=-99;
secondWinnerName=-99;
thirdWinnerName=-99;

mobilesLocation = "./mobiles/"

mobiles = [
    {
        name: "Balloon",
        file: "balloon.jpg"
    },
    {
        name: "Broom",
        file: "broom.jpg"
    },
    {
        name: "Car",
        file: "car.jpg"
    },
    {
        name: "Horse",
        file: "horse.jpg"
    },
    {
        name: "Unicycle",
        file: "unicycle.jpg"
    },
    {
        name: "Unieagle",
        file: "unieagle.jpg"
    },
    {
        name: "Uniphant",
        file: "uniphant.jpg"
    }
];


function buildTrack (number){
    numberOfRacers = number;
    readyTrack = "";
    divHeight = ($(window).height()/numberOfRacers)*.85;
    for(i = 0; i < numberOfRacers; ++i){
        readyTrack+="<div id=\"" + i + "\"style=\"height:" + divHeight + "\"><img class=\"" + i + "\" style=\"height:" + divHeight + "\" src=\"balloon.png\"></div><br />";
    }
    $("#raceTrack").html(readyTrack);
    divID=numberOfRacers;
    $(document).ready(function(){
        animate();
    });
}

function animate(){
    randomNumber = Math.floor((divID)*Math.random());
    if( firstWinner == true && secondWinner == true && thirdWinner == true ){
        doneDone();
    }
    else if(done==true){
        doneDone();
    }
    else{
        if (randomNumber==firstWinnerName || randomNumber==secondWinnerName){
            animate();
        }
        else{
            if($("." + randomNumber).offset().left >= $("#raceTrack").width()){
            winnerCount++;
        }
    $("."+randomNumber).animate({left: "+=50px"}, 150);
    $("."+randomNumber).animate({top:"-=4px"},150).animate({top:"+=4px"},150,

    function(){
            if(winnerCount == 0  && firstWinnerName == -99){
                firstWinnerName = randomNumber;
                firstWinner = true;
                $("#"+randomNumber).css("background-color", "yellow");
                $("#"+randomNumber).html("<h1>First Place!</h1>");
                if (divID==1){
                    done=true;
                    dump("done is true");
                }
            }
            if(winnerCount == 1&& secondWinnerName==-99){

                secondWinnerName = randomNumber;
                secondWinner = true;
                $("#"+randomNumber).css("background-color", "orange");
                $("#"+randomNumber).html("<h1>Second Place!</h1>");
                if (divID==2){
                    done=true;
                }
            }
            if(winnerCount == 2&&thirdWinnerName==-99){

                thirdWinnerName = randomNumber;
                thirdWinner = true;
                $("#"+randomNumber).css("background-color", "tan");
                $("#"+randomNumber).html("<h1>Third Place!</h1>");
                if (divID==3){
                    done=true;
                }
            }
            animate();
            });
        }
    }
}

function doneDone(){
            $(function () {
                $("#raceTrack").append("<a href=\"race.html\"><div id=\"alert\">Race Again?</div></a>");
		$("#alert").show();
		$("#alert").animate({height: '75px'}, 750);
            });
}

$(document).ready(function(){
    $("#gogo").click(function(event){
       if($("#numberOfRaceThings").val() > 0){
       buildTrack($("#numberOfRaceThings").val());
       }
    });
});