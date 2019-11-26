<template>
  <div>
    <q-input label="Title" v-model="clonedData.title" />
    <q-input label="URL" v-model="clonedData.url" />
  </div>
</template>
<script>
import ComponentMixin from '../ComponentMixin.js'
export default {
  mixins: [ComponentMixin]
}
</script>
