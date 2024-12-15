document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn"),
    modal = document.getElementById("backDiv"),
    close = document.getElementById("close"),
    body = document.querySelector("body"),
    noVis = document.getElementById("noVis"),
    vis = document.getElementById("vis"),
    pass = document.getElementById('pass');

  loginBtn.addEventListener("click", () => {
    modal.style.display = "block";
    body.style.overflow = "hidden";
  });
  close.addEventListener("click", () => {
    modal.style.display = "none";
    body.style.overflow = "auto";
  });
  window.addEventListener("click", (e) => {
    if (e.target == modal) {
      body.style.overflow = "auto";
      modal.style.display = "none";
    }
  });
  noVis.addEventListener("click", () => {
    noVis.style.display = "none";
    vis.style.display = 'block'
    pass.type = 'text'
  });
  vis.addEventListener("click", () => {
    noVis.style.display = "block";
    vis.style.display = 'none'
    pass.type = 'password'
  });
});
