import Classes from "./CssModule.module.scss";

export const CssModule = () => {
  return (
    <div className={Classes.container}>
      <p className={Classes.title}>- CSS Module -</p>
      <button className={Classes.button}>設定</button>
    </div>
  );
};
