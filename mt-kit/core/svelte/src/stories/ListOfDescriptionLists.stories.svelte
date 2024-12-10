<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import { wrapInShadowDom } from './storybook-utils/utils'
  import ListOfDescriptionLists from '$lib/svelte/components/ListOfDescriptionLists.svelte'
</script>

<Meta
  title="Components/List Of Description Lists"
  args={{
    title: 'A list of description lists',
    descriptionKeysToUseInTitle: [
      { descriptionKey: 'ORGANIZATIONNAME' },
      { descriptionKey: 'APPROVALID', prefix: 'Approval ID: ' }
    ],
    titleSeparator: ' - ',
    listOfDescriptionLists: [
      {
        APPROVALFROMDATE: '',
        ORGANIZATIONTOWN: 'Botnveien 174, 8803 SANDNESSJØEN',
        CHANPROCEDURE: '',
        ACTIVITIES: 'OTHER',
        PRODUCTTYPES: 'NOPRD',
        APPROVALTODATE: '',
        REMARKS: '',
        ASSOCIATEDACTIVITIES: '',
        MUNICIPALITY: '1820',
        APPROVALID: '1002996',
        LISTTYPE:
          'SECTION X Specified Users as referred to in article 17 (1) or 18 (1) of Regulation (EC)  No 1069/2009 which are registered in accordance with Article 23 of Regulation  (EC) 1069/2009',
        LISTTYPEID: '10210',
        CATEGORY: '3',
        ORGANIZATIONNAME: 'NERMOEN GÅRD',
        COUNTYID: '18',
        LISTCATEGORY: 'Approved and registered plants',
        LISTCATEGORYID: '1002'
      },
      {
        APPROVALFROMDATE: '',
        ORGANIZATIONTOWN: 'Christian Lodgaards vei 80, 7387 SINGSÅS',
        CHANPROCEDURE: '',
        ACTIVITIES: 'OTHER',
        PRODUCTTYPES: 'OTHER',
        APPROVALTODATE: '',
        REMARKS: '',
        ASSOCIATEDACTIVITIES: '',
        MUNICIPALITY: '5027',
        APPROVALID: '121178',
        LISTTYPE:
          'SECTION X Specified Users as referred to in article 17 (1) or 18 (1) of Regulation (EC)  No 1069/2009 which are registered in accordance with Article 23 of Regulation  (EC) 1069/2009',
        LISTTYPEID: '10210',
        CATEGORY: '3',
        ORGANIZATIONNAME: 'SVEIN TORGERSEN',
        COUNTYID: '50',
        LISTCATEGORY: 'Approved and registered plants',
        LISTCATEGORYID: '1002'
      },
      {
        APPROVALFROMDATE: '',
        ORGANIZATIONTOWN: 'Leikvollveien 17, 3175 RAMNES',
        CHANPROCEDURE: '',
        ACTIVITIES: 'OTHER',
        PRODUCTTYPES: 'NOPRD',
        APPROVALTODATE: '',
        REMARKS: '',
        ASSOCIATEDACTIVITIES: '',
        MUNICIPALITY: '',
        APPROVALID: '1005165',
        LISTTYPE:
          'SECTION X Specified Users as referred to in article 17 (1) or 18 (1) of Regulation (EC)  No 1069/2009 which are registered in accordance with Article 23 of Regulation  (EC) 1069/2009',
        LISTTYPEID: '10210',
        CATEGORY: '3',
        ORGANIZATIONNAME: 'RENATE FIMLAND',
        COUNTYID: '',
        LISTCATEGORY: 'Approved and registered plants',
        LISTCATEGORYID: '1002'
      },
      {
        APPROVALFROMDATE: '',
        ORGANIZATIONTOWN: 'Grandfjæra 22C, 6415 MOLDE',
        CHANPROCEDURE: '',
        ACTIVITIES: 'UDER',
        PRODUCTTYPES: 'OTHER',
        APPROVALTODATE: '',
        REMARKS: '',
        ASSOCIATEDACTIVITIES: '',
        MUNICIPALITY: '1506',
        APPROVALID: '1002983',
        LISTTYPE:
          'SECTION X Specified Users as referred to in article 17 (1) or 18 (1) of Regulation (EC)  No 1069/2009 which are registered in accordance with Article 23 of Regulation  (EC) 1069/2009',
        LISTTYPEID: '10210',
        CATEGORY: '1',
        ORGANIZATIONNAME: 'ORIVO AS',
        COUNTYID: '15',
        LISTCATEGORY: 'Approved and registered plants',
        LISTCATEGORYID: '1002'
      },
      {
        APPROVALFROMDATE: '',
        ORGANIZATIONTOWN: 'Kvernatunvegen 3, 5347 ÅGOTNES',
        CHANPROCEDURE: '',
        ACTIVITIES: 'UDER',
        PRODUCTTYPES: 'NOPRD',
        APPROVALTODATE: '',
        REMARKS: '',
        ASSOCIATEDACTIVITIES: '',
        MUNICIPALITY: '4626',
        APPROVALID: '1002833',
        LISTTYPE:
          'SECTION X Specified Users as referred to in article 17 (1) or 18 (1) of Regulation (EC)  No 1069/2009 which are registered in accordance with Article 23 of Regulation  (EC) 1069/2009',
        LISTTYPEID: '10210',
        CATEGORY: '1',
        ORGANIZATIONNAME: 'LUMIC AS',
        COUNTYID: '46',
        LISTCATEGORY: 'Approved and registered plants',
        LISTCATEGORYID: '1002'
      }
    ],
    disableCss: false
  }}
  argTypes={{
    title: { control: 'text' },
    descriptionValuesToUseAsTitle: { control: 'array' },
    titleSeparator: { control: 'text' },
    listOfDescriptionLists: { control: 'array' },
    disableCss: { control: 'boolean' }
  }}
/>

<Story name="Normal">
  {#snippet children({ args })}
    <div use:wrapInShadowDom={args.disableCss}>
      <h1 class="mt-h1 m-b-s" id="header">{args.title}</h1>
      <ListOfDescriptionLists {...args} labelledBy="header" />
    </div>
  {/snippet}
</Story>
