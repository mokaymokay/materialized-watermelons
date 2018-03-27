$(document).ready(function(){

  function showModal() {
    $('.modal').modal();
    $('#modal1').modal('open');
  }

  setTimeout(showModal, 3000);

});

$(document).ready(function(){
  $('.sidenav').sidenav();
});
