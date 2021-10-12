$(document).ready(function(){
  $('.qName').focus();

  function next(){
    $('.qst.active').removeClass('active').next().addClass('active');
  }

  //questao 1
  $('.btNext-1').click(function(){
    var qName = $('.qName').val();
    $('.iName').val(qName);
    $('.tName').text(qName);
    console.log($('.iName').val());

    if(qName == ''){
      $(".qst-1 .alert").attr('style', 'display: block;');
    }else{
      next();
    }
  });

  //questao 2
  var investValue = '';

  $('.qst-2 input[type=radio]').click(function(){
    investValue = $(this).attr('value');
    $('.investValue').attr('value', investValue);
    console.log(investValue);
  });

  $('.btNext-2').click(function(e){
    if(investValue == ''){
      e.preventDefault();
      $(".qst-2 .alert").attr('style', 'display: block;');
      console.log('bloqueou .qst-2');
    }else{
      next();
    }
  });

  //questão 3
  $('.btNext-2').click(function(){
    if(investValue == 'inNo'){
      $('.qst-3 h2').html('O melhor momento pra começar É AGORA, estamos num momento especial do mercado e quem se posicionar agora tem grandes chances de <span class="highlight">ganhar muito dinheiro</span>.<br><br> Nós pensamos 24h em trazer as melhores idéias de investimentos para você colocar em prática.<br><br> Continuando... Quanto +/- seria seu aporte inicial?');
    }else{
      $('.qst-3 h2').html('Maravilha! Estamos num momento especial do mercado, quem estiver bem posicionado tem grandes chances de <span class="highlight">ganhar muito dinheiro</span>.<br><br> Eu quero te ajudar a melhorar seus rendimentos, nós pensamos 24h em trazer as melhores idéias de investimentos para você colocar em prática.<br><br> Continuando... Quanto +/- você já tem investido hoje?');
    }
  });

  var inInicialValue = '';

  $('.qst-3 input[type=radio]').click(function(){
    inInicialValue = $(this).attr('value');
    $('.inInicialValue').attr('value', inInicialValue);
    console.log(inInicialValue);
  });

  $('.btNext-3').click(function(e){
    if(inInicialValue == ''){
      e.preventDefault();
      $(".qst-3 .alert").attr('style', 'display: block;');
      console.log('bloqueou .qst-3');
    }else{
      next();
    }
  });

  //ignora numeros no campo nome
  $(".qName").keyup(function(){
    this.value = this.value.replace(/[0-9]*/g, '');
  });
});
