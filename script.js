const documentos = [
    { titulo: "📄 Política Geral", desc: "Diretrizes principais", link: "normas/politica_geral.html" },
    { titulo: "🧾 Termo de Uso", desc: "Regras do sistema", link: "normas/termo_uso.html" },
    { titulo: "🌐 Acesso Remoto", desc: "Uso fora da empresa", link: "normas/acesso_remoto.html" },
    { titulo: "💻 Equipamentos", desc: "Dispositivos pessoais", link: "normas/equipamentos.html" },
    { titulo: "🔎 Classificação", desc: "Proteção de dados", link: "normas/classificacao.html" },
    { titulo: "🛡️ Malware", desc: "Segurança digital", link: "normas/malware.html" },
    { titulo: "📧 E-mail", desc: "Comunicação segura", link: "normas/email.html" },
    { titulo: "🔑 Acesso", desc: "Controle de usuários", link: "normas/acesso.html" },
    { titulo: "🌍 Internet", desc: "Uso da internet", link: "normas/internet.html" },
    { titulo: "📊 Monitoramento", desc: "Auditoria", link: "normas/monitoramento.html" },
    { titulo: "🚨 Incidentes", desc: "Resposta a falhas", link: "normas/incidentes.html" },
    { titulo: "✔ Uso Aceitável", desc: "Boas práticas", link: "normas/uso_aceitavel.html" }
];

const container = document.getElementById("cards-container");

documentos.forEach((doc, index) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <h3>${doc.titulo}</h3>
        <p>${doc.desc}</p>
        <a class="btn" href="${doc.link}">Abrir</a>
    `;

    container.appendChild(card);

    setTimeout(() => {
        card.classList.add("show");
    }, index * 100);
});