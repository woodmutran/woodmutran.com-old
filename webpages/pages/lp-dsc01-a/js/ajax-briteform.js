$(document).ready(function(){
  //listener do BriteformSend
  $(document).on('BriteformSend', submitForm);

  $("input[name='celular']").mask('(99) 9 9999-999?9');
  $("input[name='name']").keyup(function(){
    this.value = this.value.replace(/[^A-Za-z]+/g, '');
  });
});

var xpromo = getQueryVariable("xpromo");
var email = getQueryVariable("email") || getQueryVariable("e") || getQueryVariable("kke");
var cookieEmpU = getCookie('COOKIE_EMP_U') || null;
console.log('cookieEmpU: ', cookieEmpU);
var cookieEmpAllowCookies = getCookie('COOKIE_EMP_ALLOW_COOKIES') || null;
console.log('cookieEmpAllowCookies: ', cookieEmpAllowCookies);
var dtl = getQueryVariable("dtl");

//xpromo
if(xpromo !== null){
  $("input[name='sourceId']").val(xpromo);
}else if(xpromo == null || xpromo == ''){
  xpromo = $("input[name='sourceId']").val();
}

//email
if(email !== null) $("input[name='emailAddress']").val(atob(email));

//dtl
if(dtl !== null) incrementRedirect('dtl', dtl);

//evento dataLayer
$('.input-submit').click(function(){
  dataLayer.push({event:'cliqueBotaoLP'});
});

function submitForm(e){
  e.preventDefault();

  //hashiando o email recebido, e gravando cookieEmpU
  var emailHash = btoa($("input[name='emailAddress']").val());

  if(cookieEmpU !== null){
    console.log('tem COOKIE_EMP_U');

    //roda o envio de termos
    sendTermsAccept();
  }else{
    $.ajax({
      url: `https://www.usuario.empiricus.com.br/tracking/hash?email=${emailHash}`,
      type: 'GET',
      dataType: 'json',
    }).done(function(response){
      emailHash = response.hash;
      setCookie('COOKIE_EMP_U', emailHash, 22000);
      console.log('done COOKIE_EMP_U', response);

      //roda o envio de termos
      sendTermsAccept();
    }).fail(function(response){
      console.log('fail COOKIE_EMP_U', response);
    });
  }

  //envio de aceite dos termos e grava cookie
  function sendTermsAccept(){
    if(cookieEmpAllowCookies !== true || cookieEmpAllowCookies !== 'true'){
      var dataToSend = {
        idUser: emailHash,
        optin: true
      }

      console.log(dataToSend);

      $.ajax({
        url: 'https://api-userpreferences.empiricus.com.br/v1/api/termsAccept',
        type: 'POST',
        data: JSON.stringify(dataToSend),
        dataType: 'json',
        contentType: 'application/json;charset=UTF-8'
      }).done(function(response){
        setCookie('COOKIE_EMP_ALLOW_COOKIES', 'true', 22000);
        console.log('done do COOKIE_EMP_ALLOW_COOKIES: ', response);
      }).fail(function(response){
        console.log('fail do COOKIE_EMP_ALLOW_COOKIES: ', response);
      });
    }
    else console.log('tem COOKIE_EMP_ALLOW_COOKIES');
  }

  //envio do form
  $('.briteform').submit();
  console.log('envio do form');
}

function incrementRedirect(pName, pValue){
  var eC = '?';
  var searchIP = $('input[name="redirect"]').attr('value').search(/\?/g);
  if(searchIP >= 0) eC = '&';

  $('input[name="redirect"]').attr('value', $('input[name="redirect"]').attr('value') + eC + pName + '=' + pValue);

  return this;
}

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

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";domain=.empiricus.com.br;path=/";
}

function getQueryVariable(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
