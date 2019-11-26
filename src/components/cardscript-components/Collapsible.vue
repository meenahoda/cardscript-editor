<template>
  <div>
    <q-input label="Title" v-model="clonedData.title" />

    <q-card class="bg-grey-3 q-my-md">
      <q-card-section>
        <div class="text-caption text-uppercase text-grey-8">Items</div>

        <q-list v-if="clonedData.card && clonedData.card.body && clonedData.card.body.length > 0">
          <draggable v-model="clonedData.card.body" handle=".drag-handle" :options="{ animation: 150 }">
            <q-item v-for="(c, idx) in clonedData.card.body" :key="idx">
              <q-item-section side>
                <q-icon color="grey-8" name="drag_indicator" style="cursor: move;" class="drag-handle" />
              </q-item-section>

              <q-item-section>
                <q-item-label>{{c.type}} {{c.id ? `/ ${c.id}` : ''}}</q-item-label>
              </q-item-section>

              <q-item-section side>
                <div class="text-grey-8 q-gutter-xs">
                  <q-btn size="12px" flat dense round icon="settings" @click="editComponentOpen(c, idx)" />
                  <q-btn size="12px" flat dense round icon="delete" @click="deleteComponent(idx)" />
                </div>
              </q-item-section>
            </q-item>
          </draggable>
        </q-list>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn label="Add" dense color="primary" class="q-mt-md" @click="addDialogShow = true" />
      </q-card-actions>
    </q-card>

    <add-component-dialog
      :show="addDialogShow"
      arrayEditing="body"
      @add="addComponent"
      @cancel="addDialogShow = false"
    />

    <edit-component-dialog
      :show="editDialog.show"
      arrayEditing="body"
      :index="editDialog.idx"
      :component="editDialog.component"
      @save="editComponent"
      @close="editDialog.show = false"
    />
  </div>
</template>
<script>
import draggable from 'vuedraggable'
import ComponentMixin from '../ComponentMixin.js'
import AddComponentDialog from 'components/AddComponentDialog.vue'
import EditComponentDialog from 'components/EditComponentDialog.vue'

export default {
  mixins: [ComponentMixin],
  components: { draggable, AddComponentDialog, EditComponentDialog },
  methods: {
    addComponent (type) {
      const component = this.$cardscript.body[type]

      if (component.required && component.required.includes('id')) {
        // todo: make id more unique - short uuid maybe?
        component.data.id = `collapsibleComponent${this.clonedData.card.body.length + 1}`
      }

      const card = Object.assign({}, this.clonedData.card)
      const items = [...card.body]
      items.push(component.data)
      card.body = items

      this.clonedData.card = card

      this.addDialogShow = false
    },
    editComponentOpen (item, idx) {
      this.editDialog.show = true
      this.editDialog.idx = idx
      this.editDialog.component = item
    },
    editComponent (component) {
      const card = Object.assign({}, this.clonedData.card)
      const items = [...card.body]
      items[this.editDialog.idx] = component
      card.body = items

      this.clonedData.card = card

      this.editDialog.show = false
    },
    deleteComponent (idx) {
      this.$q.dialog({
        title: 'Confirm',
        message: 'Are you sure you want to remove this component?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        const card = Object.assign({}, this.clonedData.card)
        const items = [...card.body]
        items.splice(idx, 1)
        card.body = items

        this.clonedData.card = card
      })
    }
  }
}
</script>
