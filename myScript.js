/* 
Name: Sam Grant
Class: CPSC 322
Assignment: HW 6
Modified from: https://codepen.io/cathydutton/pen/GBcvo
Last Modified: 11-19-22 
*/

$(document).ready(function() {
    var seconds = 00;
    var tens = 00;

    var $appendTens = $("#tens");
    var $appendSeconds = $("#seconds");
    var $buttonStart = $("#button-start")
    var $buttonStop = $("#button-stop")
    var $buttonReset = $("#button-reset")
    var $timerParagraph = $("#timer")

    var interval;
    var animationInterval;

    $buttonStart.click(function() {  
        clearInterval(interval);
        interval = setInterval(startTimer, 10);

        // sets Interval for animation
        animationInterval = setInterval(animateTimer, 10);

        // changes background color to green
        $timerParagraph.css("background-color", "lightgreen");
    });
    
    $buttonStop.click(function() {  
        clearInterval(interval);

        // stops animation and resets opacity
        clearInterval(animationInterval);
        $timerParagraph.stop(true, true)
        $timerParagraph.css("opacity", "1");

        // only changes color when timer is not 00:00
        if(tens == "00" && seconds== "00"){
        }
        else{
            $timerParagraph.css("background-color", "rgb(228,74,75)");
        }
    });

    $buttonReset.click(function() {  
        clearInterval(interval);

        // stops animation and resets opacity
        clearInterval(animationInterval);
        $timerParagraph.stop(true, true)
        $timerParagraph.css("opacity", "1");

        // resets timer text
        tens = "00";
        seconds = "00";
        $appendTens.html(tens);
        $appendSeconds.html(seconds);

        // changes background color back to light blue
        $timerParagraph.css("background-color", "rgb(171,213,238)");
    });

    // adds class for timer
    $timerParagraph.addClass("timer-background");

    // adds class for all timer buttons
    $buttonStart.addClass("timer-button");
    $buttonStop.addClass("timer-button");
    $buttonReset.addClass("timer-button");

    function startTimer() {
        tens++;

        if (tens < 9) {
            $appendTens.html("0" + tens)
        }

        if (tens > 9) {
            $appendTens.html(tens)
        }

        if (tens > 99) {
            console.log("seconds");
            seconds++;
            $appendSeconds.html("0" + seconds)
            tens = 0;
            $appendTens.html("0" + 0)
        }

        if (seconds > 9) {
            $appendSeconds.html(seconds)
        }
    }

    function animateTimer() {
        $timerParagraph.fadeTo(300,0.8);
        $timerParagraph.fadeTo(300,1.0);
    }

    // styling
    $("body").css({
        "justify-content": "center",
        "align-items": "center",
        "background-color": "rgb(107,171,220)",
        "display": "flex",
        "flex-direction": "column",
    });
    $(".wrapper").css({
        "background-image": "url(snowman.jpg)",
        "width": "600px",
        "height": "450px",
        "border-style": "solid",
        "border-color": "red",
    });
    $(".timer-background").css({
        "background-color": "rgb(171,213,238)",
        "width": "200px",
        "height": "60px",
        "position": "relative",
        "left": "100px",
        "top": "-10px",
        "color": "white",
        "text-align": "center",
        "font-size": "300%",
        "font-style": "oblique",
        "font-weight": "bold",
        "border-style": "solid",
        "border-color": "black",
        "border-radius": "8px",
    });
    $(".timer-button").css({
        "background-color": "rgb(228,74,75)",
        "width": "75px",
        "height": "40px",
        "position": "relative",
        "color": "white",
        "font-style": "oblique",
        "font-size": "large",
        "text-align": "center",
        "border-radius": "8px",
        "padding": "5px",
        "margin": "5px",
    });
    $("#button-start").css({
        "left": "155px",
        "top": "-30px",
    });
    $("#button-stop").css({
        "left": "65px",
        "top": "23px",
    });
    $("#button-reset").css({
        "left": "-23px",
        "top": "75px",
    });
    $("#title").css({
        "width": "300px",
        "background-color": "rgb(107,171,220)",
        "position": "relative",
        "left": "75px",
        "top": "10px",
        "color": "white",
        "font-style": "oblique",
        "text-shadow": "2px 2px 1px rgb(228,74,75)",
    });
});