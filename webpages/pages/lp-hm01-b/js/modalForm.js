if(navigator.userAgent.indexOf('Chrome') != -1){
leavePage();
}else if(navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1){
leavePage();
} else if(navigator.userAgent.indexOf('Firefox') != -1){
leavePage();
} else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )){
leavePage();
}

var showExitPopUPOnce = false;

function leavePage(){
  document.addEventListener("mouseout", function(e){
    if(e.clientY < 0){
      if(showExitPopUPOnce == false){
        modalDisplay();
        showExitPopUPOnce = true;
      }
    }
  }, false);
}

function modalDisplay(){
  window.scrollTo({top: 0, behavior: 'smooth'});
  $('.modalForm').show().addClass('activated');
  setTimeout(function(){
    $('input[type="email"]').focus();
  }, 800);
}

function exitModalDisplay(){
  $('.modalForm').hide().removeClass('activated');
}

//open/close form
$('.showModal').click(function(){
  modalDisplay();
});
$('.buttonCloseModal, .modalFormOverlay').click(function(){
  exitModalDisplay();
});

$(document).on('keyup',pressed);

function pressed(e){
  if($('.modalForm').hasClass('activated') == true && e.keyCode === 13){
    $('.btn-submit').trigger('click');
  }else if($('.modalForm').hasClass('activated') == true && e.keyCode === 27){
    exitModalDisplay();
  }
}
