import React, {InputHTMLAttributes} from 'react'
import classNames from "classnames";

const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({className, ...rest}): JSX.Element =>
  <input className={classNames('form-field', className)} {...rest}/>

export default Input
