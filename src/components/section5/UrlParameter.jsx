import { useLocation, useParams } from "react-router-dom";

export const UrlParameter = () => {
  const { userid } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search).get("name");

  return (
    <div>
      <h2>UrlParameterページです。</h2>
      <p>遷移元から渡ってきたURL Parameterは「 {userid} 」です。</p>
      <p>遷移元から渡ってきたQuery Parameterは「 {query} 」です。</p>
    </div>
  );
};
