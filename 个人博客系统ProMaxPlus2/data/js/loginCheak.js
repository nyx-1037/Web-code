let login = document.getElementById("login");
let register = document.getElementById("register");
let form_box = document.getElementsByClassName("form-box")[0];
let register_box = document.getElementsByClassName("register-box")[0];
let login_box = document.getElementsByClassName("login-box")[0];

register.addEventListener("click", () => {
  form_box.style.transform = "translateX(80%)";

  login_box.classList.add("hidden");

  register_box.classList.remove("hidden");


});
login.addEventListener("click", () => {
  form_box.style.transform = "translateX(0%)";

  register_box.classList.add("hidden");

  login_box.classList.remove("hidden");

});


document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // 阻止表单的默认提交行为

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // 在这里添加您的验证逻辑
    if (username === "admin" && password === "123456") {
        var button = document.querySelector('.loginBtn');
        button.onclick = function () {
            window.location.href = "data/loading.html";
        }
    } else {
        alert("用户名或密码错误！");
    }
});


var none=document.getElementById("none");
none.onclick=function(){
  alert("啥也没有");
}