<template>
  <div>
    <q-input label="Title" v-model="clonedData.title" />
    <q-input label="State Machine Name" v-model="clonedData.stateMachineName" />
    // TODO: input is an object
  </div>
</template>
<script>
import ComponentMixin from '../ComponentMixin.js'
export default {
  mixins: [ComponentMixin]
}
</script>
