function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim(); // Usando trim() para remover espaços extras
        
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length); // Retorna o cookkie
        }
    }
    
    return ""; 
}
