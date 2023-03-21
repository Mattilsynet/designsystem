import React from 'react'
import classNames from 'classnames'

interface InputLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  textOptional?: string
  isRequired?: boolean
}

const InputLabel: React.FC<InputLabelProps> = ({
  textOptional,
  htmlFor,
  className,
  children,
  isRequired,
  ...rest
}): JSX.Element => (
  <label htmlFor={htmlFor} className={classNames('form-label', className)} {...rest}>
    {children}
    {textOptional != null && isRequired === false && (
      <span className="text-small"> ({textOptional})</span>
    )}
  </label>
)

export default InputLabel
