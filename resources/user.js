async function loadUserInfo() {
    const token = getCookie("token");// Exibe o token no console para depuração

    console.log(token);
    

    try {
        const response = await fetch('http://localhost:8080/user', {
            method: 'GET',
            headers: {
                'Authorization': `${token}`, 
            }
        });

        if (!response.ok) {
            throw new Error(`Erro ao carregar dados do usuário: ${response.statusText}`);
        }

        const responseText = await response.text();  

        console.log("Resposta do servidor:", responseText); 

        const userData = JSON.parse(responseText); 

        if (userData.data && userData.data.length > 0) {
         
            const user = userData.data[0];  
            document.getElementById('user-name').textContent = user.name;  
        } else {
            console.error('Erro: Nenhum usuário encontrado');
            document.getElementById('user-name').textContent = 'Nome não encontrado';
        }

    } catch (error) {
        console.error('Erro ao obter dados do usuário:', error);
        document.getElementById('user-name').textContent = 'Erro ao carregar o nome';
    }
}



document.addEventListener("DOMContentLoaded", function() {
    loadUserInfo();
});
