<template>
  <div>
    <q-input label="ID" v-model="clonedData.id" />
    <q-input label="Button Text" v-model="clonedData.buttonText" />

    <q-input label="Endpoint Name" v-if="clonedData.endpoint" v-model="clonedData.endpoint.name" />
    // TODO: endpoint.params

    <q-input label="Result Context Path" v-if="clonedData.ctxPaths" v-model="clonedData.ctxPaths.results" />
    <q-input label="Total Hits Context Path" v-if="clonedData.ctxPaths" v-model="clonedData.ctxPaths.totalHits" />

    <q-input label="Results per page" v-model="clonedData.resultsPerPage" type="number" min="0" />

    <q-select label="Spacing" v-model="clonedData.spacing" :options="spacing" />

    <q-checkbox label="Show Pagination?" v-model="clonedData.showPagination" /> <br />

    <q-card v-for="card in ['parameters', 'results']" :key="card" class="bg-grey-3 q-my-md">
      <q-card-section>
        <div class="text-caption text-uppercase text-grey-8">{{card === 'parameters' ? 'Parameters' : 'Results'}} Card</div>

        <q-list v-if="clonedData[`${card}Card`] && clonedData[`${card}Card`].body.length > 0">
          <draggable v-model="clonedData[`${card}Card`].body" handle=".drag-handle" :options="{ animation: 150 }">
            <q-item v-for="(c, idx) in clonedData[`${card}Card`].body" :key="idx">
              <q-item-section side>
                <q-icon color="grey-8" name="drag_indicator" style="cursor: move;" class="drag-handle" />
              </q-item-section>

              <q-item-section>
                <q-item-label>{{c.type}} {{c.id ? `/ ${c.id}` : ''}}</q-item-label>
              </q-item-section>

              <q-item-section side>
                <div class="text-grey-8 q-gutter-xs">
                  <q-btn size="12px" flat dense round icon="settings" @click="editComponentOpen(c, idx, card)" />
                  <q-btn size="12px" flat dense round icon="delete" @click="deleteComponent(idx, card)" />
                </div>
              </q-item-section>
            </q-item>
          </draggable>
        </q-list>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn label="Add" dense color="primary" @click="addComponentOpen(card)" />
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
  data () {
    return {
      cardInAction: ''
    }
  },
  methods: {
    addComponentOpen (card) {
      this.addDialogShow = true
      this.cardInAction = card
    },
    addComponent (type) {
      const component = this.$cardscript.body[type]

      if (component.required && component.required.includes('id')) {
        // todo: make id more unique - short uuid maybe?
        component.data.id = `containerComponent${this.clonedData.items.length + 1}`
      }

      const items = [...this.clonedData[`${this.cardInAction}Card`].body]
      items.push(component.data)
      this.clonedData[`${this.cardInAction}Card`] = { type: 'AdaptiveCard', body: items }
      this.addDialogShow = false
    },
    editComponentOpen (item, idx, card) {
      this.editDialog.show = true
      this.editDialog.idx = idx
      this.editDialog.component = item
      this.cardInAction = card
    },
    editComponent (component) {
      const items = [...this.clonedData[`${this.cardInAction}Card`].body]
      items[this.editDialog.idx] = component
      this.clonedData[`${this.cardInAction}Card`] = { type: 'AdaptiveCard', body: items }
      this.editDialog.show = false
    },
    deleteComponent (idx, card) {
      this.$q.dialog({
        title: 'Confirm',
        message: 'Are you sure you want to remove this component?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        const items = [...this.clonedData[`${card}Card`].body]
        items.splice(idx, 1)
        this.clonedData[`${this.cardInAction}Card`] = { type: 'AdaptiveCard', body: items }
      })
    }
  }
}
</script>
