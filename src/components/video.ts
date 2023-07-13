import { BRAND, EVENT_ID, SIGNED_JWT } from "./config";

const accessTokenCallback = () => Promise.resolve(SIGNED_JWT);

function handleVideoComplete() {
  console.log("Video complete!");
}

function handleError(message: any) {
  console.error(message);
}

function handlePlay() {
  console.log("Played");
}

function handlePause() {
  console.log("Paused");
}

function handleInitialLoad(video: any) {
  console.log(video);
}

const createVideoPlayer = (contentId: string) =>
  new AdministrateVideoPlayer({
    accessTokenCallback,
    brand: BRAND, // e.g. "QnJhbmQ6MQ=="
    contentId: contentId,
    eventId: EVENT_ID,
    onVideoComplete: handleVideoComplete,
    onError: handleError,
    onPlay: handlePlay,
    onPause: handlePause,
    onInitialLoad: handleInitialLoad,
  });

export const mountVideo = (contentId: string, domId: string) => {
  const el = document.getElementById(domId);

  if (!el || !contentId) {
    return;
  }

  const videoPlayer = createVideoPlayer(contentId);
  videoPlayer.render(el);
};
