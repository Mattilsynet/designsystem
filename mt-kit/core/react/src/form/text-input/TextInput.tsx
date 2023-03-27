import React, { useId } from 'react'
import InputLabel from '../InputLabel'
import InputErrorMessage from '../InputErrorMessage'
import Input from '../Input'
import InputHelpText from '../InputHelpText'
import { createInputAriaDescribedby } from '@mattilsynet/designsystem/src/ts/utils'
import { ErrorDetail } from '@mattilsynet/designsystem/src/ts/types'

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Label for the TextInput
   */
  label?: string
  /**
   * Text that will be shown below the label
   */
  helpText?: string
  /**
   * Used to show an error message
   */
  errorMessage?: string
  /**
   * Hidden text that comes before the error message for screen readers
   */
  hiddenErrorText?: string
  /**
   * Text that will be shown after the label in parentheses
   */
  textOptional?: string
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  helpText,
  errorMessage,
  hiddenErrorText,
  textOptional,
  required,
  ...rest
}): JSX.Element => {
  const generatedId = useId()
  const name = 'text-input-' + generatedId
  const errorDetail: ErrorDetail | undefined =
    errorMessage != null ? { key: name, message: errorMessage } : undefined
  const inputAriaDescribedby = createInputAriaDescribedby(
    helpText != null ? name : undefined,
    errorDetail,
    undefined
  )
  return (
    <>
      <InputLabel htmlFor={name} textOptional={textOptional} isRequired={required}>
        {label}
      </InputLabel>
      <InputHelpText name={name} text={helpText} />
      <InputErrorMessage
        name={name}
        errorMessage={errorMessage}
        hiddenErrorText={hiddenErrorText}
      />
      <Input
        id={name}
        type="text"
        aria-required={required}
        aria-describedby={inputAriaDescribedby}
        aria-invalid={errorMessage != null}
        required={required}
        {...rest}
      />
    </>
  )
}

export default TextInput
