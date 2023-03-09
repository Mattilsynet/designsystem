import React from 'react'
import classNames from 'classnames'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Different variants of the button
   */
  variant?: 'primary' | 'secondary' | 'flat' | 'link'
  /**
   * Size of the button
   */
  size?: 'small' | 'medium' | 'large'
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  children,
  className,
  ...rest
}): JSX.Element => (
  <button
    className={classNames('button', `button--${size}`, `button--${variant}`, className)}
    {...rest}
  >
    {children}
  </button>
)

export default Button
