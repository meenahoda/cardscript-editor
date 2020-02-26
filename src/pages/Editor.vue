<template>
  <div>
    <q-toolbar class="bg-primary text-white">
      <q-toolbar-title class="text-caption">{{ loadedCardId }}</q-toolbar-title>

      <q-btn label="new" outline dense size="sm" class="q-mr-sm" @click="newCardscript" />
      <q-btn label="save" outline dense size="sm" class="q-mr-sm" @click="saveCardscript" />
      <q-btn label="import" outline dense size="sm" class="q-mr-sm" @click="importDialog.show = true" />
      <q-btn label="load" outline dense size="sm" class="q-mr-sm" @click="loadDialogShow = true" v-if="Object.keys(cards).length > 0" />
    </q-toolbar>

    <div class="row items-start">
      <div class="col q-pa-xs">
        <q-card>
          <q-card-section>
            <div class="text-caption text-uppercase text-grey">Meta</div>
            <q-input label="Title" v-model="cardscript.templateMeta.title" />
          </q-card-section>

          <q-separator />

          <q-card-section>
            <div class="text-caption text-uppercase text-grey">Body</div>

            <q-list>
              <draggable v-model="cardscriptBody" handle=".drag-handle" :options="{ animation: 150 }">
                <q-item v-for="(item, idx) in cardscriptBody" :key="idx" dense>
                  <q-item-section side>
                    <q-icon color="grey-8" name="drag_indicator" style="cursor: move;" class="drag-handle" />
                  </q-item-section>

                  <q-item-section>
                    <q-item-label>{{ item.type }}</q-item-label>
                    <q-item-label caption :lines="1">{{ getComponentCaption(item) }}</q-item-label>
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
              <draggable v-model="cardscriptActions" handle=".drag-handle" :options="{ animation: 150 }">
                <q-item v-for="(item, idx) in cardscriptActions" :key="idx" dense>
                  <q-item-section side>
                    <q-icon color="grey-8" name="drag_indicator" style="cursor: move;" class="drag-handle" />
                  </q-item-section>

                  <q-item-section>
                    <q-item-label>{{ item.type }}</q-item-label>
                    <q-item-label caption :lines="1">{{ getComponentCaption(item) }}</q-item-label>
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
      </div>

      <div class="col q-pa-xs">
        <q-card>
          <q-card-section>
            <q-input
              ref="viewJSON"
              v-bind:value="JSON.stringify(cardscript, null, 2)"
              type="textarea"
              rows="7"
              readonly
            />
          </q-card-section>

          <q-card-actions align="right">
            <q-btn label="Copy" color="primary" @click="copyToClipboard">
              <q-tooltip>Copy to clipboard</q-tooltip>
            </q-btn>
          </q-card-actions>
        </q-card>
      </div>

      <div class="col q-pa-xs">
        <q-card>
          <q-card-section>
            <cardscript-component :cardscript="cardscript" :key="componentKey" />
          </q-card-section>
        </q-card>
      </div>
    </div>

    <q-dialog v-model="importDialog.show" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-caption text-uppercase text-grey">Import</div>
        </q-card-section>

        <q-card-section>
          <q-input
            label="Paste your Cardscript JSON here"
            v-model="importDialog.cardscript"
            type="textarea"
            rows="7"
          />
        </q-card-section>

        <q-card-actions align="right">
          <q-btn label="Cancel" color="primary" @click="importDialog.show = false" outline />
          <q-btn label="Import" color="primary" @click="importCardscript" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="loadDialogShow" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-caption text-uppercase text-grey">Load</div>
        </q-card-section>

        <q-card-section>
          <q-list>
            <q-item v-for="(card, cardId) in cards" :key="cardId" clickable @click="loadCardscript(cardId, card)">
              <q-item-section>
                <q-item-label>{{ getTitle(card) }}</q-item-label>
                <q-item-label caption>{{ cardId }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn label="Cancel" color="primary" @click="loadDialogShow = false" outline />
        </q-card-actions>
      </q-card>
    </q-dialog>

  </div>
</template>
<script>
const uuidv1 = require('uuid/v1')

import draggable from 'vuedraggable'
import cardscriptComponent from '@wmfs/cardscript-component'
import AddComponentDialog from 'components/AddComponentDialog.vue'
import EditComponentDialog from 'components/EditComponentDialog.vue'

export default {
  name: 'Editor',
  components: {
    cardscriptComponent,
    draggable,
    AddComponentDialog,
    EditComponentDialog
  },
  data () {
    return {
      componentKey: 0,
      componentKeySavedAt: 0,
      loadedCardId: null,
      cardId: null,
      addDialogShow: false,
      arrayEditing: null,
      editDialog: {
        show: false,
        idx: null,
        component: {}
      },
      importDialog: {
        show: false,
        cardscript: '{}'
      },
      loadDialogShow: false
    }
  },
  watch: {
    cardscript: {
      handler () {
        this.componentKey += 1
      },
      deep: true
    }
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
  },
  methods: {
    copyToClipboard () {
      this.$refs['viewJSON'].select()
      document.execCommand('copy')
      this.$q.notify({
        color: 'positive',
        message: 'Copied to clipboard.'
      })
    },
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
        this.componentKey += 1
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
      this.componentKey += 1
    },
    deleteComponent (idx, arrayEditing) {
      this.$q.dialog({
        title: 'Confirm',
        message: 'Are you sure you want to remove this component?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.$store.commit('app/deleteComponent', { idx, array: arrayEditing })
        this.componentKey += 1
      })
    },
    newCardscript () {
      const reset = () => {
        this.loadedCardId = null
        this.$store.commit('app/resetCardscript')
        this.componentKey += 1
      }

      // if (this.componentKey !== this.componentKeySavedAt) {
      if (this.loadedCardId === null) {
        this.$q.dialog({
          title: 'Confirm',
          message: 'You have un-saved changes. Are you sure you want to start a new cardscript?',
          cancel: true,
          persistent: true
        }).onOk(() => {
          reset()
        })
      } else {
        reset()
      }
    },
    saveCardscript () {
      let id

      if (this.loadedCardId) {
        id = this.loadedCardId
      } else {
        id = uuidv1()
        this.loadedCardId = id
      }

      this.$store.commit('app/setCardId', id)
      this.$store.commit('app/saveCurrentCard')
      this.componentKeySavedAt = this.componentKey
      this.$q.notify({ color: 'positive', message: 'Saved.' })
    },
    importCardscript () {
      this.loadedCardId = null
      this.cardscript = JSON.parse(this.importDialog.cardscript)
      this.componentKey += 1
      this.importDialog.show = false
      this.importDialog.cardscript = '{}'
    },
    loadCardscript (cardId, card) {
      this.cardscript = card
      this.componentKey += 1
      this.loadDialogShow = false
      this.loadedCardId = cardId
    },
    getTitle (card) {
      return card.templateMeta && card.templateMeta.title
        ? card.templateMeta.title
        : ''
    },
    getComponentCaption (item) {
      if (item.id) {
        return item.id
      } else if (item.title) {
        return item.title
      } else if (item.text) {
        return item.text
      } else {
        console.log(Object.keys(item))
      }
    }
  },
  mounted () {
    this.cardId = this.$route.params.cardId

    const cardscript = this.cards[this.cardId]
    if (cardscript) this.cardscript = cardscript
  }
}
</script>
