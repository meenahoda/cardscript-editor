<template>
  <div>
    <q-input label="ID" v-model="clonedData.id" />
    <q-input label="Title" v-model="clonedData.title" />
    <q-input label="Background Image" v-model="clonedData.backgroundImage" />

    <q-select label="Wash" v-model="clonedData.wash" :options="wash" />
    <q-select label="Colour" v-model="clonedData.color" :options="color" />
    <q-select label="Spacing" v-model="clonedData.spacing" :options="spacing" />

    <q-checkbox label="Separator?" v-model="clonedData.separator" /> <br />

    <q-card class="bg-grey-3 q-my-md">
      <q-card-section>
        <div class="text-caption text-uppercase text-grey-8">Items</div>

        <q-list v-if="clonedData.items && clonedData.items.length > 0">
          <draggable v-model="clonedData.items" :options="{ animation: 150 }">
            <q-item v-for="(c, idx) in clonedData.items" :key="idx">
              <q-item-section side>
                <q-icon color="grey-8" name="drag_indicator" style="cursor: move;" />
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
        component.data.id = `containerComponent${this.clonedData.items.length + 1}`
      }

      const items = [...this.clonedData.items]
      items.push(component.data)
      this.clonedData.items = items
      this.addDialogShow = false
    },
    editComponentOpen (item, idx) {
      this.editDialog.show = true
      this.editDialog.idx = idx
      this.editDialog.component = item
    },
    editComponent (component) {
      const items = [...this.clonedData.items]
      items[this.editDialog.idx] = component
      this.clonedData.items = items
      this.editDialog.show = false
    },
    deleteComponent (idx) {
      const items = [...this.clonedData.items]
      items.splice(idx, 1)
      this.clonedData.items = items
    }
  }
}
</script>
