let UserName = document.querySelector("#UserName");
let password = document.querySelector("#password");
let submit = document.querySelector("#sign-in");
let GetUserName = localStorage.getItem("UserName")
let GetPassword = localStorage.getItem("password")
let alert1 = document.querySelector("#alert1")
let alert2 = document.querySelector("#alert2")

submit.addEventListener("click", function(e){
    e.preventDefault()
    if(UserName.value === "" || password.value === ""){
        alert1.style.display = "block"
        alert2.style.display = "none"

    }else{
        if(GetUserName === UserName.value.trim() && GetPassword === password.value.trim()){
            setTimeout(function(){
                window.location = "index.html"
            }, 1700)
    } else{
        alert1.style.display = "none"
        alert2.style.display = "block"
    }
}})