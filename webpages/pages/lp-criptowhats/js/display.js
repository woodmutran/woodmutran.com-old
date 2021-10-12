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

if (segmento.indexOf('ad01d17fa649722c6edbf0c8a1c62f20') !== -1 || //CRL Anual
    segmento.indexOf('d38be5cef724a556ff5ca8d2a3664b0a') !== -1 || //CRL VitalÃ­cio
    segmento.indexOf('9d5df03e4bc09d4ba3267dde4598e888') !== -1 || //Clube
    segmento.indexOf('047356cdaed0ff043eac9f6a2b17f15f') !== -1 || //Reserva Anual
    segmento.indexOf('f0dd044267929af84f185980566c766d') !== -1 || //Reserva Mensal
    segmento.indexOf('4c089cb82c1f56a2399ec601f540c13b') !== -1 || //Reserva VitalÃ­cio
    segmento.indexOf('680e43b50b67ca953524daf6f119b04d') !== -1){  //Exponential Coin
    links.forEach((item) => {
        if (item.classList.contains('whatsLink')) {
            item.setAttribute("href", 'https://pld5.adj.st/publicationapp.com/publicacoes?adj_t=5dt58ox&adj_deep_link=publicationapp%3A%2F%2Fpublicationapp.com%2Fpublicacoes&adj_campaign=Whatsapp&adj_adgroup=Cripto-em-Minutos&adj_creative=criptowhats&adj_fallback=https%3A%2F%2Fpublicacoes.empiricus.com.br%2Fdashboard%2F%3Fxpromo%3DXE-MI-LJAL-CRIPTOEMMINUTOS-X-20210422-CRIPTOWHATS-SUBPG-X&adj_redirect_macos=https%3A%2F%2Fpublicacoes.empiricus.com.br%2Fdashboard%2F%3Fxpromo%3DXE-MI-LJAL-CRIPTOEMMINUTOS-X-20210422-CRIPTOWHATS-SUBPG-X' + window.location.search);
        }
    });


} else {
    links.forEach((item) => {
        if (item.classList.contains('whatsLink')) {
            item.setAttribute("href", 'https://wa.me/5511941510888?text=%237_Iniciar_CriptoBot/' + window.location.search);
        }
    });
}

/*
   Onde:
   CRL Anual => ad01d17fa649722c6edbf0c8a1c62f20
   CRL VitalÃ­cio => d38be5cef724a556ff5ca8d2a3664b0a
   Clube => 9d5df03e4bc09d4ba3267dde4598e888
   Reserva Anual => 047356cdaed0ff043eac9f6a2b17f15f
   Reserva Mensal =>  f0dd044267929af84f185980566c766d
   Reserva VitalÃ­cio => 4c089cb82c1f56a2399ec601f540c13b
   Exponential Coin => 680e43b50b67ca953524daf6f119b04d
*/
