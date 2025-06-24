import { MdMessage } from "react-icons/md";
import styles from "./Button.module.css";
const Button = (props) => {
  const{isOutLine,icon,text,...rest} = props;
  return (
    <button {...rest} className={isOutLine ? styles.outLine_btn :styles.primary_btn}>
      <MdMessage />
      {props.icon}
      {props.text}
      </button>
  )
}

export default Button;