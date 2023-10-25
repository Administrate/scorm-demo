import { BRAND, EVENT_ID, SIGNED_JWT } from "./config";

const accessTokenCallback = () => Promise.resolve(SIGNED_JWT);

function handleVideoComplete(toast: any) {
  return () => toast({
    description: "Video complete! ✅"
  });
}

function handleError(toast: any) {
  return (message: any) => toast({
    variant: "destructive",
    title: "Error!",
    description: message
  });
}

function handlePlay(toast: any) {
  return () => toast({
    description: "Video playing ▶️"
  });
}

function handlePause(toast: any) {
  return () => toast({
    description: "Video paused ⏸️"
  });
}

function handleInitialLoad(toast: any) {
  return (video: any) => {
    toast({
      title: "Video loaded 🚦"
    });
    console.log(video);
  };
}

const createVideoPlayer = (contentId: string, toast: any) =>
  new AdministrateVideoPlayer({
    accessTokenCallback,
    brand: BRAND, // e.g. "QnJhbmQ6MQ=="
    contentId: contentId,
    eventId: EVENT_ID,
    onVideoComplete: handleVideoComplete(toast),
    onError: handleError(toast),
    onPlay: handlePlay(toast),
    onPause: handlePause(toast),
    onInitialLoad: handleInitialLoad(toast),
  });

export const mountVideo = (contentId: string, domId: string, toast: any) => {
  const el = document.getElementById(domId);

  if (!el || !contentId) {
    return;
  }

  const videoPlayer = createVideoPlayer(contentId, toast);
  videoPlayer.render(el);
};
