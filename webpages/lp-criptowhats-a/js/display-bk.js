function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

var segmento = getCookie("segmento");

const links = document.querySelectorAll('a');

if (segmento.indexOf('ad01d17fa649722c6edbf0c8a1c62f20') !== -1) {
    links.forEach((item) => {
        if (item.classList.contains('whatsLink')) {
            item.setAttribute("href", 'https://publicacoes.empiricus.com.br/minhas-assinaturas/empiricus-crypto-alert/lista/conteudos-recentes/' + window.location.search);
        }
    });

} else {
    if (segmento.indexOf('d38be5cef724a556ff5ca8d2a3664b0a') !== -1) {
        links.forEach((item) => {
            if (item.classList.contains('whatsLink')) {
                item.setAttribute("href", 'https://publicacoes.empiricus.com.br/minhas-assinaturas/empiricus-crypto-alert/lista/conteudos-recentes/' + window.location.search);
            }
        });
    } else {
        links.forEach((item) => {
            if (item.classList.contains('whatsLink')) {
                item.setAttribute("href", 'https://wa.me/5511941510888?text=%235_Iniciar_CriptoBot/' + window.location.search);
            }
        });
    }
}