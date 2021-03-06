let audioPlaying = true,
  backgroundAudio,
  browser;
browser = navigator.userAgent.toLowerCase();
$(
  '<audio class="audio1" src="/audio/theweddingnasheed.mp3" loop></audio>'
).prependTo('body');
if (!browser.indexOf('firefox') > -1) {
  $(
    '<embed id="background-audio" src="/audio/theweddingnasheed.mp3" autostart="1"></embed>'
  ).prependTo('body');
  backgroundAudio = setInterval(function () {
    $('#background-audio').remove();
    $(
      '<embed id="background-audio" src="/audio/theweddingnasheed.mp3"></embed>'
    ).prependTo('body');
  }, 120000); // 120000 is the duration of your audio which in this case 2 mins.
}

$('document').on('load', function (event) {
  audioPlaying = !audioPlaying;
  $('#background-audio').remove();

  clearInterval(backgroundAudio);
  if (audioPlaying) {
    $('.audio1').play();
    // play audio
  } else {
    $('.audio1').pause();
  }
});
