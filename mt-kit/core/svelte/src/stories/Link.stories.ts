import type {Meta, StoryObj} from '@storybook/svelte'

import Link from '../svelte/components/Link.svelte'

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
  title: 'Components/Link',
  component: Link,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<Link>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Normal: Story = {
  args: {
    linkText: 'Regular link',
    href: 'https://www.mattilsynet.no'
  }
}
export const BackLink: Story = {
  args: {
    linkText: 'Back',
    href: 'https://www.mattilsynet.no',
    class: 'back-arrow'
  }
}
export const AnchorLink: Story = {
  args: {
    linkText: 'Link to anchor',
    href: 'https://www.mattilsynet.no',
    class: 'down-arrow'
  }
}
export const PDFLink: Story = {
  args: {
    linkText: 'Link to PDF',
    href: 'https://www.mattilsynet.no',
    class: 'document',
    fileName: 'dokument.pdf'
  }
}
