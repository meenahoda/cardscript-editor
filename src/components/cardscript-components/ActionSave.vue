<template>
  <div>
    <q-input label="Title" v-model="clonedData.title" />
  </div>
</template>
<script>
import ComponentMixin from '../ComponentMixin.js'
export default {
  mixins: [ComponentMixin]
}
</script>
