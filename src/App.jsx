import './App.css'
import { ColorfulMessage } from './components/ColorfulMessage';


// 変数はパスカルケース
const style = {
  color: "green",
  fontSize: "10px",
};

export const App = () => {
  const onClickButton = () => alert();
  return (
    <>
      <h1 style = {style}>やっほそ！</h1>
      {/* color,messageというプロップスを渡す */}
      <ColorfulMessage color="pink">やあ、君だね！</ColorfulMessage>
      <p>およぉ</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
