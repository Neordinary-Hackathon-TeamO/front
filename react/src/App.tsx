import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

function App() {
  const sendMessageToNative = () => {
    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage('Hello from React!');
    }
  };

  useEffect(() => {
    // React-Native로 데이터 전송

    sendMessageToNative();
  }, []);

  document.addEventListener('message', sendMessageToNative);
  window.addEventListener('message', sendMessageToNative);

  return <Outlet />;
}

export default App;
