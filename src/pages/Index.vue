<template>
  <q-page class="q-pa-xl">
    <div class="row justify-around text-center text-grey-8">
      <q-card
        class="q-pa-md q-mb-md col-md-4 col-sm-12 col-xs-12 cursor-pointer"
        v-for="(action, idx) in actions"
        :key="idx"
        @click="action.launch()"
        v-ripple
      >
        <q-card-section>
          <div class="text-h4">{{action.title}}</div>
        </q-card-section>

        <q-card-section style="font-size: 3rem;">
          <q-icon :name="action.icon" />
        </q-card-section>

        <q-card-section>
          <div class="text-subtitle1">{{action.description}}</div>
        </q-card-section>
      </q-card>
    </div>

    <q-card class="q-mt-lg">
      <q-card-section>
        <q-list v-if="Object.keys(cards).length > 0">
          <q-item-label header>Existing cards from local storage:</q-item-label>

          <q-item v-for="(card, cardId) in cards" :key="cardId">
            <q-item-section>
              <q-item-label>{{getTitle(card)}}</q-item-label>
            </q-item-section>

            <q-item-section side>
              <div class="text-grey-8 q-gutter-xs">
                <q-btn size="12px" flat dense round icon="edit" @click="launchCard(cardId)" />
                <q-btn size="12px" flat dense round icon="delete" @click="deleteCard(cardId)" />
              </div>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
const uuidv1 = require('uuid/v1')

export default {
  name: 'PageIndex',
  data () {
    return {
      actions: [
        {
          title: 'Create',
          icon: 'add_circle_outline',
          description: 'Create a new card from scratch using the drag-n-drop editor.',
          launch: this.startNewCardscript
        },
        {
          title: 'Import',
          icon: 'insert_drive_file',
          description: 'Import an existing card from JSON.',
          launch: this.importJson
        }
      ]
    }
  },
  methods: {
    startNewCardscript () {
      const id = uuidv1()
      this.$store.commit('app/setCardId', id)
      this.$store.commit('app/resetCardscript')
      this.launchCard(id)
    },
    importJson () {
      this.$router.push({ path: `/import-json` })
    },
    launchCard (cardId) {
      this.$router.push({ path: `/${cardId}/edit` })
    },
    deleteCard (cardId) {
      this.$q.dialog({
        title: 'Confirm',
        message: 'Are you sure you want to remove this card?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        const cards = Object.assign({}, this.cards)
        delete cards[cardId]
        this.cards = cards
      })
    },
    getTitle (card) {
      return card.templateMeta && card.templateMeta.title
        ? card.templateMeta.title
        : ''
    }
  },
  computed: {
    cards: {
      get () {
        return this.$store.state.app.cards
      },
      set (e) {
        this.$store.commit('app/setCards', e)
      }
    }
  }
}
</script>
