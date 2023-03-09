import React from 'react'
import Button, {ButtonProps} from './Button'

interface LoadingButtonProps extends ButtonProps {
  /**
   * Show a loading spinner on the button
   */
  loading?: boolean
}

const LoadingButton: React.FC<LoadingButtonProps> = ({loading, children, ...rest}): JSX.Element => (
  <Button {...rest}>
    <div style={{visibility: loading === true ? 'hidden' : 'visible'}}>{children}</div>
    {loading === true && <span style={{position: 'absolute'}} className="spinner" />}
  </Button>
)

export default LoadingButton
