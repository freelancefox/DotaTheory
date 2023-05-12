jQuery(document).ready(function() {
  $('.strength img[id^="btn-"]').popover({
      toggle:'popover',
      container:'body',
      trigger:'hover click',
      placement:'bottom',
      html: true,
      content: function() {
        return $(this).next('div[id^="content-"]').html();
      }
  });
  $('.agility .radiant img[id^="btn-"]').popover({
      toggle:'popover',
      container:'body',
      trigger:'hover click',
      placement:'right',
      html: true,
      content: function() {
        return $(this).next('div[id^="content-"]').html();
      }
  });
  $('.agility .dire img[id^="btn-"]').popover({
      toggle:'popover',
      container:'body',
      trigger:'hover click',
      placement:'left',
      html: true,
      content: function() {
        return $(this).next('div[id^="content-"]').html();
      }
  });
  $('.intelligence img[id^="btn-"]').popover({
      toggle:'popover',
      container:'body',
      trigger:'hover click',
      placement:'top',
      html: true,
      content: function() {
        return $(this).next('div[id^="content-"]').html();
      }
  });
  $('#dropdowns li > a[rel="popover"]').popover({
      toggle:'popover',
      container:'#dropdowns',
      trigger:'hover',
      placement:'bottom auto',
      html: true,
      content: function() {
        return $(this).parent().next('div[id^="tooltip-"]').html();
      }
  });
  $('#filters a[rel="popover"]').popover({
      toggle:'popover',
      container:'#filters',
      trigger:'hover',
      placement:'bottom',
      html: true,
      content: function() {
        return $(this).next('div[id^="tooltip-"]').html();
      }
  });
});
