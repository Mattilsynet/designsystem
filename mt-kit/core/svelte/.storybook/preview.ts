import type {Preview} from '@storybook/svelte'
import '../../../../dist/app.css'
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
