$(function(){
  // 스킵메뉴
  $('.skip_menu>a').focus(function(){
    $('.skip_menu').animate({top:'0px'},300);
  });
  $('.skip_menu>a').blur(function(){
    $('.skip_menu').animate({top:'-43px'},300);
  });

  // 토글네비
  $('.nav_btn').click(function(){
    if($(this).parent().hasClass('active')){
      $('.nav_btn').parent().removeClass('active');
    }else{
      $('.nav_btn').parent().removeClass('active');
      $(this).parent().addClass('active');
      $('.nav_btn').next().removeClass('active');
    }   
    $(this).next().toggleClass('active');
  })

  // 자동차 종류 선택
  $('.car_list>li:first-child>p').click(function(){
    $('.car_list>li:first-child>p').removeClass('active');
    $(this).addClass('active');
  });

  // 자동차 회전 지연시간
  var rotateItem=$('.car_list>li:last-child>p');
  for(var cnt=0;cnt<rotateItem.length;cnt++){
    rotateItem.eq(cnt).css('animation-delay',(cnt+10)*30+'ms');
  }
  
  // 버거이벤트
  $('#tgl_nav_btn').click(function(){
    $(this).toggleClass('active');
    // $('.nav').slideToggle();
  })

  // var tmp=$('.header .article.small_nav>.content>ul:last-child::after');
  // console.log(tmp);
  // tmp.mouseover(function(){
  //   tmp.css('color','rgba(255,255,255,1');
  // })

  // 호버이벤트

  $('.search').before('<li class="en"><a href="#">EN</a></li>');
  // $('.en').css({color:'rgba(255,255,255,0.5)',cursor:'pointer'});
  $('.en').mouseover(function(){
    $(this).css('color','rgba(255,255,255,1)');
  });
  $('.en').mouseout(function(){
    $(this).css('color','rgba(255,255,255,0.5)');
  });
  $(window).resize(function(){
    var winWidth=$('window').width();
  if(winWidth>=770){
    $('en').hide();
  }else{
    $('.en').show();
  }
  });
  
})