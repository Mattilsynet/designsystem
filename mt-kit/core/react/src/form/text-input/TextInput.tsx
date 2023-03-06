import React from 'react'
import InputLabel from "../InputLabel";
import InputErrorMessage from "../InputErrorMessage";
import Input from "../Input";
import InputHelpText from "../InputHelpText";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  helpText?: string
  errorMessage?: string,
  textOptional?: string
}

const TextInput: React.FC<TextInputProps> = ({
                                               label,
                                               helpText,
                                               errorMessage,
                                               textOptional,
                                               ...rest
                                             }): JSX.Element =>
  <>
    <InputLabel textOptional={textOptional}>{label}</InputLabel>
    <InputHelpText text={helpText}/>
    <InputErrorMessage errorMessage={errorMessage}/>
    <Input type='text' {...rest}/>
  </>

export default TextInput
