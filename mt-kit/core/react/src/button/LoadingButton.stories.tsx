import type {Meta, StoryObj} from '@storybook/react'
import LoadingButton from './LoadingButton'

const meta: Meta<typeof LoadingButton> = {
  title: 'Components/LoadingButton',
  component: LoadingButton
}

export default meta
type Story = StoryObj<typeof LoadingButton>

export const Loading: Story = {
  args: {
    loading: true,
    children: 'Button'
  }
}
