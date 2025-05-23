let userInfo = document.querySelector("#user-info");
let user = document.querySelector("#user");
let links = document.querySelector("#link");

if(localStorage.getItem("UserName")){
    links.remove();
    userInfo.style.display = "flex";
    user.innerHTML = 'Welcome ' + localStorage.getItem("UserName");
}