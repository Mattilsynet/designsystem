<script lang="ts">
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
  import Dropdown from '../lib/svelte/components/Dropdown.svelte'
  import CardArticle from '../lib/svelte/components/CardArticle.svelte'
  import { wrapInShadowDom } from './storybook-utils/utils'

  const drinkIcon =
    '<svg width="60" height="50" viewBox="0 0 60 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M47.5837 4C47.9311 4 48.2619 4.15366 48.4857 4.41919C48.7103 4.68628 48.8051 5.03679 48.7474 5.37993L41.9575 45.0191C41.8611 45.5858 41.3688 46 40.7945 46H19.1464C18.5713 46 18.0805 45.5873 17.9819 45.0206L11.1168 5.38265C11.0584 5.03858 11.1533 4.68698 11.3771 4.42067C11.6017 4.15397 11.9324 4 12.2799 4H47.5837ZM29.5035 20.2948C36.3769 23.7314 41.4226 21.5602 43.8443 20.0163L46.1824 6.36134H13.6833L15.7681 18.3978C18.4749 17.8417 23.7157 17.4005 29.5035 20.2948ZM16.6589 21.2945L20.3648 43.5294H39.5119L43.2177 23.7651C38.2766 25.6179 34.5707 25.6179 28.3942 22.5298C22.6363 19.6509 19.1535 20.6087 16.8822 21.2333C16.8064 21.2541 16.732 21.2746 16.6589 21.2945Z" fill="#F9F6F1"/></svg>'
  const fishIcon =
    '<svg width="60" height="50" viewBox="0 0 60 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M57.5313 27.5678C57.8099 27.9074 57.838 28.3793 57.569 28.7266C55.0053 32.0366 40.9991 47.6586 15.4295 31.8358L3.22077 35.9471C2.38615 36.2282 1.62203 35.3712 1.99656 34.5741L6.49018 25.011L2.01356 14.2561C1.66897 13.4282 2.50407 12.6003 3.32895 12.9519L15.4294 18.1107C41.0809 -0.163448 55.2047 17.6844 57.5137 21.0031C57.7307 21.315 57.7235 21.7156 57.5204 22.0367L55.5499 25.152L57.5313 27.5678ZM52.9107 25.152L55.2503 21.5125C55.2503 21.5125 40.5114 1.58796 15.9371 20.5276L5.76605 16.6392L8.79354 24.8064L5.48405 33.0448L15.4111 28.9119C40.4084 46.5838 55.2503 28.1392 55.2503 28.1392L52.9107 25.152ZM46.8131 22.372C46.8131 20.9668 45.6745 19.8366 44.2721 19.8366C42.874 19.8366 41.7452 20.9675 41.7452 22.372C41.7452 23.7595 42.874 24.9052 44.2721 24.9052C45.6744 24.9052 46.8131 23.7595 46.8131 22.372Z" fill="#F9F6F1"/></svg>'
  const animalIcon =
    '<svg width="60" height="50" viewBox="0 0 60 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M30.0266 40.7415C26.1636 40.7415 23.0209 37.6084 23.0209 33.7565C23.0209 29.9046 26.1636 26.771 30.0266 26.771C33.8896 26.771 37.0323 29.9046 37.0323 33.7565C37.0323 37.6084 33.8896 40.7415 30.0266 40.7415ZM30.0266 29.3516C27.5913 29.3516 25.6096 31.3276 25.6096 33.7559C25.6096 36.1842 27.5913 38.1595 30.0266 38.1595C32.4626 38.1595 34.4436 36.1836 34.4436 33.7559C34.4436 31.3276 32.4626 29.3516 30.0266 29.3516ZM31.9682 32.3498C31.253 32.3498 30.6738 32.9273 30.6738 33.6404C30.6738 34.3535 31.253 34.931 31.9682 34.931C32.6833 34.931 33.2625 34.3535 33.2625 33.6404C33.2625 32.9273 32.6833 32.3498 31.9682 32.3498ZM28.0851 32.3498C27.37 32.3498 26.7907 32.9273 26.7907 33.6404C26.7907 34.3535 27.37 34.931 28.0851 34.931C28.8002 34.931 29.3795 34.3535 29.3795 33.6404C29.3795 32.9273 28.8002 32.3498 28.0851 32.3498ZM49.9067 2.57737C48.5269 1.73716 46.4339 1.81783 44.3105 2.79419C42.1612 3.78088 40.2423 5.52647 38.9059 7.70893C38.6872 8.06579 38.484 8.4304 38.2892 8.79759C35.7826 7.60956 32.9817 6.9423 30.0273 6.94101H30.0221H30.0169C27.0626 6.94294 24.2616 7.6102 21.755 8.79759C21.5596 8.43104 21.357 8.06644 21.1383 7.70893C19.8025 5.52647 17.883 3.78088 15.7337 2.79419C13.6097 1.81783 11.5167 1.73716 10.1375 2.57737C7.72745 4.04417 7.6802 8.28714 10.0431 12.9328L12.6797 17.7107C11.4054 20.281 10.6857 23.1714 10.6857 26.227C10.6857 34.0534 15.3286 40.9835 22.5504 44.0016C24.2234 46.5106 26.9823 47.9961 30.0182 47.9994V48H30.0234H30.0286V47.9994C33.0645 47.9961 35.8228 46.5106 37.4964 44.0016C44.7182 40.9835 49.3611 34.0534 49.3611 26.227C49.3611 23.1714 48.6414 20.281 47.3671 17.7107L50.0037 12.9328C52.364 8.28714 52.3168 4.04417 49.9067 2.57737ZM12.3302 11.7273C10.465 8.05805 10.6469 5.29093 11.485 4.78048C11.9962 4.47073 13.1728 4.45976 14.6497 5.13863C16.3369 5.91366 17.8564 7.30432 18.9275 9.05442C19.1301 9.38483 19.3171 9.72297 19.4957 10.0618C17.428 11.406 15.634 13.1322 14.2135 15.1404L12.3302 11.7273ZM36.1476 41.7617C35.8817 41.8656 35.6577 42.0553 35.5115 42.2999C34.3407 44.252 32.2892 45.4174 30.0215 45.4187C27.7537 45.4168 25.7022 44.2514 24.5314 42.2999C24.3845 42.0553 24.1613 41.8656 23.8953 41.7617C17.4422 39.2263 13.2731 33.1293 13.2731 26.2276C13.2731 17.0176 20.7862 9.52486 30.0215 9.52163C39.2573 9.52486 46.7698 17.0176 46.7698 26.2276C46.7698 33.1293 42.6007 39.2263 36.1476 41.7617ZM47.7127 11.7273L45.8288 15.1404C44.4082 13.1315 42.6143 11.4053 40.5465 10.0618C40.7251 9.72297 40.9128 9.38483 41.1147 9.05442C42.1865 7.30432 43.7054 5.91366 45.3926 5.13863C46.8695 4.4604 48.0467 4.47073 48.5573 4.78048C49.3967 5.29093 49.5779 8.05805 47.7127 11.7273ZM24.5354 20.9412C24.5354 21.6884 23.9296 22.2941 23.1824 22.2941C22.4352 22.2941 21.8295 21.6884 21.8295 20.9412C21.8295 20.194 22.4352 19.5882 23.1824 19.5882C23.9296 19.5882 24.5354 20.194 24.5354 20.9412ZM36.7119 22.2941C37.4591 22.2941 38.0648 21.6884 38.0648 20.9412C38.0648 20.194 37.4591 19.5882 36.7119 19.5882C35.9647 19.5882 35.3589 20.194 35.3589 20.9412C35.3589 21.6884 35.9647 22.2941 36.7119 22.2941Z" fill="#F9F6F1"/></svg>'
  const animalIconSmall =
    '<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="#F9F6F1"/><path d="m12.94 16.583-.084 1.765a.162.162 0 0 0 .25.144l1.486-.955a.162.162 0 0 0 .052-.055l4.543-7.87-1.682-.97-4.543 7.868a.163.163 0 0 0-.022.073ZM19.511 9.053l-1.682-.971.89-1.542a.162.162 0 0 1 .221-.06l1.403.81a.162.162 0 0 1 .059.221l-.89 1.542Z" fill="#075B7A"/><path fill="#055B7A" d="M5.52 7.02h9.6v1.8h-9.6zM5.52 10.199h8.04v1.8H5.52zM5.52 13.441H9.6v1.8H5.52z"/></svg>'
  const configs = [
    {
      buttonLabel: 'Språk/language',
      disableJs: false,
      disableCss: false,
      cardArticle: {
        headingId: 'testarticle',
        title: 'Det er mulig å klikke utenfor',
        intro: 'Du kan klikke utenfor den blå rammen når dropdown er åpen for å lukke den.',
        text: '<p>Du kan teste det. En liten tekst med en lenke til <a class="mt-link" href="https://mattilsynet.no">Mattilsynet</a>.</p>'
      },
      items: [
        {
          title: 'Vis siden på nynorsk',
          url: '#'
        },
        {
          title: 'Show page in English',
          url: '#"'
        }
      ]
    },
    {
      buttonLabel: 'En annen tekst',
      disableJs: false,
      disableCss: false,
      items: [
        {
          title: 'En kort lenke',
          url: '#'
        },
        {
          title: 'En lengere lenke, med komma',
          url: '#"'
        }
      ]
    }
  ]
</script>

<Meta
  parameters={{
    xstate: true,
    inspectUrl: 'https://stately.ai/viz?inspect',
    layout: 'fullscreen',
    disableCss: false
  }}
  title="Components/Dropdown"
  argTypes={{
    buttonLabel: { control: 'text' },
    disableJs: { control: 'boolean' },
    disableCss: { control: 'boolean' }
  }} />

<Template let:args>
  <div use:wrapInShadowDom={args.disableCss}>
    <section class="preview-wrapper">
      <Dropdown title={args.buttonLabel} loadJs={!args.disableJs} let:titleId>
        <ol class="alt-language" aria-labelledby={titleId}>
          {#each args.items as item}
            <li>
              <a href={item.url} class="mt-link forward-arrow-small">{item.title}</a>
            </li>
          {/each}
        </ol>
      </Dropdown>
    </section>
    <section class="layout-flex-col layout-flex-col--x-small" aria-labelledby="how-to-heading">
      <CardArticle
        headingId={args.cardArticle.headingId}
        title={args.cardArticle.title}
        intro={args.cardArticle.intro}
        text={args.cardArticle.text} />
    </section>
  </div>
</Template>

<Story name="Normal" args={configs[0]} />

<Story name="Multiple" args={configs} let:args>
  {#each [configs[0], configs[1]] as args, i}
    <section class={`preview-wrapper`}>
      <Dropdown title={args.buttonLabel} loadJs={!args.disableJs} let:titleId>
        <ol class="alt-language" aria-labelledby={titleId}>
          {#each args.items as item}
            <li>
              <a href={item.url} class="mt-link forward-arrow-small">{item.title}</a>
            </li>
          {/each}
        </ol>
      </Dropdown>
    </section>
  {/each}
</Story>

<style>
  .preview-wrapper {
    text-align: right;
    margin: var(--spacer-small) 0;
  }
  .alt-language {
    text-align: left;
    list-style: none;
    padding: 0;
    color: white;
  }
</style>
