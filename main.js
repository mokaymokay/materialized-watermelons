$(document).ready(function(){

  setTimeout(function showModal() {
    $('.modal').modal();
    $('#modal1').modal('open');
  }, 3000);

  $('.sidenav').sidenav();

  $('.carousel').carousel();
});
