function register(e) {
    e.preventDefault();

    var form = document.forms.signup;
    var fullname = form.elements.fullname.value;
    var email = form.elements.email.value;
    var password = form.elements.password.value;

    var allCookie = document.cookie.split("; ");
    var registerInfo = [];
    console.log(registerInfo);

    for(var i=0; i<allCookie.length; i++) {
        var name = allCookie[i].split("=");
        registerInfo.push(name[1]);
    }

    if(registerInfo[1] == email.trim()) {
        var modal = document.getElementById("modal-box");
        modal.style.display = "flex";
        modal.className = "animate__animated animate__fadeIn";

        var alertC = document.getElementById("alert");
        alertC.className = "animate__animated animate__zoomIn";

        var alertTitle = document.getElementById("alert-title");
        alertTitle.innerHTML = "User already exist.";

        var checkIcon = document.getElementById("check-icon");
        checkIcon.className = "fa fa-times-circle";
        checkIcon.style.color = "red";
    }
    else {
        document.cookie = "fullname = "+fullname+";expires = Tue, 2 Oct 2030 12:00:00 UTC";
        document.cookie = "email = "+email+";expires = Tue, 2 Oct 2030 12:00:00 UTC";
        document.cookie = "password = "+password+";expires = Tue, 2 Oct 2030 12:00:00 UTC";  
       

        var modal = document.getElementById("modal-box");
        modal.style.display = "flex";
        modal.className = "animate__animated animate__fadeIn";

        var alertC = document.getElementById("alert");
        alertC.className = "animate__animated animate__zoomIn";

        var alertTitle = document.getElementById("alert-title");
        alertTitle.innerHTML = "Register success.";

        var checkIcon = document.getElementById("check-icon");
        checkIcon.className = "fa fa-check-circle";

        checkIcon.style.color = "green";

    }

}
window.onload = function() {
    var eyeBtn = document.getElementById("eye-btn");
    eyeBtn.onclick = function() {
        var password = document.getElementById("password");
        var eyeIcon = document.getElementById("eye-icon");
        if(password.type == "password") {
            password.type = "text";
            eyeBtn.style.color = "#000";
            eyeIcon.className = "fa fa-eye-slash";

        }
        else {
            password.type = "password";
            eyeBtn.style.color = "#ccc";
            eyeIcon.className = "fa fa-eye";


        }
    }

    var closeModal = document.getElementById("close-modal");
    closeModal.onclick = function() {
        
        var modal = document.getElementById("modal-box");
        modal.className = "animate__animated animate__fadeOut";
        var alertC = document.getElementById("alert");
        alertC.className = "animate__animated animate__zoomOut";

        var alertTitle = document.getElementById("alert-title");
        if(alertTitle.innerHTML =="User already exist.") {
            setInterval(function() {
                modal.style.display = "none";
                location.reload();
             }, 800);  
        }
        else {

            setInterval(function() {
                modal.style.display = "none";
            location.replace("http://localhost/javascript/cookie13/login.html");
        
        }, 800);
    }
    }
}