import React from 'react'

const InputErrorMessage: React.FC<{ errorMessage?: string }> = ({errorMessage}): JSX.Element | null =>
  errorMessage ? <span className="form-error">{errorMessage}</span> : null

export default InputErrorMessage
