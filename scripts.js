// Decline button - alert user with pop-up
let declineButton = document.getElementById("decline");
declineButton.addEventListener("click", function(){
policynotice();
})

// Accept button - change color and border
let acceptButton = document.getElementById("accept");
acceptButton.addEventListener("click", function(){
acceptfunc();
})

// Submit button - change color/border and goto welcome page
let submitButton = document.getElementById("submitbutton");
submitButton.addEventListener("click", function(){
submitfunc();
})

/* NOT WORKING */
let accountButtons = document.getElementsByClassName("accountButton");
accountButtons.addEventListener("click", function(event){
event.preventDefault()
});

// Local storage test
let key = 'Item 1';
localStorage.setItem(key, 'Value');

let myItem = localStorage.getItem(key);

function policynotice(){
    alert("Please read and accept the privacy policy before continuing.")
}

function acceptfunc(){
    acceptButton.style.borderColor="black";
    acceptButton.style.backgroundColor="#79ff4d";
}

function submitfunc(){
    submitButton.style.borderColor="black"
    submitButton.style.backgroundColor="#79ff4d";
    window.location.href = 'welcome.html';
}

function feedbackfunc(){
    alert("Thank you for your feedback.")
}

function showpart2(){
    var x = document.getElementById("part2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  x.scrollIntoView();

    var y = document.getElementById("part1");
    y.style.display = "none";

    var z = document.getElementById("myBar");
    z.style.width = "30%";
}

function showpart3(){
    var x = document.getElementById("part3");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  x.scrollIntoView();

  var y = document.getElementById("part2");
    y.style.display = "none";

    var z = document.getElementById("myBar");
    z.style.width = "60%";
}

function showpart4(){
    var x = document.getElementById("part4");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  // x.scrollIntoView();

  var y = document.getElementById("part3");
    y.style.display = "none";

    var z = document.getElementById("myBar");
    z.style.width = "90%";
}
