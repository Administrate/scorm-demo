import { BRAND, EVENT_ID, SIGNED_JWT, PORTAL_URL } from "./config";

const getJwt = () => Promise.resolve(SIGNED_JWT);

function handleError(error: any) {
  console.error(error.message);
}

export const mountScorm = (
  contentId: string,
  domId: string,
  iframeClassName: string
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
    onError: handleError,
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
