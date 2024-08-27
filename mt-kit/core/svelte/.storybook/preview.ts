import type { Preview } from '@storybook/svelte'
import '../../css/src/app.scss'
import '../src/stories/storybook-utils/docs-stories.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },

  tags: ['autodocs']
}

export default preview
