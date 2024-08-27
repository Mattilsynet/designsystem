import { create } from '@storybook/theming/create'
import logo from '../.storybook/public/logo.svg'

export default create({
  base: 'light',
  brandTitle: 'Mattilsynet',
  brandUrl: 'https://mattilsynet.no',
  brandImage: logo
})
