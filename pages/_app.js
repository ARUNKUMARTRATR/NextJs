import "@/styles/globals.scss";
import "@contentful/live-preview/style.css";
import { ContentfulLivePreviewProvider } from "@contentful/live-preview/react";
import { SDKProvider } from "@contentful/react-apps-toolkit";

export default function App({ Component, pageProps }) {
  return pageProps?.useSdkComp ? (
    <SDKProvider>
      <ContentfulLivePreviewProvider
        locale="en-US"
        enableInspectorMode={true} // Optional: allows you to toggle inspector mode which is on by default.
        enableLiveUpdates={true} // Optional: allows you to toggle live updates which are on by default.
      >
        <Component {...pageProps} />
      </ContentfulLivePreviewProvider>
    </SDKProvider>
  ) : (
    <ContentfulLivePreviewProvider
      locale="en-US"
      enableInspectorMode={true} // Optional: allows you to toggle inspector mode which is on by default.
      enableLiveUpdates={true} // Optional: allows you to toggle live updates which are on by default.
    >
      <Component {...pageProps} />
    </ContentfulLivePreviewProvider>
  );
}
