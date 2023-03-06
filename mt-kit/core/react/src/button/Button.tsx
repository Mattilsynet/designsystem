import React from 'react'
import classNames from "classnames";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

  /**
   * Different variants of the button
   */
  variant?: 'primary' | 'secondary' | 'flat' | 'link';
  /**
   * Size of the button
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Show a loading spinner on the button
   */
  loading?: boolean

}

const Button: React.FC<ButtonProps> = ({
                                         variant = 'primary',
                                         size = 'medium',
                                         loading = false,
                                         children,
                                         className,
                                         ...rest
                                       }): JSX.Element =>
  <button
    className={classNames('button', `button--${size}`, `button--${variant}`, className)} {...rest}>
    {loading ? <span className="spinner"/> : children}
  </button>

export default Button
