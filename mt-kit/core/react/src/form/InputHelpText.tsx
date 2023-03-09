import React from 'react'

interface InputHelpTextProps {
  name: string
  text?: string
}

const InputHelpText: React.FC<InputHelpTextProps> = ({name, text}): JSX.Element | null =>
  text != null ? (
    <div id={`${name}-hint`} className="hint">
      {text}
    </div>
  ) : null

export default InputHelpText
