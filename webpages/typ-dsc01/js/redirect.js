$(document).ready(function(){
  var xpromo = getQueryVariable('xpromo') || null;
  var notr = getQueryVariable('notr') || null;
  var dtl = getQueryVariable('dtl') || null;
  var email = getQueryVariable('e') || getQueryVariable('kke') || getQueryVariable('email');

  if(xpromo == null) xpromo = 'XE-MELH-WE-EHL' + promo.toUpperCase() + '-X-X-LP-X-X-X-X';

  var linkRedirect = 'https://sl.empiricus.com.br/s/' + promo + '/' + '?xpromo=' + xpromo + "&e=" + email + "&dtl=" + dtl + "&notr=" + notr;
  console.log(linkRedirect);

  if(redirect == true) $('.container').html('<h1>Tudo certo! Assista agora...</h1>');

  setTimeout(function(){
    if(email !== null){
      dataLayer.push({
       event: 'LeadLP',
       versaoLP: dtl,
      });
      console.log('LeadLP');
    }
    if(redirect == true) window.location.href = linkRedirect;
  }, 3000);

  $('.btnTelegram').click(function(){
    dataLayer.push({event: 'typTelegram',});
  });

  function getQueryVariable(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
});
