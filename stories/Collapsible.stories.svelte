<script>
  import '../src/css/components/collapsible.css';
  import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
  import {collapsible} from '../src/ts/components/collapsible';
  import {wrapInShadowDom} from './utils';
</script>

<Meta
  title="Components/Disclosure"
  argTypes={{
    header1: {control: 'text'},
    header2: {control: 'text'},
    noJs: {control: 'boolean'},
    noCss: {control: 'boolean'}
  }}
/>

<Template let:args>
  <section use:wrapInShadowDom={args.noCss}>
    <div class="collapsible" use:collapsible={{id: 0, abort: args.noJs}}>
      <h3 class="collapsible-header">{args.header1}</h3>
      <div class="collapsible-panel">
        <p>Lorem ipsum dolor sit amet, consecetur adipiscing elit.</p>
      </div>
    </div>

    <div class="collapsible" use:collapsible={{id: 1, abort: args.noJs}}>
      <h3 class="collapsible-header">{args.header2}</h3>
      <div class="collapsible-panel">
        <p>Lorem ipsum dolor sit amet, consecetur adipiscing elit.</p>
      </div>
    </div>
  </section>
</Template>

<Story
  name="Normal"
  args={{
    header1: 'Min overskrift',
    header2: 'Annen overskrift',
    noJs: false,
    noCss: false
  }}
/>

<Story
  name="Before progressive enhancement"
  args={{
    header1: 'Første seksjon',
    header2: 'Andre seksjon',
    noJs: true,
    noCss: true
  }}
/>
