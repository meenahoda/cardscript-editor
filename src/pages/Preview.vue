<template>
  <q-page padding>
    <q-card>
      <q-card-section>
        <cardscript-component :cardscript="cardscript" />
      </q-card-section>
    </q-card>
  </q-page>
</template>
<script>
import cardscriptComponent from '@wmfs/cardscript-component'

export default {
  name: 'PagePreview',
  components: { cardscriptComponent },
  computed: {
    cardscript () {
      const cardId = this.$route.params.cardId
      const cards = this.$store.state.app.cards
      return cards[cardId]
    }
  }
}
</script>
