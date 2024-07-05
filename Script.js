//button hide and show function
function showhide(){
    let userPasswd = document.getElementById("urpswd");

    if (userPasswd.type === "password"){
    userPasswd.type = "text";
    document.getElementById("btn").innerHTML = "Hide";
    }else{
        userPasswd.type = "password";
        document.getElementById("btn").innerHTML = "Show";
    }   
}

function Strength(Password){ 
    let i = 0;
    if(Password.length > 6){
        i++;
    }
    if(Password.length >= 10){
        i++;
    }
    if (/[A-Z]/.test(Password)){
        i++;
    }
    if (/[0-9]/.test(Password)){
        i++;
    }
    if(/[a-z]/.test(Password)){
        i++;
    }
    if (/[!@#$%^&*()\-_=+{};:,<.>]/.test(Password)){
        i++;
    }
    return i;
}


let container = document.querySelector(".meter");

function letsgo(){
    let Password = document.getElementById("urpswd").value;
    let strength = Strength(Password);
   
    if(strength <= 2){
        container.classList.add("weak");
        container.classList.remove("moderate");
        container.classList.remove("strong");
    }else if (strength >=2 && strength <= 4){
        container.classList.remove("weak");
        container.classList.add("moderate");
        container.classList.remove("strong");
    }else{
        container.classList.remove("weak");
        container.classList.remove("moderate");
        container.classList.add("strong");
    }
};

