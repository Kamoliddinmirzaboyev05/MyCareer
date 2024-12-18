document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn"),
    modal = document.getElementById("backDiv"),
    close = document.getElementById("close"),
    body = document.querySelector("body"),
    noVis = document.getElementById("noVis"),
    vis = document.getElementById("vis"),
    pass = document.getElementById("pass"),
    login = document.getElementById("login"),
    loginInput = document.getElementById("loginInput"),
    modalOyna = document.querySelector(".modal");

  loginBtn.addEventListener("click", () => {
    modal.style.top = "0";
    modalOyna.style.top = "50%";
    modalOyna.transition = "all 1s ease"
    modalOyna.style.opacity = "1";
    body.style.overflow = "auto";
  });
  close.addEventListener("click", () => {
    modal.style.top = "-1000px";
    modalOyna.style.top = "-1000px";
    body.style.overflow = "auto";
  });
  window.addEventListener("click", (e) => {
    if (e.target == modal) {
      body.style.overflow = "auto";
      modalOyna.style.top = "-1000px";
      modal.style.top = "-1000px";
    }
  });
  noVis.addEventListener("click", () => {
    noVis.style.display = "none";
    vis.style.display = "block";
    pass.type = "text";
  });
  vis.addEventListener("click", () => {
    noVis.style.display = "block";
    vis.style.display = "none";
    pass.type = "password";
  });

  login.addEventListener("click", () => {
    if (pass.value == "" || loginInput.value == "") {
      alert("Iltimos loginni va parolni kiriting!");
    } else {
      body.style.overflow = "auto";
      modal.style.display = "none";
      pass.value = "";
      loginInput.value = "";
    }
  });
});
