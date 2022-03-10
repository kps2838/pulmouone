// main.js

$(function(){
  // 모바일 토글 메뉴
  $('#gnb-toggle-btn').click(function(){
    $('#gnb').toggleClass('on');
  })

  // 사이트맵 버튼 열고 닫기
  $('#site-map-btn').click(function(){
    $('.sitemap-modal').addClass('on');
  });

  // 사이트맵 닫기

  $('#sitemap-modal-close').click(function(){
    $('.sitemap-modal').removeClass('on');
  });


})