<template>
  <div>
    <q-input label="Title" v-model="clonedData.title" />
    <q-input label="Subitle" v-model="clonedData.subtitle" />
    <q-input label="Background Image" v-model="clonedData.backgroundImage" />
    <q-select label="Wash" v-model="clonedData.wash" :options="wash" />
  </div>
</template>
<script>
import ComponentMixin from '../ComponentMixin.js'
export default {
  mixins: [ComponentMixin]
}
</script>
