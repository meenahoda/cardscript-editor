<template>
  <div>
    <q-input label="ID" v-model="clonedData.id" />
    <q-input label="Title" v-model="clonedData.title" />

    <q-input label="Minimum" v-model="clonedData.min" type="number" />
    <q-input label="Maximum" v-model="clonedData.max" type="number" />
    <q-input label="Step" v-model="clonedData.step" type="number" />

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
