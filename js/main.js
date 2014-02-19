(function($) {
  var scrollspy_offset = $('body').data('offset'),
      scrollspy_target = $('body').data('target');

  $(scrollspy_target + ' li a').click(function(event) {
    event.preventDefault();
    $($(this).attr('href'))[0].scrollIntoView();
    scrollBy(0, -scrollspy_offset + 1);
  });
})(jQuery);
