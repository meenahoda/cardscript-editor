<template>
  <q-dialog v-model="show" persistent>
    <q-card style="min-width: 350px">
      <q-card-section>
        <div class="text-caption text-uppercase text-grey">
          Edit Component / {{component.type}}
        </div>
      </q-card-section>

      <q-card-section>
        <component :is="getComponent(component.type)" :data="component" @input="inputChanged" />
      </q-card-section>

      <q-card-actions align="right">
        <q-btn label="Close" color="primary" @click="$emit('close')" outline />
        <q-btn label="Save" color="primary" @click="$emit('save', clonedComponent)" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script>
export default {
  name: 'ComponentEditDialog',
  props: {
    show: Boolean,
    index: Number,
    arrayEditing: String,
    component: Object
  },
  data () {
    return {
      clonedComponent: {}
    }
  },
  methods: {
    getComponent (type) {
      if (type && this.arrayEditing) {
        const comp = this.$cardscript[this.arrayEditing][type]
        if (comp) {
          return comp.component
        } else {
          console.warn(`Cannot find component: '${this.arrayEditing}/${type}'`)
        }
      }
    },
    inputChanged (e) {
      this.clonedComponent = e
    }
  }
}
</script>
