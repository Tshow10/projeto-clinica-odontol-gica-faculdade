document.addEventListener("submit", function(e) {
  e.preventDefault();

  const formId = e.target.id;
  let msgElement;

  if (formId === "formCadastro") {
    msgElement = document.getElementById("msgCadastro");
    msgElement.textContent = "✅ Paciente cadastrado com sucesso!";
  }

  if (formId === "formProntuario") {
    msgElement = document.getElementById("msgProntuario");
    msgElement.textContent = "💾 Prontuário salvo!";
  }

  if (formId === "formPagamento") {
    msgElement = document.getElementById("msgPagamento");
    msgElement.textContent = "💰 Pagamento registrado!";
  }

  if (formId === "formInfo") {
    const nome = document.getElementById("nomeBusca").value;
    const resultado = document.getElementById("resultadoInfo");
    resultado.innerHTML = `
      <h3>Resultado da busca:</h3>
      <p><strong>Nome:</strong> ${nome}</p>
      <p><strong>CPF:</strong> 123.456.789-00</p>
      <p><strong>Última consulta:</strong> 10/10/2025</p>
      <p><strong>Status:</strong> Em acompanhamento</p>
    `;
  }
});
