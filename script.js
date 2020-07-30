$(function(){

  $('.click-hear').click(function(){
    $('#tomoyo').slideDown(2000);
    $('span').text('-');
  });


  $('.list').click(function(){

    var $popup = $(this).find('.popup-list-image')
    if($popup.hasClass('open')) {
      $popup.removeClass('open');
      $popup.slideUp(1500);
      $(this).find('span').text('+');
    } else {
      $popup.addClass('open');
      $popup.slideDown(1500);
      $(this).find('span').text('-');
    }
  });
    
  $('#message-show').click(function(){
    $('#signup-show').fadeIn();
  })
  $('.close-modal').click(function(){
      $('#signup-show').fadeOut();
  })
  
  


});
