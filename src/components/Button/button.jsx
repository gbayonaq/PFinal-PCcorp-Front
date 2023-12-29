import Style from './button.module.css';

const Button = ({ text, onClick, style}) => {
  return (
    <button onClick={onClick} style={style} className={Style.button}>
        {text}
    </button>
  )
}

export default Button