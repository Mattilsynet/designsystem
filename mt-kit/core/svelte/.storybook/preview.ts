import '@mattilsynet/design/styles.css'
import type { Preview } from '@storybook/svelte'
import theme from './theme'
import '../../css/src/app.scss'

const preview: Preview = {
  decorators: [
    partialStoryFn => {
      document.documentElement.setAttribute('lang', 'nb')
      return partialStoryFn()
    }
  ],
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
