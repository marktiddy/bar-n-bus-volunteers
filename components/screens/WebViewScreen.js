import React from "react";
import { WebView } from "react-native-webview";

const WebViewScreen = ({ showUrl }) => {
  return <WebView source={{ uri: showUrl }} />;
};
export default WebViewScreen;
