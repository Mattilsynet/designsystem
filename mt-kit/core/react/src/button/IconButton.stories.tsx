import type {Meta, StoryObj} from '@storybook/react'
import IconButton from './IconButton'
import React from 'react'

const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
  component: IconButton
}

export default meta
type Story = StoryObj<typeof IconButton>

export const Default: Story = {
  args: {
    children: <span className="icon--search-before button__icon" />,
    'aria-label': 'Søk'
  }
}
