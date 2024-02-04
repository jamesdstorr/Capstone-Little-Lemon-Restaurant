import style from './Common.module.css';

const Button = ({onlclick, children}) => {
  return (
    <button className={style.primary_button} onlclick={onlclick}>
      {children}
    </button>
  )
};

export default Button;