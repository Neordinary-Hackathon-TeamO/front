import React from "react";
import { useRef } from "react";
import { SafeAreaView, Button, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

const App: React.FC = () => {
  const webviewRef = useRef<any>(null);

  const sendMessageToWeb = () => {
    const message = JSON.stringify({ type: "GREETING", payload: "Hello Web!" });
    console.log("rn -> web");
    webviewRef.current.postMessage(message); // React로 데이터 전송
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Send to Web" onPress={sendMessageToWeb} />
      <WebView
        ref={webviewRef}
        source={{ uri: "http://10.100.201.111:5173/create" }}
        javaScriptEnabled
        onMessage={(event) => {
          console.log(event); 
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
