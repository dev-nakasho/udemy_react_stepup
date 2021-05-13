import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h2>Page2ページです。</h2>
      <Link to="/page2/100">UrlParameter</Link>
      <br />
      <Link to="/page2/638?name=hogehoge">QueryParameter</Link>
    </div>
  );
};
