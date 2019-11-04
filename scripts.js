let declineButton = document.getElementById("decline");
declineButton.addEventListener("click", function(){
policynotice();
})

let acceptButton = document.getElementById("accept");
acceptButton.addEventListener("click", function(){
acceptfunc();
})

/* NOT WORKING */
let accountButtons = document.getElementsByClassName("accountButton");
accountButtons.addEventListener("click", function(event){
event.preventDefault()
});

function policynotice(){
    alert("Please read and accept the privacy policy before continuing.")
}

function acceptfunc(){
    acceptButton.style.borderColor="black";
    acceptButton.style.backgroundColor="#79ff4d";

}