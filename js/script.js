$(document).ready(function(){
  $('ul.nav li.dropdown').hover(function(){
    $('.dropdown-menu', this).fadeIn();
        }, function(){
          $('.dropdown-menu', this).fadeIn('fast');
          $('.dropdown-menu', this).fadeOut(100);
  });
});
