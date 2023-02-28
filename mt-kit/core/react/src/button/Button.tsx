import React from 'react'

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props): JSX.Element => {
  const {
    children,
    ...rest
  } = props
  return (
    <button {...rest}>{children}</button>
  )
}

export default Button
