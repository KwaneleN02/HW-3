function myFunction1() {
    var myChoice = document.getElementById("username1").value;
    var myQuestion = document.getElementById("selection");
    console.log(myChoice);
    if(myChoice ==="Mind") {

        document.getElementById("username1").style.display="none";
        document.getElementById("submit1").style.display="none";
        myQuestion.innerHTML = "Welcome Mind! The world of Doom aims to invade the Earth. Those who pass will survive"

        document.getElementById("username2").style.display="block";
        document.getElementById("submit2").style.display="block";
    
    }
     else if(myChoice ==="Invasive") {
        document.getElementById("username1").style.display="none";
        document.getElementById("submit1").style.display="none";
         myQuestion.innerHTML = "Welcome, Invasive! Invade and Destroy"

        document.getElementById("username2").style.display="block";
        document.getElementById("submit2").style.display="block";
     }
     else{
        myQuestion = "invalid answer"
     }
} 

function myFunction2() {
    var planet = document.getElementById("username2").value;
    var myQuestion = document.getElementById("selection");

    if (planet=== "Mars")
    {
        document.getElementById("username2").style.display="none";
        document.getElementById("submit2").style.display="none";
        myQuestion.innerHTML = "Choose Your battleground style! The battlefield has intensified!";

        document.getElementById("username3").style.display="block";
        document.getElementById("submit3").style.display="block";
    }
    else if(planet === "Earth"){
        document.getElementById("username2").style.display="none";
        document.getElementById("submit2").style.display="none";
        myQuestion.innerHTML = "Traitor! You took the easy way out!"

        document.getElementById("username3").style.display="block";
        document.getElementById("submit3").style.display="block";
}

function Battle3() {
}

}
   