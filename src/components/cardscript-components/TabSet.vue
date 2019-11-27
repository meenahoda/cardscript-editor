<template>
  <div>
    <q-input label="ID" v-model="clonedData.id" />

    <q-select label="Spacing" v-model="clonedData.spacing" :options="spacing" />

    <q-card class="bg-grey-3 q-my-md">
      <q-card-section>
        <div class="text-caption text-uppercase text-grey-8">Tabs</div>

        <q-list v-if="clonedData.tabs && clonedData.tabs.length > 0">
          <draggable v-model="clonedData.tabs" handle=".drag-handle" :options="{ animation: 150 }">
            <q-item v-for="(c, idx) in clonedData.tabs" :key="idx">
              <q-item-section side>
                <q-icon color="grey-8" name="drag_indicator" style="cursor: move;" class="drag-handle" />
              </q-item-section>

              <q-item-section>
                <q-item-label>{{c.type}}</q-item-label>
                <q-item-label caption lines="1" class="ellipsis">{{c.title}}</q-item-label>
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
        <q-btn label="Add" dense color="primary" @click="addTab" />
      </q-card-actions>
    </q-card>

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
import EditComponentDialog from 'components/EditComponentDialog.vue'

export default {
  mixins: [ComponentMixin],
  components: { draggable, EditComponentDialog },
  methods: {
    addTab () {
      const tabs = [...this.clonedData.tabs]
      tabs.push({ type: 'Tab', title: `tab-${tabs.length}`, items: [] })
      this.clonedData.tabs = tabs
    },
    editComponentOpen (item, idx) {
      this.editDialog.show = true
      this.editDialog.idx = idx
      this.editDialog.component = item
    },
    editComponent (component) {
      const tabs = [...this.clonedData.tabs]
      tabs[this.editDialog.idx] = component
      this.clonedData.tabs = tabs
      this.editDialog.show = false
    },
    deleteComponent (idx) {
      this.$q.dialog({
        title: 'Confirm',
        message: 'Are you sure you want to remove this tab?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        const tabs = [...this.clonedData.tabs]
        tabs.splice(idx, 1)
        this.clonedData.tabs = tabs
      })
    }
  }
}
</script>
