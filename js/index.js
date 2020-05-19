$(function(){
    // 스킵메뉴
    $('.skip_menu>p>a').focus(function(){
      $('.skip_menu').addClass('active');
    });
    $('.skip_menu>p>a').blur(function(){
      $('.skip_menu').removeClass('active');
    });
  })