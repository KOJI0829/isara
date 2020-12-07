$(function () {  
  $('.answer-list').on('click', function () {
  $(this).next().slideToggle();
  
  //openクラスをつける
  $(this).toggleClass('open');
  //クリックされていないanswer-listのopenクラスを取る
  $('.answer-list').not(this).removeClass('open');

  // 一つ開くと他は閉じるように
  $('.answer-list').not($(this)).next('.answer').slideUp();
  });


  $('.flow-chart-sp').on('click', function () {
  $(this).next().slideToggle();
  
  //openクラスをつける
  $(this).toggleClass('open');
  //クリックされていないflow-chart-spのopenクラスを取る
  $('.flow-chart-sp').not(this).removeClass('open');

  // 一つ開くと他は閉じるように
  $('.flow-chart-sp').not($(this)).next('.flow-chart-sp2').slideUp();
  });



  var pagetop = $('#page_top');
  // ボタン非表示
  pagetop.hide();

  // 100px スクロールしたらボタン表示
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500);
    return false;
  });
  
});