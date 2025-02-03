import '@mattilsynet/design/styles.css'
import type { Preview } from '@storybook/svelte'
import theme from './theme'
import '../../css/src/app.scss'
import '../src/stories/storybook-utils/docs-stories.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    docs: {
      theme
    }
  },

  tags: ['autodocs']
}

export default preview
