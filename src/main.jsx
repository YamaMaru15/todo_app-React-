// 厳格にチェックする構文
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// 変数はパスカルケース
const App = () => {
  return (
    <>
      <h1>やっほそ！</h1>
      <p>およぉ</p>
    </>
  );
};

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);