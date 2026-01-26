const API =
  location.hostname === "localhost" || location.hostname === "127.0.0.1"
    ? "http://127.0.0.1:8000"
    : "http://192.168.0.7:8000";

// ================= MENSAGEM =================
function enviarMensagem() {
  const assunto = document.getElementById("assunto").value;
  const conteudo = document.getElementById("conteudo").value;
  const anexo = document.getElementById("anexo")?.files[0];

  if (!assunto || !conteudo) {
    alert("Preencha assunto e mensagem");
    return;
  }

  fetch(`${API}/mensagens`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nome: assunto,
      email: "sistema@condominio",
      conteudo: conteudo
    })
  })
    .then(async res => {
      const data = await res.json();

      if (!res.ok) {
        alert("Erro ao enviar mensagem ❌");
        return;
      }

      alert("Mensagem enviada com sucesso ✅");
      document.getElementById("assunto").value = "";
      document.getElementById("conteudo").value = "";
      if (document.getElementById("anexo")) {
        document.getElementById("anexo").value = "";
      }
    })
    .catch(() => {
      alert("Erro ao conectar com o servidor ❌");
    });
}

// ================= RESERVA =================
function reservarSalao() {
  const data = document.getElementById("dataReserva").value;

  if (!data) {
    alert("Escolha uma data");
    return;
  }

  fetch(`${API}/reservar-salao`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data })
  })
    .then(async res => {
      const dataJson = await res.json();

      if (!res.ok) {
        alert("❌ Esta data já está ocupada");
        return;
      }

      alert("Reserva realizada com sucesso ✅");
      document.getElementById("dataReserva").value = "";
    })
    .catch(() => {
      alert("Erro ao realizar reserva ❌");
    });
}

