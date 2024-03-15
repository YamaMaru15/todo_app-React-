import './App.css'
import { ColorfulMessage } from './components/ColorfulMessage';


// 変数はパスカルケース
const style = {
  color: "green",
  fontSize: "56px",
};

export const App = () => {
  const onClickButton = () => alert();
  return (
    <>
      <h1 style = {style}>やっほそ！</h1>
      <ColorfulMessage />
      <p>およぉ</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
