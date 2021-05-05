import React, { useState } from "react";

export const App = () => {
  console.log("再描画");
  const [count, setCount] = useState(0);
  const onClickCountup = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h2>
        Reactに入門した人のためのもっとReactが楽しくなるステップアップコース完全版
      </h2>
      <p>{count}</p>
      <button onClick={onClickCountup}>カウントアップ</button>
    </>
  );
};
