function initEmojis() {
  $.getScript('https://cdnjs.cloudflare.com/ajax/libs/twemoji/11.0.0/twemoji.min.js', function()
  {
    loadEmojis();
  });
}
function loadEmojis() {
    var emojis = document.getElementsByClassName("emoji");
    for(var i = 0; i < emojis.length; i++) emojis[i].setAttribute("style", "margin: 0px !important;  display: inline !important;");
    // This can be set to 16x16, 36x36, or 72x72
    var size = 16;
    twemoji.size = (size + 'x' + size);
    twemoji.parse(document.body);
}

//wait about 10 seconds -- enough time for everything to finish loading totally and then try to load emojis
setTimeout(function() { initEmojis(); }, 10 * 1000);
//after that update emojis every 60 seconds
setInterval(function(){ loadEmojis(); }, 60 * 1000);
