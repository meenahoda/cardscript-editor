<template>
  <div>
    <q-select label="Source Type" v-model="clonedData.sourceType" :options="sourceType" @input="updateSource" />
    <q-input label="Source URL" v-model="clonedData.sources[0].url" />
  </div>
</template>
<script>
import ComponentMixin from '../ComponentMixin.js'
export default {
  mixins: [ComponentMixin],
  methods: {
    updateSource () {
      if (['mp4', 'mov'].includes(this.clonedData.sourceType)) {
        this.clonedData.sources[0].mimeType = 'video/mp4'
      } else {
        delete this.clonedData.sources[0].mimeType
      }
    }
  }
}
</script>
