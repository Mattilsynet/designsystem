import React from 'react'

const InputHelpText: React.FC<{ text?: string }> = ({text}): JSX.Element | null => text ?
  <div className="hint">{text}</div> : null

export default InputHelpText
