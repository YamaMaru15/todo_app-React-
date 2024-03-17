import { useEffect, useState } from "react";
import './App.css'
import { ColorfulMessage } from './components/ColorfulMessage';

export const App = () => {
  // 配列を受け取る関数、分割代入で受け取る 
  const [num, setNum] = useState(0);
  const [isShowCharacter, setIsShowCharacter] = useState(true);
  const onClickCountUp = () => {
    setNum((prev) => prev + 1);
  };

  // やぁの文字列をの表示非表示を切り替える
  const onClickToggle = () => {
    setIsShowCharacter(!isShowCharacter);
  };

  // 3の倍数の時にだけ、やぁを表示させる。
  useEffect(() => {
    if (num % 3 === 0) {
      isShowCharacter || setIsShowCharacter(true);
    } else {
      isShowCharacter && setIsShowCharacter(false);
    }
  }, [num]);

  return (
    <>
      {/* color,messageというプロップスを渡す */}
      <ColorfulMessage color="pink">やあ、君だね！</ColorfulMessage>
      <p>およぉ</p>
      <button onClick={onClickCountUp}>カウントアップ</button>
       {/* state変数の表示。jsなので{}で囲う */}
      <p>{num}</p>
      <button onClick={onClickToggle}>on・off</button>
      {/* tureの時だけ文字が表示 */}
      {isShowCharacter && <p>やぁ</p>} 
    </>
  );
};
