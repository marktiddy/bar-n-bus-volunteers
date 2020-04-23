import React from "react";
import { WebView } from "react-native-webview";

const WebViewScreen = ({ showUrl }) => {
  const url = showUrl.route.params.showUrl;
  return <WebView source={{ uri: url }} />;
};
export default WebViewScreen;
