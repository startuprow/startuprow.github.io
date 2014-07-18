(function($) {
  var scrollspy_offset = $('body').data('offset'),
      scrollspy_target = $('body').data('target');

  $(scrollspy_target + ' li a').click(function(event) {
    event.preventDefault();
    $($(this).attr('href'))[0].scrollIntoView();
    scrollBy(0, -scrollspy_offset + 1);
  });

  var show_hide_video = function (event) {
    event.preventDefault();
    video_box = $('#video-box');
    video_box.slideToggle(function () {
      if(!video_box.is(':visible')) {
        $('#youtube-player')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
      }
    });
    $('#hide-video').slideToggle();
  };

  $('#show-video').click(show_hide_video);
  $('hide-video').click(show_hide_video);
})(jQuery);
