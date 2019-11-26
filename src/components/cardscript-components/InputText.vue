<template>
  <div>
    <q-input label="ID" v-model="clonedData.id" />
    <q-input label="Title" v-model="clonedData.title" />
    <q-input label="Icon" v-model="clonedData.icon" />
    <q-input label="Placeholder" v-model="clonedData.placeholder" />

    <q-select label="Spacing" v-model="clonedData.spacing" :options="spacing" />

    <q-checkbox label="Separator?" v-model="clonedData.separator" /> <br />
    <q-checkbox label="Editor?" v-model="clonedData.editor" /> <br />
    <q-checkbox label="Is multiline?" v-model="clonedData.isMultiline" />
  </div>
</template>
<script>
import ComponentMixin from '../ComponentMixin.js'
export default {
  mixins: [ComponentMixin]
}
</script>
