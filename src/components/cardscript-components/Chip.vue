<template>
  <div>
    <q-input label="Icon" v-model="clonedData.icon" />
    <q-input label="Text" v-model="clonedData.text" />

    <q-select label="Colour" v-model="clonedData.color" :options="color" />
    <q-select label="Spacing" v-model="clonedData.spacing" :options="spacing" />
  </div>
</template>
<script>
import ComponentMixin from '../ComponentMixin.js'
export default {
  mixins: [ComponentMixin]
}
</script>
