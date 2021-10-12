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
  $('.modalForm').show();
  window.scrollTo({top: 0, behavior: 'smooth'});
}

//open/close form
$('.showModal').click(function(){
  modalDisplay();
});
$('.buttonCloseModal, .modalFormOverlay').click(function(){
  $('.modalForm').hide();
});
