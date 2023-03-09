import React from 'react'
import classNames from 'classnames'

interface InputLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  textOptional?: string
}

const InputLabel: React.FC<InputLabelProps> = ({
  textOptional,
  htmlFor,
  className,
  children,
  ...rest
}): JSX.Element => (
  <label htmlFor={htmlFor} className={classNames('form-label', className)} {...rest}>
    {children}
    {textOptional != null && <span className="text-small"> ({textOptional})</span>}
  </label>
)

export default InputLabel
