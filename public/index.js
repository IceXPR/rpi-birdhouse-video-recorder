$(function () {

  $.ajax({
    url: "/api/v1.0/videos",
    data: {},
    success: function (result) {
      for (let video of result.videos) {
        $("#videosList")
          .append('<div class="video_name"><span>' + video + '</span></div>')
          .on("click", playVideo(video))
      }
    }
  });
});

function playVideo(video) {
  return function () {
    $("#videoSource").attr('src', 'bird-videos/' + video);
    var videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.pause()
    videoPlayer.load();
    videoPlayer.play();
  };
}
