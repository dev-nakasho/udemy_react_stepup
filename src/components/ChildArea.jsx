import { memo } from "react";

export const ChildArea = memo((props) => {
  const style = {
    width: "100%",
    height: "200px",
    backgroundColor: "khaki",
  };

  const { open, onClick } = props;

  console.log("ChildAreaがレンダリングされた！");
  // eslint-disable-next-line
  const data = [...Array(100).keys()];

  data.forEach(() => {
    console.log("...");
  });

  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClick}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
