$(function () {

  $.ajax({
    url: "/api/v1.0/videos",
    data: {},
    success: function (result) {
      for (let video of result.videos) {
        $("#videosDiv")
          .append('<video width="560" controls><source src="bird-videos/' + video + '" type="video/mp4"></source>')
          .append('<div><span class="video_name">' + video + '</span></div>')
      }
    }
  });

});