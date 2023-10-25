import { BRAND, EVENT_ID, SIGNED_JWT, PORTAL_URL } from "./config";

const getJwt = () => Promise.resolve(SIGNED_JWT);

function createOnError(toast: any) {
  return (error: any) => toast({
    variant: "destructive",
    title: "Error!",
    description: error.message
  });
}

function createOnScormFrameLoad(toast: any) {
  return () => toast({
    description: "SCORM frame loaded 🚦",
  });
}

function createOnPass(toast: any) {
  return () => toast({
    description: "You've passed! ✅"
  });
}

function createOnFinish(toast: any) {
  return () => toast({
    description: "SCORM Finished 👍"
  });
}

export const mountScorm = (
  contentId: string,
  domId: string,
  iframeClassName: string,
  toast: any
) => {
  const el = document.getElementById(domId);

  if (!el || !contentId) {
    return;
  }

  AdministrateScormPlayer.render({
    rootElement: el,
    getJwt,
    portalUrl: PORTAL_URL,
    brandId: BRAND,
    contentId: contentId,
    eventId: EVENT_ID,
    onError: createOnError(toast),
    onScormFrameLoad: createOnScormFrameLoad(toast),
    onPass: createOnPass(toast),
    onFinish: createOnFinish(toast),
    className: iframeClassName,
    /*
    loadingOption: {
      type: "text",
      text: "🏃 Delivering your Learning Content 🚀",
    },*/
    loadingOption: {
      type: "html",
      htmlString:
        '<div class="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>  <div class="">',
    },
    /*loadingOption: {
      type: "nodeId",
      templateId: "scorm-placeholder-loader",
    },*/
    styleOverrides: {},
  });
};
