<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf';

  const name = 'multipageform';
  const options = [
    {
      text: 'Dere kan kontakte meg',
      value: 'yes'
    },
    {
      text: 'Jeg ønsker å være anonym',
      value: 'no'
    }
  ];
</script>

<Meta
  title="Utilities/Layout/MultiPageForm"
  args={{
    label: 'Kan vi kontakte deg?',
    helpText:
      'Beskriv kort og konkret hva du har observert og hvor alvorlig hendelsen er. Vær oppmerksom på den ansvarlige ofte får se meldingen.',
    errorMessage: 'Fyll inn dette feltet.',
    inputs: [
      {
        label: 'Navn',
        helpText: '',
        errorMessage: 'Fyll inn dette feltet.'
      },
      {
        label: 'Telefonnummer',
        helpText: '',
        errorMessage: 'Fyll inn dette feltet.'
      },
      {
        label: 'E-post',
        helpText: '',
        errorMessage: 'Fyll inn dette feltet.'
      },
      {
        label: 'Har du en spesiell rolle Mattilsynet bør vite om? (valgfritt)',
        helpText: 'For eksempel helsepersonell, veterinær, politi, dyrevernorganisasjon e.l.',
        errorMessage: 'Fyll inn dette feltet.'
      }
    ],
    disableCss: false
  }}
  argTypes={{
    label: {control: 'text'},
    helpText: {control: 'text'},
    errorMessage: {control: 'text'},
    disableCss: {control: 'boolean'}
  }}
/>

<Story name="Normal" let:label let:helpText let:disableCss let:inputs let:errorMessage>
  <main class="container content">
    <div class="multipage-form-view">
      <h1>Bekymringsmelding til Mattilsynet</h1>

      <a
        href=""
        class="layout-flex layout-flex--center-vertical layout-flex--inline self-start"
        style="--gap:1rem; color: var(--color-links);"
      >
        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.41 1.41L6 0L0 6L6 12L7.41 10.59L2.83 6L7.41 1.41Z" />
        </svg>

        Forrige
      </a>
      <h2>Om bekymringen</h2>

      <div class="page-description">
        <p>
          Vi vil gjerne kontakte deg om vi trenger mer informasjon om din bekymring. Det gjør det lettere for oss å
          følge opp saken. Navnet ditt blir ikke videreformidlet.
        </p>
      </div>

      <form class="form-layout">
        <fieldset id={name} aria-describedby={`${name}-hint ${name}-error`} class="form-fieldset">
          <legend class="form-legend">{label}</legend>

          {#if helpText}
            <div class="hint">
              {@html helpText}
            </div>
          {/if}

          {#each options as radio (radio.value)}
            <div class="form-control radio">
              <input
                type="radio"
                class="input__control"
                id={radio.value}
                {name}
                value={radio.value}
                checked={radio.value === 'yes'}
              />

              <label class="form-label" for={radio.value}>
                {radio.text}
              </label>
            </div>
          {/each}
        </fieldset>
        <!--  Input error -->
        <label class="form-label" for="with-error"> Hva gjelder bekymringen? </label>

        {#if helpText}
          <div class="hint">
            {@html helpText}
          </div>
        {/if}

        <span id="inputfield-error" class="form-error">
          <span class="inclusively-hidden">Feilmelding:</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11 15H13V17H11V15ZM11 7H13V13H11V7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z"
            />
          </svg>
          {errorMessage}
        </span>
        <!--  Input error - end -->

        <!-- SELECT-->
        <input
          id="with-error"
          name="email"
          class="form-field error"
          aria-describedby="inputfield-hint inputfield-error self-stretch"
        />

        <label class="form-label" for="selectfield">
          {label}
        </label>

        {#if helpText}
          <div class="hint">
            {@html helpText}
          </div>
        {/if}

        <select id="selectfield" name="animal" class="form-field" aria-describedby="inputfield-hint inputfield-error">
          <option>Dog</option>
          <option>Hamster</option>
        </select>

        <!-- SELECT - end-->

        {#each inputs as input}
          <label class="form-label" for={input.id}>
            {input.label}
          </label>

          {#if input.helpText}
            <div class="hint">
              {@html input.helpText}
            </div>
          {/if}

          <input
            id={input.id}
            name="email"
            class="form-field"
            aria-describedby="inputfield-hint inputfield-error self-stretch"
          />
        {/each}
        <button type="submit" on:click class="button button--primary self-start"> Neste </button>
        <a class={`button button--outlined self-start`} href="http://www.mattilsynet.no"> Avbryt </a>
      </form>
    </div>
  </main>
</Story>

<style lang="scss" global>
  @import '../src/scss/app';
</style>
