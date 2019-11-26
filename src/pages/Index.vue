<template>
  <q-page class="q-pa-xl">
    <q-btn label="Start new cardscript" outline color="primary" @click="startNewCardscript" class="q-mr-md" />

    <q-btn label="Import JSON" outline color="primary" @click="importJson" />

    <q-list class="q-mt-md">
      <q-item-label header>Existing cards from local storage:</q-item-label>

      <q-item v-for="(card, cardId) in cards" :key="cardId">
        <q-item-section>
          <q-item-label>{{cardId}}</q-item-label>
          <q-item-label caption>{{getTitle(card)}}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <div class="text-grey-8 q-gutter-xs">
            <q-btn size="12px" flat dense round icon="launch" @click="launchCard(cardId)" />
            <q-btn size="12px" flat dense round icon="delete" @click="deleteCard(cardId)" />
          </div>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
const uuidv1 = require('uuid/v1')

export default {
  name: 'PageIndex',
  methods: {
    startNewCardscript () {
      const id = uuidv1()
      this.$store.commit('app/cardId', id)
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
      this.$store.commit('app/removeCard', cardId)
    },
    getTitle (card) {
      return card.templateMeta && card.templateMeta.title
        ? card.templateMeta.title
        : ''
    }
  },
  computed: {
    cards () {
      return this.$store.state.app.cards
    }
  }
}
</script>
