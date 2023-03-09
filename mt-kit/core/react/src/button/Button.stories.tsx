import type {Meta, StoryObj} from '@storybook/react'
import Button from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Button'
  }
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Button'
  }
}

export const Large: Story = {
  args: {
    size: 'large',
    children: 'Button'
  }
}

export const Small: Story = {
  args: {
    size: 'small',
    children: 'Button'
  }
}

export const Flat: Story = {
  args: {
    variant: 'flat',
    children: 'Button'
  }
}

export const Closable: Story = {
  args: {
    variant: 'flat',
    className: 'closable',
    children: 'Button'
  }
}

export const IconLeft: Story = {
  args: {
    variant: 'flat',
    className: 'icon--search-before',
    children: 'Button'
  }
}

export const IconRight: Story = {
  args: {
    variant: 'flat',
    className: 'icon--search-after',
    children: 'Button'
  }
}
