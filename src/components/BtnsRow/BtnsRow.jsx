import style from './BtnsRow.module.css';

export default function BtnsRow({ onClick, slide }) {
  return (
    <div className={style.btns}>
      {[1, 2, 3, 4].map((num) => (
        <button
          key={num}
          onClick={() => onClick(num-1)}
          
          className={ `${style.btn} ${slide === num-1 ? style.activeBtn : ""}`}
        >
          {num}
        </button>
      ))}
    </div>
  );
}
