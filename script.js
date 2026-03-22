const documentos = [
    { titulo: "📄 Política Geral", desc: "Diretrizes principais", link: "normas/033 SOLUS-PGSI-R1.pdf" },
    { titulo: "🧾 Termo de Uso", desc: "Regras do sistema", link: "normas/033 SOLUS-TUSI-R1_Termos_Uso.pdf" },
    { titulo: "🌐 Acesso Remoto", desc: "Uso fora da empresa", link: "normas/033 SOLUS-Acesso-Remoto-R1.pdf" },
    { titulo: "💻 Equipamentos", desc: "Dispositivos pessoais", link: "normas/033 SOLUS-BYOD-R1.pdf"},
    { titulo: "🔎 Classificação", desc: "Proteção de dados", link: "normas/033 SOLUS-Classificacao-Informacao-R1.pdf" },
    { titulo: "🛡️ Malware", desc: "Segurança digital", link: "normas/033 SOLUS-Cod-Maliciosos-R1.pdf" },
    { titulo: "📧 E-mail", desc: "Comunicação segura", link: "normas/033 SOLUS-E-MAIL-e-IM-R1.pdf" },
    { titulo: "🔑 Acesso", desc: "Controle de usuários", link: "normas/033 SOLUS-Gestao-Identidade-R1.pdf"},
    { titulo: "🌍 Internet", desc: "Uso da internet", link: "normas/033 SOLUS-Internet-e-Midias-Sociais-R1.pdf" },
    { titulo: "📊 Monitoramento", desc: "Auditoria", link: "normas/033 SOLUS-Monitoramento-R1.pdf" },
    { titulo: "🚨 Incidentes", desc: "Resposta a falhas", link: "normas/033 SOLUS-Resposta-a-incidente-R1.pdf" },
    { titulo: "✔ Uso Aceitável", desc: "Boas práticas", link: "normas/033 SOLUS-Uso-Aceitavel-Ativos-Informacao-R1.pdf" }
];

const container = document.getElementById("cards-container");

documentos.forEach((doc, index) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <h3>${doc.titulo}</h3>
        <p>${doc.desc}</p>
        <a class="btn" href="${doc.link}" target="_blank">Abrir</a>
    `;

    container.appendChild(card);

    setTimeout(() => {
        card.classList.add("show");
    }, index * 100);
});