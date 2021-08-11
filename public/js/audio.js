window.addEventListener('load', function () {
  var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  var source = audioCtx.createBufferSource();
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '/audio/theweddingnasheed.mp3');
  xhr.responseType = 'arraybuffer';
  xhr.addEventListener('load', function (r) {
    audioCtx.decodeAudioData(xhr.response, function (buffer) {
      source.buffer = buffer;
      source.connect(audioCtx.destination);
      source.loop = true;
    });
    source.start(0);
  });
  xhr.send();
});
