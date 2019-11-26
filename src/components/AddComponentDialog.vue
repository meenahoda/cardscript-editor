<template>
  <q-dialog v-model="show" persistent>
    <q-card style="min-width: 350px">
      <q-card-section>
        <div class="text-caption text-uppercase text-grey">Add Component</div>
      </q-card-section>

      <q-card-section>
        <q-select v-model="type" :options="typeOptions[arrayEditing]" label="Type" />
      </q-card-section>

      <q-card-actions align="right">
        <q-btn label="Cancel" color="primary" @click="$emit('cancel')" outline />
        <q-btn label="Add" color="primary" @click="$emit('add', type)" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script>
export default {
  name: 'ComponentAddDialog',
  props: {
    show: Boolean,
    arrayEditing: String
  },
  data () {
    return {
      type: null,
      typeOptions: {
        body: Object.keys(this.$cardscript['body']).sort(),
        actions: Object.keys(this.$cardscript['actions']).sort()
      }
    }
  }
}
</script>
