(() => {
  const button = document.querySelector(".audio-toggle");
  if (!button) return;

  const videoId = "BcmhqfnkfEI";
  const storageKey = "rebus-audio-enabled";
  const isHomePage = document.body.classList.contains("home-page");
  let player;
  let wantsAudio = isHomePage;
  try {
    const savedPreference = window.localStorage.getItem(storageKey);
    if (savedPreference !== null) wantsAudio = savedPreference === "true";
    else if (isHomePage) window.localStorage.setItem(storageKey, "true");
  } catch (error) {
    // Audio still works when browser storage is unavailable.
  }
  const setButton = (isOn) => {
    button.textContent = isOn ? "Audio: On" : "Audio: Off";
    button.setAttribute("aria-pressed", String(isOn));
  };

  setButton(wantsAudio);

  button.addEventListener("click", () => {
    wantsAudio = !wantsAudio;
    setButton(wantsAudio);
    try {
      window.localStorage.setItem(storageKey, String(wantsAudio));
    } catch (error) {
      // Keep the current preference for this page if storage is unavailable.
    }
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
        autoplay: 0,
        controls: 0,
        loop: 1,
        playlist: videoId,
        playsinline: 1
      },
      events: {
        onReady: (event) => {
          button.disabled = false;
          if (wantsAudio) event.target.playVideo();
          else event.target.pauseVideo();
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
