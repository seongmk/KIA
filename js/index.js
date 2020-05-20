$(function(){
    // 스킵메뉴
    $('.skip_menu>p>a').focus(function(){
      $('.skip_menu').addClass('active');
    });
    $('.skip_menu>p>a').blur(function(){
      $('.skip_menu').removeClass('active');
    });
  })

  // 토글네비
  var tgl_nav=$('.large_nav>.content>ul:frist-child>li>a');
  tgl_nav.click(function(){
    if($(this).parent().hasClass('active')){
      tgl_nav.parent().removeClass('active');
    }else{
      tgl_nav.parent().removeClass('active');
      $(this).parent().addClass('active');
    }
  });