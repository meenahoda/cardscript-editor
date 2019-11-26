<template>
  <div>
    <q-input label="Title" v-model="clonedData.title" />

    <q-select label="Spacing" v-model="clonedData.spacing" :options="spacing" />
    <q-select label="Action Style" v-model="clonedData.actionStyle" :options="actionStyles" />

    <q-card class="bg-grey-3 q-my-md">
      <q-card-section>
        <div class="text-caption text-uppercase text-grey-8">Actions</div>

        <q-list v-if="clonedData.actions && clonedData.actions.length > 0">
          <draggable v-model="clonedData.actions" :options="{ animation: 150 }">
            <q-item v-for="(c, idx) in clonedData.actions" :key="idx">
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
      arrayEditing="actions"
      @add="addComponent"
      @cancel="addDialogShow = false"
    />

    <edit-component-dialog
      :show="editDialog.show"
      arrayEditing="actions"
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
      const component = this.$cardscript.actions[type]

      if (component.required && component.required.includes('id')) {
        // todo: make id more unique - short uuid maybe?
        component.data.id = `actionSetComponent${this.clonedData.actions.length + 1}`
      }

      const actions = [...this.clonedData.actions]
      actions.push(component.data)
      this.clonedData.actions = actions
      this.addDialogShow = false
    },
    editComponentOpen (item, idx) {
      this.editDialog.show = true
      this.editDialog.idx = idx
      this.editDialog.component = item
    },
    editComponent (component) {
      const actions = [...this.clonedData.actions]
      actions[this.editDialog.idx] = component
      this.clonedData.actions = actions
      this.editDialog.show = false
    },
    deleteComponent (idx) {
      const actions = [...this.clonedData.actions]
      actions.splice(idx, 1)
      this.clonedData.actions = actions
    }
  }
}
</script>
