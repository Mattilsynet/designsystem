import React from 'react'
import Button, { ButtonProps } from './Button'

interface LoadingButtonProps extends ButtonProps {
  /**
   * Show a loading spinner on the button
   */
  isLoading?: boolean
  /**
   * Hidden text used by screen reader when isLoading is true
   */
  hiddenLoadingText?: string
}

const LoadingButton: React.FC<LoadingButtonProps> = ({
  isLoading,
  hiddenLoadingText = 'Loading',
  children,
  ...rest
}): JSX.Element => (
  <Button {...rest}>
    <div style={{ visibility: isLoading === true ? 'hidden' : 'visible' }}>{children}</div>
    <div role="status" aria-live="polite" style={{ position: 'absolute' }}>
      {isLoading === true && (
        <>
          <span className="spinner" />
          <span className="inclusively-hidden">{hiddenLoadingText}</span>
        </>
      )}
    </div>
  </Button>
)

export default LoadingButton
