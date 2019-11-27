<template>
  <div>
    <q-input label="Alt Text" v-model="clonedData.altText" />
    <q-input label="URL" v-model="clonedData.url" />

    <q-select label="Horizontal Alignment" v-model="clonedData.horizontalAlignment" :options="horizontalAlignment" />
    <q-select label="Size" v-model="clonedData.size" :options="size" />
    <q-select label="Spacing" v-model="clonedData.spacing" :options="spacing" />

    <q-checkbox label="Separator?" v-model="clonedData.separator" /> <br />

    <!-- todo: style -->
  </div>
</template>
<script>
import ComponentMixin from '../ComponentMixin.js'
export default {
  mixins: [ComponentMixin]
}
</script>
