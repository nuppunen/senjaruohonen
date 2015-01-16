
var matrix = [
  { width: 1280, height: 720,  img: '720.jpg' },
  { width: 1920, height: 1080, img: '1080.jpg' },
  { width: 2560, height: 1440, img: '1440.jpg' },
  { width: 3840, height: 2160, img: '4k.jpg' },
]

var choose = function(x, y) {
  var img = 'mini.jpg';
  matrix.forEach(function(opt) {
    if (x >= opt.width || y >= opt.height) {
      console.log('on ainakin ' + opt.img)
      img = opt.img
    }
  })
  return img
}

var change = function() {
  var img = choose(window.screen.availWidth, window.screen.availHeight)
  var html = document.getElementsByTagName('html')[0]
  html.style.backgroundImage = 'url(' + img + ')'
}

window.onload = setTimeout(change, 999)
