<template>
  <div>
    <q-input label="ID" v-model="clonedData.id" />
    <q-input label="Array Path" v-model="clonedData.arrayPath" />
    <q-input label="Not Found Text" v-model="clonedData.notFoundText" />
    <q-input label="Row Key" v-model="clonedData.rowKey" />
    <q-input label="On Selection Endpoint" v-model="clonedData.onSelectionEndpoint" />

    <q-input label="Label template" v-if="clonedData.templates" v-model="clonedData.templates.label" />
    <q-input label="Sublabel template" v-if="clonedData.templates" v-model="clonedData.templates.sublabel" />

    <q-select label="Selection Type" v-model="clonedData.selectionType" :options="selectionType" />

    <q-checkbox label="Show Launches?" v-model="clonedData.showLaunches" /> <br />
    <q-checkbox label="Show Total?" v-model="clonedData.showTotal" /> <br />
    <q-checkbox label="Dense?" v-model="clonedData.dense" /> <br />
    <q-checkbox label="Click to Launch?" v-model="clonedData.clickToLaunch" /> <br />
  </div>
</template>
<script>
import ComponentMixin from '../ComponentMixin.js'
export default {
  mixins: [ComponentMixin]
}
</script>
