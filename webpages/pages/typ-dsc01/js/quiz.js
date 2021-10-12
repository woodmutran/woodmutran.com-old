$(document).ready(function(){

  function next(){
    $('.qst.active').removeClass('active').next().addClass('active');
  }

  //questao
  var quizValue = '';

  $('.qst-1 input[type=radio]').click(function(){
    quizValue = $(this).attr('value');
    $('.quizValue').attr('value', quizValue);
    console.log(quizValue);
  });

  $('.btNext').click(function(){

  var resposta = quizValue;

  dataLayer.push({
   event: 'QuizDsc01',
   BotaoQuizDsc01: resposta
  });

  });

  $('.btNext').click(function(e){
    if(quizValue == ''){
      e.preventDefault();
      $(".qst-1 .alert").attr('style', 'display: block;');
      console.log('bloqueou .qst-1');
    }else{
      next();
    }
  });

  //resposta
  $('.btNext').click(function(){
    if(quizValue == 'qzNo'){
      $('.resp h3').html('Obrigado pela resposta. Isso nos ajudará a proporcionar a melhor experiência para você.');
    }else{
      $('.resp h3').html('Obrigado pela resposta. Isso nos ajudará a proporcionar a melhor experiência para você.');
    }
  });

  var respValue = '';

  $('.resp input[type=radio]').click(function(){
    respValue = $(this).attr('value');
    $('.respValue').attr('value', respValue);
    console.log(respValue);
  });

});
