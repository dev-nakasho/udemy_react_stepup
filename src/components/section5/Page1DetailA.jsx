import { useHistory, useLocation, useParams } from "react-router-dom";

export const Page1DetailA = () => {
  const { state } = useLocation();
  const { userid } = useParams();
  const history = useHistory();
  const onClikcBack = () => {
    history.goBack();
  };

  return (
    <div>
      <h2>Page1 - DetailAページです。</h2>
      {state ? (
        <>
          <p>遷移元画面から受け取ったstate</p>
          <ul>
            {state.map((elem) => (
              <li key={elem}>{elem}</li>
            ))}
          </ul>
        </>
      ) : (
        <p>遷移元画面から受け取ったstateはありません。</p>
      )}
      {userid ? (
        <>
          <p>ついでに遷移元画面から受け取ったのは、</p>
          <p>URLパラメータ：{userid} です。</p>
        </>
      ) : (
        <p>遷移元画面からはURLパラメータは渡されていません。</p>
      )}
      <button onClick={onClikcBack}>戻る</button>
    </div>
  );
};
