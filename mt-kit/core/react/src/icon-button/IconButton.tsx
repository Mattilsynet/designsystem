import React from 'react'
import classNames from "classnames";

const IconButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
                                                                               children,
                                                                               className,
                                                                               ...rest
                                                                             }): JSX.Element =>
  <button className={classNames('icon-button', className)} {...rest}>{children}</button>

export default IconButton
