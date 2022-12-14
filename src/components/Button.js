
import classes from "../style/Button.module.css"

const Button = ({className,children, ...rest}) => {
  return (
    <>
    <button className={`${classes.button} ${className}` } {...rest}>
    {children}
    </button>
 
  </>
  )
}

export default Button