(() => {
  const button = document.querySelector(".audio-toggle");
  if (!button) return;

  const videoId = "BcmhqfnkfEI";
  let player;
  let wantsAudio = false;
  const setButton = (isOn) => {
    button.textContent = isOn ? "Audio: On" : "Audio: Off";
    button.setAttribute("aria-pressed", String(isOn));
  };

  button.addEventListener("click", () => {
    wantsAudio = !wantsAudio;
    setButton(wantsAudio);
    if (!player) return;
    if (wantsAudio) player.playVideo();
    else player.pauseVideo();
  });

  const container = document.createElement("div");
  container.className = "audio-player-container";
  container.setAttribute("aria-hidden", "true");
  container.innerHTML = '<div id="westworld-audio-player"></div>';
  document.body.append(container);

  window.onYouTubeIframeAPIReady = () => {
    player = new YT.Player("westworld-audio-player", {
      width: "200",
      height: "200",
      videoId,
      playerVars: {
        autoplay: 1,
        controls: 0,
        loop: 1,
        playlist: videoId,
        playsinline: 1
      },
      events: {
        onReady: (event) => {
          button.disabled = false;
          if (wantsAudio) event.target.playVideo();
          else event.target.playVideo();
        },
        onStateChange: (event) => {
          if (event.data === YT.PlayerState.PLAYING) {
            wantsAudio = true;
            setButton(true);
          } else if (event.data === YT.PlayerState.PAUSED || event.data === YT.PlayerState.ENDED) {
            wantsAudio = false;
            setButton(false);
          }
        },
        onError: () => {
          button.disabled = true;
          button.textContent = "Audio unavailable";
          button.setAttribute("aria-pressed", "false");
        }
      }
    });
  };

  const api = document.createElement("script");
  api.src = "https://www.youtube.com/iframe_api";
  api.async = true;
  document.head.append(api);
})();
