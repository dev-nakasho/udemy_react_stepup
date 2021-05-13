import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(10).keys()];
  const history = useHistory();
  const onClickDetail1 = () => {
    history.push("/page1/detailA");
  };
  const onClickDetail2 = () => {
    history.push({ pathname: "/page1/detailA/3141592", state: arr });
  };

  return (
    <div>
      <h2>Page1ページです。</h2>
      <Link to={{ pathname: "/page1/detailA", state: arr }}>
        DetailA【Link to(stateあり, URLパラメータなし)で遷移】
      </Link>
      <br />
      <Link to="/page1/detailB">DetailB</Link>
      <br />
      <button onClick={onClickDetail1}>
        DetailA【useHistory(stateなし, URLパラメータなし)で遷移】
      </button>
      <br />
      <button onClick={onClickDetail2}>
        DetailA【useHistory(stateあり, URLパラメータあり)で遷移】
      </button>
    </div>
  );
};
