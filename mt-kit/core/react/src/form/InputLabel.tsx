import React from 'react'
import classNames from "classnames";

interface InputLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  textOptional?: string
}

const InputLabel: React.FC<InputLabelProps> = ({textOptional, className, children, ...rest}): JSX.Element =>
  <label className={classNames('form-label', className)} {...rest}>{children}{textOptional &&
    <span className="text-small"> ({textOptional})</span>}</label>

export default InputLabel
