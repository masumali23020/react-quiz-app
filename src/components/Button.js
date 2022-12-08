
import classes from "../style/Button.module.css"

const Button = ({children}) => {
  return (
    <>
    <button className={classes.button}>
    <span>{children} </span>
    </button>
 
  </>
  )
}

export default Button