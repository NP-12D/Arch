import style from "./NotFound.module.css";
export default function NotFound() {
  return (
    <>
    <div className={style.section}>
      <div className={style.logo}>
        <img src="/logoWhite.svg" alt="Arch Logo" />
      </div>
      <div className={style.text}>
      <h1>Page Not Founde</h1>
      <h1>404</h1>
      </div>
      </div>
    </>
  );
}
