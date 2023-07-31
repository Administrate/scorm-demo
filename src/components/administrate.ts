import type { CSSProperties } from "react";

/**
 * Declare globals from the administrate widget scripts
 */

interface LoadingTextOption {
  type: "text";
  text: string;
}

interface LoadingHtmlOption {
  type: "html";
  htmlString: string;
}

interface LoadingTemplateOption {
  type: "nodeId";
  templateId: string;
}

export type LoadingOption =
  | LoadingTextOption
  | LoadingHtmlOption
  | LoadingTemplateOption;

interface RenderScormOptions {
  rootId?: string;
  rootElement?: HTMLElement;
  getJwt: () => Promise<string>;
  brandId: string;
  portalUrl: string;
  contentId: string;
  eventId: string;
  className?: string;
  loadingOption?: LoadingOption;
  styleOverrides?: CSSProperties;
  onError: (error: any) => void;
}

interface RenderVideoOptions {
  accessTokenCallback: () => Promise<string>;
  brand: string;
  contentId: string;
  eventId: string;
  onVideoComplete: Function;
  onError: (err: any) => void;
  onInitialLoad: (video: any) => void;
  onPlay: Function;
  onPause: Function;
}

type RenderScorm = (options: RenderScormOptions) => void;

declare global {
  interface Window {
    AdministrateScormPlayer: {
      render: RenderScorm;
    };
  }

  var AdministrateScormPlayer: Window["AdministrateScormPlayer"];

  class AdministrateVideoPlayer {
    constructor(options: RenderVideoOptions);

    render(element: HTMLElement): void;
  }
}
