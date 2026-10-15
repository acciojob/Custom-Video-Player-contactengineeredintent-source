let video = document.querySelector("#myVideo");
let progressTab = document.querySelector("#progressTab");
let playPauseBtn = document.querySelector("#playPauseBtn");
let volumeInput = document.querySelector("#volumeInput");
let speedSelector = document.querySelector("#playbackSpeed");
let rewind = document.querySelector("#rewind");
let playForward = document.querySelector("#forward");
let progressValue = document.querySelector("#progressValue");

//progress functinalitty
function handleProgressUpdate() {
	let percentage = (video.currentTime / video.duration) * 100;
	progressTab.value = percentage;
	// progressValue.textContent =`${percentage.toFixed(2)}%`;
}
let progressClick = 0;
video.addEventListener("timeupdate", handleProgressUpdate);

//seek functionality
progressTab.addEventListener("input",()=>{
  if(!Number.isFinite(video.duration) || video.duration === 0){
    return;
  }
  video.currentTime = (progressTab.value/100)*video.duration;
});
video.addEventListener("timeupdate",()=>{
  if (!Number.isFinite(video.duration) || video.duration === 0) {
    return;
  }

  const progress = (video.currentTime / video.duration) * 100;

  progressTab.value = progress;

  progressTab.style.background = `
    linear-gradient(
      to right,
      #ffc400 ${progress}%,
      rgba(0, 0, 0, 0.6) ${progress}%
    )
  `;
});
//play pause functionality
playPauseBtn.addEventListener("click", (event) => {
  // console.log(playPauseBtn.textContent);
  event.preventDefault();
  if (playPauseBtn.textContent === "▶") {
    video.play();
    playPauseBtn.textContent = "❚ ❚";
  } else {
    video.pause();
    playPauseBtn.textContent = "▶";
  }
});

//volume functionality
function updateVolume() {
  video.volume = volumeInput.value / 100;
  console.log(video.volume);
}
volumeInput.addEventListener("input", updateVolume);

//playback speed functionality
function updatePlaybackSpeed() {
  video.playbackRate = Number(speedSelector.value);
}
speedSelector.addEventListener("input", updatePlaybackSpeed);

//rewind functionality
function replay() {
  video.currentTime -= 10;
}
rewind.addEventListener("click", replay);

//play forward functionality
function increaseSpeed() {
  video.currentTime += 25;
}
playForward.addEventListener("click", increaseSpeed);
