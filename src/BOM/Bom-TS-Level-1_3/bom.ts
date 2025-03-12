type BrowserInfo = {
  browserName: string;
  osArchitecture: string;
  browserVersion: string;
  windowResulation: string;
  documentSize: string;
  colorDepth: number;
  pixelDepth: number;
};

function getBrowserInfo(): BrowserInfo {
  const navigatorInfo = window.navigator;
  const userAgent = navigator.userAgent;
  const platform = navigator.platform || "Unknown";
  const appVersion = navigator.appVersion;
  const screenWidth = window.screen.width;
  const screenHeigth = window.screen.height;
  const innerWidth = window.innerWidth;
  const innerHeight = window.innerHeight;
  const colorDepth = window.screen.colorDepth;
  const pixelDepth = window.screen.pixelDepth;

  let browserName = "Unknown";
  if (userAgent.includes("Chrome")) {
    browserName = "Google Chrome";
  } else if (userAgent.includes("Firefox")) {
    browserName = "Mozilla Firefox";
  } else if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) {
    browserName = "Apple Safari";
  } else if (userAgent.includes("Edge")) {
    browserName = "Microsoft Edge";
  } else if (userAgent.includes("MSIE") || userAgent.includes("Trident")) {
    browserName = "Internet Explorer";
  }

  return {
    browserName,
    osArchitecture: platform,
    browserVersion: appVersion,
    windowResulation: `${screenWidth}x${screenHeigth}`,
    documentSize: `${innerWidth}x${innerHeight}`,
    colorDepth,
    pixelDepth,
  };
}

function displayBrowserInfo(): void {
  const info = getBrowserInfo();
  const container = document.createElement("div");
  container.style.fontFamily = "Arial, sans-serif";
  container.style.padding = "10px";
  container.style.border = "1px solid #ccc";
  container.style.width = "fit-content";
  container.style.margin = "20px";

  Object.entries(info).forEach(([key, value]) => {
    const p = document.createElement("p");
    p.textContent = `${key}:${value}`;
    container.appendChild(p);
  });

  document.body.appendChild(container);
}

document.addEventListener("DOMContentLoaded", displayBrowserInfo);
