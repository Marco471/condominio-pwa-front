const API = "http://127.0.0.1:8000";

// REGISTRAR
function register() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  fetch(`${API}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById("msg").innerText =
      data.message || data.detail;
  })
  .catch(() => {
    document.getElementById("msg").innerText =
      "Erro ao conectar ao servidor";
  });
}

// LOGIN
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  fetch(`${API}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  })
  .then(res => res.json())
  .then(data => {
    localStorage.setItem("token", data.access_token);
    document.getElementById("msg").innerText =
      "Login realizado com sucesso";
  })
  .catch(() => {
    document.getElementById("msg").innerText =
      "Erro ao conectar ao servidor";
  });
}
