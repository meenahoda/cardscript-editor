const defaultAdaptiveCard = { type: 'AdaptiveCard', body: [] }

export default ({ Vue }) => {
  Vue.prototype.$cardscript = {
    body: {
      'Image': {
        data: {
          type: 'Image',
          altText: '',
          horizontalAlignment: '',
          size: '',
          style: '',
          url: '',
          spacing: 'medium',
          separator: false
        },
        component: () => import(`components/cardscript-components/Image.vue`)
      },
      'Input.ApiLookup': {
        data: {
          type: 'Input.ApiLookup',
          id: '',
          buttonText: 'Go',
          endpoint: {
            name: ''
          },
          ctxPaths: {
            results: '',
            totalHits: ''
          },
          spacing: 'medium',
          showPagination: false,
          resultsPerPage: 5,
          parametersCard: defaultAdaptiveCard,
          resultsCard: defaultAdaptiveCard
        },
        required: [ 'id' ],
        component: () => import(`components/cardscript-components/InputApiLookup.vue`)
      },
      'Input.ChoiceSet': {
        data: {
          type: 'Input.ChoiceSet',
          id: '',
          title: 'Title Here',
          icon: '',
          spacing: 'medium',
          style: '',
          clearable: false,
          separator: false,
          isMultiSelect: false,
          choices: []
        },
        required: [ 'id' ],
        component: () => import(`components/cardscript-components/InputChoiceSet.vue`)
      },
      'FactSet': {
        data: {
          type: 'FactSet',
          spacing: 'medium',
          separator: false,
          facts: []
        },
        component: () => import(`components/cardscript-components/FactSet.vue`)
      },
      'Collapsible': {
        data: {
          type: 'Collapsible',
          title: 'Title Here',
          card: defaultAdaptiveCard
        },
        component: () => import(`components/cardscript-components/Collapsible.vue`)
      },
      'Chip': {
        data: {
          type: 'Chip',
          icon: '',
          text: 'Text Here',
          color: '',
          spacing: 'medium'
        },
        component: () => import(`components/cardscript-components/Chip.vue`)
      },
      'ActionSet': {
        data: {
          type: 'ActionSet',
          title: 'Insert Title Here',
          spacing: 'medium',
          actionStyle: 'dropdown',
          actions: []
        },
        component: () => import(`components/cardscript-components/ActionSet.vue`)
      },
      'TextBlock': {
        data: {
          type: 'TextBlock',
          id: '',
          text: 'Text Here',
          isSubtle: false,
          wrap: false,
          separator: false,
          preformat: false,
          markdown: false
        },
        component: () => import(`components/cardscript-components/TextBlock.vue`)
      },
      'Input.Text': {
        data: {
          type: 'Input.Text',
          id: '',
          title: 'Title Here',
          icon: '',
          placeholder: '',
          spacing: 'medium',
          separator: false,
          editor: false,
          isMultiline: false
        },
        required: [ 'id' ],
        component: () => import(`components/cardscript-components/InputText.vue`)
      },
      'List': {
        data: {
          type: 'List',
          id: '',
          arrayPath: '',
          notFoundText: '',
          rowKey: '',
          onSelectionEndpoint: '',
          templates: {
            label: '',
            sublabel: ''
          },
          selectionType: '',
          showLaunches: false,
          showTotal: false,
          dense: false,
          clickToLaunch: false
        },
        required: [ 'id' ],
        component: () => import(`components/cardscript-components/List.vue`)
      },
      'Table': {
        data: {
          type: 'Table',
          id: '',
          title: 'Title Here',
          arrayPath: '',
          notFoundText: '',
          rowKey: '',
          selectionType: '',
          showLaunches: false,
          columns: []
        },
        required: [ 'id' ],
        component: () => import(`components/cardscript-components/Table.vue`)
      },
      'TabSet': {
        data: {
          id: '',
          type: 'TabSet',
          spacing: 'medium',
          tabs: []
        },
        required: [ 'id' ],
        component: () => import(`components/cardscript-components/TabSet.vue`)
      },
      'Tab': {
        data: {
          type: 'Tab',
          title: 'Title Here',
          items: []
        },
        component: () => import(`components/cardscript-components/Tab.vue`)
      },
      'Input.Slider': {
        data: {
          type: 'Input.Slider',
          id: '',
          spacing: 'medium',
          title: 'Title Here',
          min: null,
          max: null,
          step: null,
          separator: false
        },
        required: [ 'id' ],
        component: () => import(`components/cardscript-components/InputSlider.vue`)
      },
      'Input.Toggle': {
        data: {
          type: 'Input.Toggle',
          id: '',
          spacing: 'medium',
          title: 'Title Here',
          icon: '',
          separator: false
        },
        required: [ 'id' ],
        component: () => import(`components/cardscript-components/InputToggle.vue`)
      },
      'Input.DateTime': {
        data: {
          type: 'Input.DateTime',
          id: '',
          min: '',
          max: '',
          spacing: 'medium',
          title: 'Title Here',
          withSeconds: false,
          separator: false
        },
        required: [ 'id' ],
        component: () => import(`components/cardscript-components/InputDateTime.vue`)
      },
      'Input.Date': {
        data: {
          type: 'Input.Date',
          id: '',
          min: '',
          max: '1900/01/01',
          spacing: 'medium',
          icon: '',
          title: 'Title Here',
          clearable: false,
          separator: false
        },
        required: [ 'id' ],
        component: () => import(`components/cardscript-components/InputDate.vue`)
      },
      'Input.Currency': {
        data: {
          type: 'Input.Currency',
          id: '',
          placeholder: '',
          spacing: 'medium',
          minimum: null,
          maximum: null,
          separator: false
        },
        required: [ 'id' ],
        component: () => import(`components/cardscript-components/InputCurrency.vue`)
      },
      'Input.Number': {
        data: {
          type: 'Input.Number',
          id: '',
          title: 'Title Here',
          icon: '',
          placeholder: '',
          spacing: 'medium',
          minimum: null,
          maximum: null,
          separator: false
        },
        required: [ 'id' ],
        component: () => import(`components/cardscript-components/InputNumber.vue`)
      },
      'Jumbotron': {
        data: {
          type: 'Jumbotron',
          title: 'Title Here',
          subtitle: '',
          backgroundImage: '',
          wash: ''
        },
        component: () => import(`components/cardscript-components/Jumbotron.vue`)
      },
      'Container': {
        data: {
          type: 'Container',
          id: '',
          title: 'Title Here',
          backgroundImage: '',
          wash: '',
          color: '',
          spacing: 'medium',
          separator: false,
          items: []
        },
        component: () => import(`components/cardscript-components/Container.vue`)
      },
      'Separator': {
        data: {
          type: 'Separator'
        },
        component: () => import(`components/cardscript-components/Separator.vue`)
      },
      'PhaseBanner': {
        data: {
          type: 'PhaseBanner'
        },
        component: () => import(`components/cardscript-components/PhaseBanner.vue`)
      },
      'Media': {
        data: {
          type: 'Media',
          sourceType: '',
          poster: '',
          sources: [
            {
              url: ''
            }
          ]
        },
        component: () => import(`components/cardscript-components/Media.vue`)
      }
    },
    actions: {
      'Action.Submit': {
        data: {
          type: 'Action.Submit',
          title: 'Submit'
        },
        component: () => import(`components/cardscript-components/ActionSubmit.vue`)
      },
      'Action.Save': {
        data: {
          type: 'Action.Save',
          title: 'Save'
        },
        component: () => import(`components/cardscript-components/ActionSave.vue`)
      },
      'Action.Cancel': {
        data: {
          type: 'Action.Cancel',
          title: 'Cancel'
        },
        component: () => import(`components/cardscript-components/ActionCancel.vue`)
      },
      'Action.NextTab': {
        data: {
          type: 'Action.NextTab',
          id: '',
          title: 'Next'
        },
        required: [ 'id' ],
        component: () => import(`components/cardscript-components/ActionNextTab.vue`)
      },
      'Action.PreviousTab': {
        data: {
          type: 'Action.PreviousTab',
          id: '',
          title: 'Previous'
        },
        required: [ 'id' ],
        component: () => import(`components/cardscript-components/ActionPreviousTab.vue`)
      },
      'Action.OpenUrl': {
        data: {
          type: 'Action.OpenUrl',
          url: '',
          title: 'Open URL'
        },
        component: () => import(`components/cardscript-components/ActionOpenUrl.vue`)
      },
      'Action.PushCard': {
        data: {
          type: 'Action.PushCard',
          stateMachineName: '',
          title: 'Title Here'
        },
        component: () => import(`components/cardscript-components/ActionPushCard.vue`)
      },
      'Action.ReplaceCard': {
        data: {
          type: 'Action.ReplaceCard',
          stateMachineName: '',
          title: 'Title Here'
        },
        component: () => import(`components/cardscript-components/ActionReplaceCard.vue`)
      }
    }
  }
}
