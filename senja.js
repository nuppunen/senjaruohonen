
var imgs = [
  { url: 'url(imgs/1280.jpg)', w: 1280, h:  720 },
  { url: 'url(imgs/1920.jpg)', w: 1920, h: 1080 },
  { url: 'url(imgs/2560.jpg)', w: 2560, h: 1440 },
  { url: 'url(imgs/3840.jpg)', w: 3840, h: 2160 },
];

function setCoverImage() {
  var bg;
  var w = $(window).width();
  var h = $(window).height();

  imgs.some(function(i) {
    bg = i.url;
    return (w <= i.w && h <= i.h);
  });

  $('#viewport').css('height', h);
  $('#cover').css('background-image', bg);
}

$(document).ready(function() {
  setCoverImage();

  $(window).resize(function() {
    $('#viewport').css('height', $(window).height());
  });
});
