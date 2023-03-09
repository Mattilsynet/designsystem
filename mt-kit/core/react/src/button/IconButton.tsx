import React from 'react'
import classNames from 'classnames'

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label': string
}

const IconButton: React.FC<IconButtonProps> = ({
  children,
  'aria-label': ariaLabel,
  className,
  ...rest
}): JSX.Element => (
  <button aria-label={ariaLabel} className={classNames('icon-button', className)} {...rest}>
    {children}
  </button>
)

export default IconButton
