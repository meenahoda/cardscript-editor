<template>
  <div>
    <q-input label="ID" v-model="clonedData.id" />
    <q-input label="Text" v-model="clonedData.text" />

    <q-input label="Max. Lines" v-model="clonedData.maxLines" type="number" />

    <q-select label="Colour" v-model="clonedData.color" :options="color" />
    <q-select label="Horizontal Alignment" v-model="clonedData.horizontalAlignment" :options="horizontalAlignment" />
    <q-select label="Size" v-model="clonedData.size" :options="size" />
    <q-select label="Weight" v-model="clonedData.weight" :options="weight" />
    <q-select label="Spacing" v-model="clonedData.spacing" :options="spacing" />

    <q-checkbox label="Subtle?" v-model="clonedData.isSubtle" /> <br />
    <q-checkbox label="Wrap?" v-model="clonedData.wrap" /> <br />
    <q-checkbox label="Separator?" v-model="clonedData.separator" /> <br />
    <q-checkbox label="Preformat?" v-model="clonedData.preformat" /> <br />
    <q-checkbox label="Markdown?" v-model="clonedData.markdown" />
  </div>
</template>
<script>
import ComponentMixin from '../ComponentMixin.js'
export default {
  mixins: [ComponentMixin]
}
</script>
