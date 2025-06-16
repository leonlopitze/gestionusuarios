document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("registerForm");
  const loginForm = document.getElementById("loginForm");

  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const user = document.getElementById("registerUser").value;
      const pass = document.getElementById("registerPass").value;

      let users = JSON.parse(localStorage.getItem("users")) || {};
      if (users[user]) {
        alert("Usuario ya existe.");
      } else {
        users[user] = pass;
        localStorage.setItem("users", JSON.stringify(users));
        alert("Registrado correctamente.");
        window.location.href = "index.html";
      }
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const user = document.getElementById("loginUser").value;
      const pass = document.getElementById("loginPass").value;

      let users = JSON.parse(localStorage.getItem("users")) || {};
      if (users[user] && users[user] === pass) {
        localStorage.setItem("currentUser", user);
        window.location.href = "dashboard.html";
      } else {
        alert("Credenciales incorrectas.");
      }
    });
  }
});
