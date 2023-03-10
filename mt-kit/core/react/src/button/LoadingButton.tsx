import React from 'react'
import Button, {ButtonProps} from './Button'

interface LoadingButtonProps extends ButtonProps {
  /**
   * Show a loading spinner on the button
   */
  isLoading?: boolean
}

const LoadingButton: React.FC<LoadingButtonProps> = ({
  isLoading,
  children,
  ...rest
}): JSX.Element => (
  <Button {...rest}>
    <div style={{visibility: isLoading === true ? 'hidden' : 'visible'}}>{children}</div>
    {isLoading === true && <span style={{position: 'absolute'}} className="spinner" />}
  </Button>
)

export default LoadingButton
