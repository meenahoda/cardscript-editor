<template>
  <q-page padding>
    <q-card>
      <q-card-section>
        <div class="text-caption text-uppercase text-grey">Meta</div>
        <q-input label="Title" v-model="cardscript.templateMeta.title" />
      </q-card-section>

      <q-separator />

      <q-card-section>
        <div class="text-caption text-uppercase text-grey">Body</div>

        <q-list>
          <draggable v-model="cardscriptBody" :options="{ animation: 150 }">
            <q-item v-for="(item, idx) in cardscriptBody" :key="idx" dense>
              <q-item-section side>
                <q-icon color="grey-8" name="drag_indicator" style="cursor: move;" />
              </q-item-section>

              <q-item-section>
                <q-item-label>{{item.type}} {{item.id ? `/ ${item.id}` : ''}}</q-item-label>
              </q-item-section>

              <q-item-section side>
                <div class="text-grey-8 q-gutter-xs">
                  <q-btn size="12px" flat dense round icon="settings" @click="editComponent(item, idx, 'body')" />
                  <q-btn size="12px" flat dense round icon="delete" @click="deleteComponent(idx, 'body')" />
                </div>
              </q-item-section>
            </q-item>
          </draggable>
        </q-list>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn label="Add" color="primary" @click="addBody" />
      </q-card-actions>

      <q-separator />

      <q-card-section>
        <div class="text-caption text-uppercase text-grey">Actions</div>

        <q-list>
          <draggable v-model="cardscriptActions" :options="{ animation: 150 }">
            <q-item v-for="(item, idx) in cardscriptActions" :key="idx" dense>
              <q-item-section side>
                <q-icon color="grey-8" name="drag_indicator" style="cursor: move;" />
              </q-item-section>

              <q-item-section>
                <q-item-label>{{item.type}} {{item.id ? `/ ${item.id}` : ''}}</q-item-label>
              </q-item-section>

              <q-item-section side>
                <div class="text-grey-8 q-gutter-xs">
                  <q-btn size="12px" flat dense round icon="settings" @click="editComponent(item, idx, 'actions')" />
                  <q-btn size="12px" flat dense round icon="delete" @click="deleteComponent(idx, 'actions')" />
                </div>
              </q-item-section>
            </q-item>
          </draggable>
        </q-list>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn label="Add" color="primary" @click="addActions" />
      </q-card-actions>
    </q-card>

    <add-component-dialog
      :show="addDialogShow"
      :arrayEditing="arrayEditing"
      @add="addComponent"
      @cancel="addDialogShow = false"
    />

    <edit-component-dialog
      :show="editDialog.show"
      :arrayEditing="arrayEditing"
      :index="editDialog.idx"
      :component="editDialog.component"
      @save="editComponentSave"
      @close="editDialog.show = false"
    />
  </q-page>
</template>

<script>
import draggable from 'vuedraggable'
import AddComponentDialog from 'components/AddComponentDialog.vue'
import EditComponentDialog from 'components/EditComponentDialog.vue'

export default {
  name: 'PageEdit',
  components: { draggable, AddComponentDialog, EditComponentDialog },
  data () {
    return {
      cardId: null,
      addDialogShow: false,
      arrayEditing: null,
      editDialog: {
        show: false,
        idx: null,
        component: {}
      }
    }
  },
  methods: {
    addBody () {
      this.addDialogShow = true
      this.arrayEditing = 'body'
    },
    addActions () {
      this.addDialogShow = true
      this.arrayEditing = 'actions'
    },
    addComponent (type) {
      if (type && this.arrayEditing) {
        this.$store.commit('app/addComponent', {
          type,
          array: this.arrayEditing,
          $cardscript: this.$cardscript
        })

        this.addDialogShow = false
      }
    },
    editComponent (item, idx, arrayEditing) {
      this.editDialog.show = true
      this.editDialog.idx = idx
      this.arrayEditing = arrayEditing
      this.editDialog.component = item
    },
    editComponentSave (component) {
      this.$store.commit('app/editComponent', {
        idx: this.editDialog.idx,
        array: this.arrayEditing,
        component
      })

      this.editDialog.show = false
    },
    deleteComponent (idx, arrayEditing) {
      this.$store.commit('app/deleteComponent', {
        idx,
        array: arrayEditing
      })
    }
  },
  mounted () {
    this.cardId = this.$route.params.cardId

    const cardscript = this.cards[this.cardId]
    if (cardscript) this.cardscript = cardscript
  },
  computed: {
    cards () {
      return this.$store.state.app.cards
    },
    cardscript: {
      get () {
        return this.$store.state.app.cardscript
      },
      set (e) {
        this.$store.commit('app/setCardscript', e)
      }
    },
    cardscriptBody: {
      get () {
        return this.$store.state.app.cardscript.body
      },
      set (e) {
        const cardscript = Object.assign({}, this.cardscript)
        cardscript.body = e
        this.cardscript = cardscript
      }
    },
    cardscriptActions: {
      get () {
        return this.$store.state.app.cardscript.actions
      },
      set (e) {
        const cardscript = Object.assign({}, this.cardscript)
        cardscript.actions = e
        this.cardscript = cardscript
      }
    }
  }
}
</script>
