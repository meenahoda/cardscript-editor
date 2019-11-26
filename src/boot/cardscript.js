const defaultAdaptiveCard = { type: 'AdaptiveCard', body: [] }

export default ({ Vue }) => {
  Vue.prototype.$cardscript = {
    body: {
      'Input.ChoiceSet': {
        data: {
          type: 'Input.ChoiceSet',
          id: 'ID',
          title: '',
          icon: '',
          spacing: '',
          style: '',
          clearable: false,
          separator: false,
          isMultiSelect: false,
          choices: []
        },
        component: () => import(`components/cardscript-components/InputChoiceSet.vue`)
      },
      'FactSet': {
        data: {
          type: 'FactSet',
          spacing: '',
          separator: false,
          facts: []
        },
        component: () => import(`components/cardscript-components/FactSet.vue`)
      },
      'Collapsible': {
        data: {
          type: 'Collapsible',
          title: '',
          card: defaultAdaptiveCard
        },
        component: () => import(`components/cardscript-components/Collapsible.vue`)
      },
      'Chip': {
        data: {
          type: 'Chip',
          icon: '',
          text: '',
          color: '',
          spacing: ''
        },
        component: () => import(`components/cardscript-components/Chip.vue`)
      },
      'ActionSet': {
        data: {
          type: 'ActionSet',
          title: '',
          spacing: '',
          actionStyle: '',
          actions: []
        },
        component: () => import(`components/cardscript-components/ActionSet.vue`)
      },
      'TextBlock': {
        data: {
          type: 'TextBlock',
          id: 'ID',
          text: '',
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
          id: 'ID',
          title: '',
          icon: '',
          placeholder: '',
          spacing: '',
          separator: false,
          editor: false,
          isMultiline: false
        },
        component: () => import(`components/cardscript-components/InputText.vue`)
      },
      'List': {
        data: {
          type: 'List',
          id: 'ID',
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
        component: () => import(`components/cardscript-components/List.vue`)
      },
      'Table': {
        data: {
          type: 'Table',
          id: 'ID',
          title: '',
          arrayPath: '',
          notFoundText: '',
          rowKey: '',
          selectionType: '',
          showLaunches: false,
          columns: []
        },
        component: () => import(`components/cardscript-components/Table.vue`)
      },
      'Input.Number': {
        data: {
          type: 'Input.Number',
          id: 'ID',
          title: '',
          icon: '',
          placeholder: '',
          spacing: '',
          minimum: null,
          maximum: null,
          separator: false
        },
        component: () => import(`components/cardscript-components/InputNumber.vue`)
      },
      'Jumbotron': {
        data: {
          title: '',
          subtitle: '',
          backgroundImage: '',
          wash: ''
        },
        component: () => import(`components/cardscript-components/Jumbotron.vue`)
      },
      'Container': {
        data: {
          id: 'ID',
          title: '',
          backgroundImage: '',
          wash: '',
          color: '',
          spacing: '',
          separator: false,
          items: []
        },
        component: () => import(`components/cardscript-components/Container.vue`)
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
          id: 'ID',
          title: 'Next'
        },
        component: () => import(`components/cardscript-components/ActionNextTab.vue`)
      },
      'Action.PreviousTab': {
        data: {
          type: 'Action.PreviousTab',
          id: 'ID',
          title: 'Previous'
        },
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
          title: ''
        },
        component: () => import(`components/cardscript-components/ActionPushCard.vue`)
      },
      'Action.ReplaceCard': {
        data: {
          type: 'Action.ReplaceCard',
          stateMachineName: '',
          title: ''
        },
        component: () => import(`components/cardscript-components/ActionReplaceCard.vue`)
      }
    }
  }
}
