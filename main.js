// for login page
var attempt=3;
function validate() {
    let username = document.getElementById("username").value;
    let pass = document.getElementById("pass").value;

    if (username == "user123" && pass == "pass123") {
        alert("Login Succesfully");
        // window.location = "dashbord.html"
        return false;
    }

    else{
        attempt--;
        alert("you have left", attempt, "attempt");
    }
}
