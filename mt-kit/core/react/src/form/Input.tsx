import React, {InputHTMLAttributes} from 'react'
import classNames from 'classnames'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = ({className, ...rest}): JSX.Element => {
  return <input className={classNames('form-field', className)} {...rest} />
}

export default Input
