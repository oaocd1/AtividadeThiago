

function toggleSubmenu(id) {
    var submenu = document.getElementById(id);
    if (submenu.style.display === "none" || submenu.style.display === "") {
        submenu.style.display = "block";
        submenu.style.display = "none"; 
    }
}

function showHome() {
    document.getElementById("main-content").innerHTML = `
        <h2>Bem-vindo!</h2>
        <p>Esta é a área principal. Selecione uma opção no menu.</p>
    `;
}

document.addEventListener("DOMContentLoaded", () => {
    // fetch("https")
    //     .then(response => {
    //         // Verificar o conteúdo da resposta antes de tentar fazer o parse
    //         if (!response.ok) {
    //             throw new Error("Erro na resposta da API: " + response.status);
    //         }
    //         return response.json();
    //     })
    //     .then(data => {
    //         console.log(data); // Exibir os dados para verificar
    //         const user = data.data[0]; // Acessando o primeiro item no array
    //         document.getElementById("user-name").textContent = user.name || "Usuário";
    //     })
    //     .catch(error => console.error("Erro ao carregar dados do usuário:", error));33
});
