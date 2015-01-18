
var background = [
  { width:  640, height:  360, img: '/imgs/mini.jpg' },
  { width: 1280, height:  720, img: '/imgs/1280.jpg' },
  { width: 1920, height: 1080, img: '/imgs/1920.jpg' },
  { width: 2560, height: 1440, img: '/imgs/2560.jpg' },
  { width: 3840, height: 2160, img: '/imgs/3840.jpg' },
];

var choose = function(x, y) {
  var img = background[0].img;
  background.forEach(function(bg) {
    if (x >= bg.width || y >= bg.height) {
      img = bg.img;
    }
  });
  return img;
};

var change = function() {
  var img = choose(window.screen.availWidth, window.screen.availHeight);
  var html = document.getElementsByTagName('html')[0];
  html.style.backgroundImage = 'url(' + img + ')';
};

window.onload = setTimeout(change, 1);
