setInterval(function() {
  jQuery.ajax('https://localhost/tumblr-theme/', {cache: false}).success(function(html) {
    var btn = jQuery("div[data-action='update_preview']").first();
    if (html!=ace.edit('editor').getValue()) {
      ace.edit('editor').setValue(html);
      if (!btn.hasClass('disabled')){
        btn.click();
        console.log("Theme updated! :)");
      }
    }
  });
},2000);