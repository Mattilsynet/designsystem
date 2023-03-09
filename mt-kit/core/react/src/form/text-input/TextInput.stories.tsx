import type {Meta, StoryObj} from '@storybook/react'
import React from 'react'
import TextInput from './TextInput'

const meta: Meta<typeof TextInput> = {
  title: 'Components/TextInput',
  component: TextInput,
  decorators: [
    Story => (
      <form>
        <Story />
      </form>
    )
  ]
}

export default meta
type Story = StoryObj<typeof TextInput>

export const Default: Story = {
  args: {
    label: 'Input 1',
    helpText: 'Tekst som beskriver hva som skal fylles inn i dette feltet',
    errorMessage: undefined,
    textOptional: 'Valgfritt felt',
    required: false
  }
}

export const Error: Story = {
  args: {
    ...Default.args,
    errorMessage: 'Fyll inn dette feltet'
  }
}
