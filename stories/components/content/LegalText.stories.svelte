<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf'
  import CardArticle from '../../../src/svelte/CardArticle.svelte'
  import Disclosure from '../../../src/svelte/Disclosure.svelte'
  const icon = `<svg width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="15" r="15" fill="#3F3E3E"/><path d="M11.934 12.514c-.209-.144-.433-.404-.674-.782a3.295 3.295 0 0 1-.371-1.562c0-.97.345-1.807 1.035-2.51.696-.703 1.709-1.055 3.037-1.055 1.588 0 2.715.521 3.379 1.563.358.56.566 1.26.625 2.1h-2.52c-.045-.391-.143-.7-.293-.928-.267-.404-.706-.606-1.318-.606-.41 0-.745.101-1.006.303-.26.195-.39.485-.39.87 0 .442.227.774.683.995.456.222 1.292.612 2.51 1.172 2.122 1.003 3.183 2.165 3.183 3.486 0 .827-.24 1.511-.722 2.051-.267.3-.658.583-1.172.85.364.312.631.605.8.879.3.475.45 1.035.45 1.68 0 1.243-.43 2.19-1.29 2.841a4.638 4.638 0 0 1-2.89.987c-1.159 0-2.145-.29-2.959-.87-.807-.579-1.266-1.54-1.377-2.88h2.637c.091.481.221.83.39 1.045.28.364.74.546 1.378.546.39 0 .726-.12 1.005-.36.28-.242.42-.554.42-.938 0-.345-.146-.648-.44-.909-.292-.26-1.122-.735-2.49-1.425-1.19-.586-2.005-1.068-2.44-1.446-.697-.605-1.046-1.34-1.046-2.207 0-.813.235-1.487.704-2.021.273-.32.66-.609 1.162-.87Zm5.449 3.73c0-.293-.156-.573-.469-.84a4.333 4.333 0 0 0-.703-.44l-2.92-1.484c-.338.144-.58.355-.723.635a1.292 1.292 0 0 0-.136.586c0 .32.14.602.42.85.162.15.449.332.859.547l2.773 1.455c.215-.091.397-.225.547-.4.235-.255.352-.557.352-.909Z" fill="#fff"/></svg>`
</script>

<Meta
  title="Innhold/Lovtekst"
  args={{
    title: `Forskrift om omsetning og midlertidig hold av dyr, § 5 andre ledd`,
    text: `<p>
        Det skal utarbeides skriftlige rutiner for etterlevelse av forskriftsfestede krav om å ivareta dyrenes velferd,
        blant annet om
      </p>
      <ul>
        <li>Kompetanse</li>
        <li>fôring og stell</li>
        <li>aktivisering og mosjon</li>
        <li>tilrettelegging for utøvelse av naturlig atferd</li>
      </ul>
      <p>Utformingen av rutinene skal være tilpasset virksomhetens egenart.</p>`,
    icon,
    disableCss: false
  }}
  argTypes={{
    disableCss: {control: 'boolean'}
  }} />

<Story name="Normal" let:disableCss let:title let:text let:icon>
  <div class="container">
    <CardArticle type="legal-text" {title} {text} id={title} />
    <hr />
    <Disclosure theme="light-blue" {title} {icon}>
      {@html text}
    </Disclosure>
  </div>
</Story>
