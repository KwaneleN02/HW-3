  function dark(option) {
    var answer1 = document.getElementById("option1").innerHTML;
    var answer2 = document.getElementById("option2").innerHTML;
    if (option == 1 && answer1 == "Yes") {
        document.getElementById("dark").innerHTML = "Dear you...";
        document.getElementById("option1").innerHTML = "Proceed";
        document.getElementById("option2").innerHTML = "Bummer";

        /*first option*/
    } else if (option == 2 && answer2 == "No") {
        document.getElementById("dark").innerHTML = "You snooze, you lose";
        document.getElementById("option1").innerHTML = "Curiosity is killing me";
        document.getElementById("option2").innerHTML = "What next?";

        /*Dear you (Proceed)*/
    } else if (option == 1 && answer1 == "Proceed") {
        document.getElementById("dark").innerHTML = "I spent mornings of groaning trying to compile and construct, The first line of the journey we began to take, But the journey that was on my mind had no miles, Seeing that, for to my fantasies it had no destination. Can I write you a letter?.";
        document.getElementById("option1").innerHTML = "Continue";
        document.getElementById("option2").innerHTML = "Go back";

        /*dear you (bummer)*/
    } else if (option == 2 && answer2 == "Bummer") {
        document.getElementById("dark").innerHTML = "Embark in the world unknown";
        /*change your mind*/
        document.getElementById("option1").innerHTML = "Take a risk";
        /*Enter the dark world (to quit)*/
        document.getElementById("option2").innerHTML = "Dark World";

        /*if continue*/
    } else if (option == 1 && answer1 == "Continue") {
        document.getElementById("dark").innerHTML = "I imagined the secret ingredients of my heart discovered stolen, I was left sourhearted. My imaginations were doomed like the wind with no precise direction of movement. You were here for a while, If I had to calculate the distance we walked, it wasn't even a mile... But why? When you get some time please do reply, Sincerely, I...";
        document.getElementById("option1").innerHTML = "interesting";
        document.getElementById("option2").innerHTML = "Boring";

        /*Return back from option 1*/
    } else if (option == 1 && answer1 == "interesting") {
        document.getElementById("dark").innerHTML = "Thank you"
        document.getElementById("option1").innerHTML = "Restart";
        document.getElementById("option2").innerHTML = "Not bad";

/*if take a risk, then Restart or quit*/
    } else if (option == 1 && answer1 == "Take a risk") {
        document.getElementById("dark").innerHTML = "Story gets told";
        document.getElementById("option1").innerHTML = "Restart";
        document.getElementById("option2").innerHTML = "Quit";

    /*If curious, then Restart and then story gets told.*/
    } else if (option == 1 && answer1 == "Curiosity is killing me") {
        document.getElementById("dark").innerHTML = "Story gets told";
        document.getElementById("option1").innerHTML = "Restart";
        document.getElementById("option2").innerHTML = "Quit";

    /*If What next? Then Restart*/
    } else if (option == 2 && answer2 == "What next?") {
        document.getElementById("dark").innerHTML = "Story gets told" ;
        document.getElementById("option1").innerHTML = "Restart";
        document.getElementById("option2").innerHTML = "Quit";
    

    /*Go back to the begining*/
} else if (answer1 == "Restart") {
    document.getElementById("dark").innerHTML = "Dear you...";
    document.getElementById("option1").innerHTML = "Proceed";
    document.getElementById("option2").innerHTML = "Bummer";

} else if (answer2 == "Boring", "Go Back", "Not bad") {
    document.getElementById("dark").innerHTML = "Dear you...";
    document.getElementById("option1").innerHTML = "Proceed";
    document.getElementById("option2").innerHTML = "Bummer";
    }
    
}
