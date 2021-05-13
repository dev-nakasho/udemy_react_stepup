import { BrowserRouter, Link } from "react-router-dom";

import { Router } from "./components/section5/router/Router";

import { useState, useCallback } from "react";
import { ChildArea } from "./components/ChildArea";
import { CssModule } from "./components/CssModule";
import { Emotion } from "./components/Emotion";
import { InlineStyle } from "./components/InlineStyle";
import { StyledComponents } from "./components/StyledComponents";
import { StyledJsx } from "./components/StyledJsx";

export const App = () => {
  console.log("再描画");

  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const onChangeText = (e) => setText(e.target.value);
  const onClickOpen = () => setOpen(!open);
  const onClickClose = useCallback(() => setOpen(false), []);

  return (
    <>
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <br />
      <ChildArea open={open} onClick={onClickClose} />
      <br />
      <br />
      <br />
      <br />
      <InlineStyle />
      <CssModule />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
      <br />
      <br />
      <br />
      <br />

      <BrowserRouter>
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>

        <Router />
      </BrowserRouter>
    </>
  );
};
