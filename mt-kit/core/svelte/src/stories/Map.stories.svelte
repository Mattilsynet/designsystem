<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import Map from '../lib/svelte/components/map/Map.svelte'
  import { markers as svg } from '../lib/ts/markers'
  import { DEFAULT_CLUSTER_DISTANCE, DEFAULT_CLUSTER_MIN_DISTANCE } from "../lib//ts/mapUtils";



  let scale = 0.5
  let markers = [
    {
      "municipality": "Asker",
      "location": "Vollen - Selvikbukta",
      "scale":0.5,
      "src": `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      "lat": 59.806328,
      "long": 10.497057
    },
    {
      "municipality": "Fredrikstad",
      "location": "Engelsviken",
      "scale": 0.5,
      "src": `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      "lat": 59.24973,
      "long": 10.73148
    },
    {
      "municipality": "Hvaler",
      "location": "Utgårdskilen",
      "scale": 0.5,
      "src": `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      "lat": 59.07705,
      "long": 10.86951
    },
    {
      "municipality": "Kragerø",
      "location": "Saltneven",
      "scale": 0.5,
      "src": `data:image/svg+xml;utf8,${encodeURIComponent(svg['danger'])}`,
      "lat": 58.857348,
      "long": 9.436104
    },
    {
      "municipality": "Larvik",
      "location": "Ødegårdsbukta, Viksfjord",
      "scale": 0.5,
      "src": `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      "lat": 59.0232,
      "long": 10.09578
    },
    {
      "municipality": "Tønsberg",
      "location": "Vallø",
      "scale": 0.5,
      "src": `data:image/svg+xml;utf8,${encodeURIComponent(svg['danger'])}`,
      "lat": 59.256572,
      "long": 10.49964
    },
    {
      "municipality": "Arendal",
      "location": "Flødevigen",
      "scale": 0.5,
      "src": `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      "lat": 58.424515,
      "long": 8.756882
    },
    {
      "municipality": "Kristiansand",
      "location": "Flekkerøy",
      "scale": 0.5,
      "src": `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      "lat": 58.080294,
      "long": 7.98647
    },
    {
      "municipality": "Risør",
      "location": "Finnøysundet",
      "scale": 0.5,
      "src": `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      "lat": 58.730467,
      "long": 9.216733
    },
    {
      "municipality": "Bømlo",
      "location": "Rogøysund",
      "scale": 0.5,
      "src": `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      "lat": 59.808094,
      "long": 5.093005
    },
    {
      "municipality": "Egersund",
      "location": "Nordre Sundet",
      "scale": 0.5,
      "src": `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      "lat": 58.460742,
      "long": 5.915552
    },
    {
      "municipality": "Fjaler",
      "location": "Bortheim",
      "scale": 0.5,
      "src": `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      "lat": 61.351497,
      "long": 5.349191
    },
    {
      "municipality": "Fjaler",
      "location": "Gjelet",
      "scale": 0.5,
      "src": `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      "lat": 61.374888,
      "long": 5.417636
    },
    {
      "municipality": "Kvitsøy",
      "location": "Buøyflæet",
      "scale": 0.5,
      "src": `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      "lat": 59.044917,
      "long": 5.40655
    },
    {
      "municipality": "Molde",
      "location": "Cap Clara",
      "scale": 0.5,
      "src": `data:image/svg+xml;utf8,${encodeURIComponent(svg['warning'])}`,
      "lat": 62.73349,
      "long": 7.09873
    },
    {
      "municipality": "Stavanger",
      "location": "Talgje",
      "scale": 0.5,
      "src": `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      "lat": 59.104499,
      "long": 5.859001
    },
    {
      "municipality": "Øygarden",
      "location": "Ulvsundet",
      "scale": 0.5,
      "src": `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      "lat": 60.517717,
      "long": 4.890717
    },
    {
      "municipality": "Ålesund",
      "location": "Mørkesetsundet",
      "scale": 0.5,
      "src": `data:image/svg+xml;utf8,${encodeURIComponent(svg['warning'])}`,
      "lat": 62.50362,
      "long": 6.47496
    },
    {
      "municipality": "Inderøy",
      "location": "Rundhaugen",
      "scale": 0.5,
      "src": `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      "lat": 63.891067,
      "long": 10.908767
    },
    {
      "municipality": "Namsos",
      "location": "Breivika",
      "scale": 0.5,
      "src": `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      "lat": 64.475,
      "long": 11.1887
    },
    {
      "municipality": "Hitra",
      "location": "Fillan (Vikan)",
      "scale": 0.5,
      "src": `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      "lat": 63.6012,
      "long": 8.98972
    },
    {
      "municipality": "Ørland",
      "location": "Valsholmen",
      "scale": 0.5,
      "src": `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      "lat": 63.8092,
      "long": 9.61
    },
    {
      "municipality": "Åfjord",
      "location": "Askerholmen (NS)",
      "scale": 0.5,
      "src": `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      "lat": 63.942353,
      "long": 10.183832
    },
    {
      "municipality": "Bindal",
      "location": "Aarsand",
      "scale": 0.5,
      "src": `data:image/svg+xml;utf8,${encodeURIComponent(svg['danger'])}`,
      "lat": 65.04674,
      "long": 12.15426
    },
    {
      "municipality": "Bindal",
      "location": "Isnaustet",
      "scale": 0.5,
      "src": `data:image/svg+xml;utf8,${encodeURIComponent(svg['warning'])}`,
      "lat": 65.03405,
      "long": 12.18591
    },
    {
      "municipality": "Bindal",
      "location": "Hagasandvika",
      "scale": 0.5,
      "src": `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      "lat": 65.04724,
      "long": 12.1405
    },
    {
      "municipality": "Bodø",
      "location": "Kobbvika i Festvåg",
      "scale": 0.5,
      "src": `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      "lat": 67.4382,
      "long": 14.78265
    },
    {
      "municipality": "Leirfjord",
      "location": "Skogvika",
      "scale": 0.5,
      "src": `data:image/svg+xml;utf8,${encodeURIComponent(svg['danger'])}`,
      "lat": 66.05055,
      "long": 12.95525
    },
    {
      "municipality": "Nordreisa",
      "location": "Kjempebakken",
      "scale": 0.5,
      "src": `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      "lat": 69.791747,
      "long": 20.600536
    },
    {
      "municipality": "Tromsø",
      "location": "Larseng",
      "scale": 0.5,
      "src": `data:image/svg+xml;utf8,${encodeURIComponent(svg['warning'])}`,
      "lat": 69.569195,
      "long": 18.771539
    },
    {
      "municipality": "Vestvågøy",
      "location": "Buksnesfjord/Gravdal",
      "scale": 0.5,
      "src": `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      "lat": 68.1283,
      "long": 13.555
    },
    {
      "municipality": "Vestvågøy",
      "location": "Nappstraumen",
      "scale": 0.5,
      "src": `data:image/svg+xml;utf8,${encodeURIComponent(svg['danger'])}`,
      "lat": 68.1436167,
      "long": 13.5302833
    }
  ]

  let options = {
    distance: DEFAULT_CLUSTER_DISTANCE,
    minDistance: DEFAULT_CLUSTER_MIN_DISTANCE
  }
  function handleMapClicked(e) {
    console.log('clicked marker', e.detail.marker)
  }
</script>

<Meta
  title="Components/Map"
  args={{
    disableCss: false
  }}
  argTypes={{
    disableCss: { control: 'boolean' }
  }} />

<Story name="Normal" let:disableCss>
  <h1>Map</h1>
  <Map on:mapClick={handleMapClicked} class="map-wrapper" markers={markers} clusterOptions={options}/>
</Story>
