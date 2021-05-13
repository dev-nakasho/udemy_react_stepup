import { Link } from "react-router-dom";
import styled from "styled-components";

export const Page404 = () => {
  return (
    <S404Container>
      <h2>404</h2>
      <p>ページが存在しません。</p>
      <Link to="/">TOPに戻る</Link>
    </S404Container>
  );
};

const S404Container = styled.div`
  background-color: skyblue;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3px 100px;
`;
