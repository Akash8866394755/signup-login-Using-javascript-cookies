function login(e) {
    e.preventDefault();
    var form = document.forms.signin;
    var email = form.elements.email.value;
    var password = form.elements.password.value;
    
    var allCookie = document.cookie.split("; ");
    registerInfo = [];

    for(var i=0; i<allCookie.length;i++) {
        var name = allCookie[i].split("=");
        registerInfo.push(name[1]);
    }
    var modal = document.getElementById("modal");
    var alertBox = document.getElementById("alert-box");
    var checkIcon = document.getElementById("check");
    var alertTitle = document.getElementById("alert-title");




    if(registerInfo[1] == email) {
        if(registerInfo[2] == password) {

            checkIcon.className = "fa fa-check-circle";
            checkIcon.style.color = "green"

            alertTitle.innerHTML = "Login success";
            alertTitle.style.color = "green"
        }
        else {
            // alert("password wrong");

            checkIcon.className = "fa fa-times-circle";
            checkIcon.style.color = "red";

            alertTitle.innerHTML = "Password is wrong";
            alertTitle.style.color = "red";


        }
    }
    else {
        // alert("user not found");
      
        checkIcon.className = "fa fa-times-circle";
        checkIcon.style.color = "red";

        alertTitle.innerHTML = "User not found";
        alertTitle.style.color = "red";
    }

            modal.style.display = "flex";
            modal.className = "animate__animated animate__fadeIn";
            alertBox.className = "animate__animated animate__zoomIn";
}
window.onload = function() {
    var closeBtn = document.getElementById("close-btn");
    closeBtn.onclick = function() {

        var alertTitle = document.getElementById("alert-title");
        if(alertTitle.innerHTML == "Login success") {
            setTimeout(function() {
                location.replace("https://google.com");
            }, 500);
        }
        else if(alertTitle.innerHTML == "Password is wrong") {
            setTimeout(function() {
                location.replace("http://localhost/javascript/cookie13/login.html");
            }, 500);
        }
        else {
            setTimeout(function() {
                location.replace("http://localhost/javascript/cookie13/login.html");
            }, 500);
        }
        var modal = document.getElementById("modal");
        modal.className = "animate__animated animate__fadeIn";
    
        var alertBox = document.getElementById("alert-box");    
        alertBox.className = "animate__animated animate__zoomOut";
        
    }
    history.pushState(null, null, location.href);
    window.onpopstate = function() {
        history.forward();
    }
}