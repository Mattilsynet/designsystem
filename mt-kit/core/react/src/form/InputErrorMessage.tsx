import React from 'react'

interface InputErrorMessageProps {
  name: string
  errorMessage?: string
  hiddenErrorText?: string
}

const InputErrorMessage: React.FC<InputErrorMessageProps> = ({
  name,
  errorMessage,
  hiddenErrorText = 'Feilmelding'
}): JSX.Element | null => {
  if (errorMessage != null) {
    return (
      <span id={`${name}-error`} className="form-error">
        <span className="inclusively-hidden">{hiddenErrorText}:</span>
        {errorMessage}
      </span>
    )
  } else {
    return null
  }
}

export default InputErrorMessage
