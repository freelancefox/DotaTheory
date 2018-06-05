jQuery(document).ready(function() {
   $('#btn-abaddon').popover({
      toggle:'popover',
      container:'body',
      trigger:'hover click',
      placement:'bottom',
      html: true,
      content: function() {
        return $('#content-abaddon').html();
      }
  });
   $('#btn-proteus').popover({
      toggle:'popover',
      container:'body',
      trigger:'hover click',
      placement:'bottom',
      html: true,
      content: function() {
        return $('#content-proteus').html();
      }
  });
   $('#popover-burst').popover({
      toggle:'popover',
      container:'body',
      trigger:'hover click',
      placement:'top',
      html: true,
      content: function() {
        return $('#content-burst').html();
      }
  });
});
