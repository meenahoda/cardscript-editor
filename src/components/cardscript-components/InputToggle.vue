<template>
  <div>
    <q-input label="ID" v-model="clonedData.id" />
    <q-input label="Title" v-model="clonedData.title" />
    <q-input label="Icon" v-model="clonedData.icon" />

    <q-select label="Spacing" v-model="clonedData.spacing" :options="spacing" />

    <q-checkbox label="Separator?" v-model="clonedData.separator" /> <br />
  </div>
</template>
<script>
import ComponentMixin from '../ComponentMixin.js'
export default {
  mixins: [ComponentMixin]
}
</script>
