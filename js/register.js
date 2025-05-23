let UserName = document.querySelector("#UserName");
let password = document.querySelector("#password");
let email = document.querySelector("#email");
let register = document.querySelector("#sign-up");
let alert = document.querySelector(".alert")

register.addEventListener("click", function(e){
    e.preventDefault()
    if(UserName.value === "" || password.value === "" || email.value === ""){
        alert.style.display = "block"
    }else{
        localStorage.setItem("UserName", UserName.value)
        localStorage.setItem("password", password.value)
        localStorage.setItem("email", email.value)
        setTimeout(function(){
            window.location = "login.html"
        },1700)
    }
})
