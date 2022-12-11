$(function () {

  $.ajax({
    url: "/api/v1.0/videos",
    data: {},
    success: function (result) {
      for (let video of result.videos) {
        $("#videosList")
          .append('<span class="video_name">' + video + '</span>')
      }

      $(".video_name").on("click", function(event) {
        const video = $(event.target).text()
        console.log(video)
          $("#videoSource").attr('src', 'bird-videos/' + video);
          var videoPlayer = document.getElementById('videoPlayer');
          videoPlayer.pause();
          videoPlayer.load();
          videoPlayer.play();
      });
    }
  });



});



