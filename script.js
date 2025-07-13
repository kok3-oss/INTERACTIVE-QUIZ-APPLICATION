function playVideo(videoPath) {
  const video = document.getElementById("courseVideo");
  video.src = videoPath;
  video.load();
  video.play();
}
