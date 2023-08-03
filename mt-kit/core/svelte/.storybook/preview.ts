import type {Preview} from '@storybook/svelte'
import '@mattilsynet/designsystem-css/dist/app.css'
import '../src/stories/storybook-utils/docs-stories.css'

const preview: Preview = {
  parameters: {
    actions: {argTypesRegex: '^on[A-Z].*'},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
}

export default preview
