export default {
  name: 'CardscriptComponent',
  props: { data: Object },
  data () {
    return {
      clonedData: {},
      spacing: ['padding', 'small', 'medium', 'large', 'extraLarge'],
      wash: ['black', 'white'],
      color: ['accent', 'good', 'warning', 'attention', 'light', 'dark'],
      horizontalAlignment: ['left', 'right', 'center'],
      size: ['small', 'medium', 'large', 'extraLarge', 'default'],
      weight: ['lighter', 'bolder'],
      actionStyles: ['list', 'dropdown'],
      choiceStyles: ['expanded', 'compact'],
      selectionType: ['multi', 'single'],
      addDialogShow: false,
      editDialog: {
        show: false,
        idx: null,
        component: {}
      }
    }
  },
  mounted () {
    this.clonedData = Object.assign({}, this.data)
  },
  watch: {
    clonedData: {
      handler (e) {
        this.$emit('input', e)
      },
      deep: true
    }
  }
}
