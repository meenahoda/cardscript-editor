<template>
  <q-page padding>
    <q-card>
      <q-card-section>
        <q-input
          ref="viewJSON"
          v-bind:value="JSON.stringify(cardscript, null, 2)"
          type="textarea"
          :max-height="600"
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
  </q-page>
</template>
<script>
export default {
  name: 'PagePreview',
  computed: {
    cardscript () {
      const cardId = this.$route.params.cardId
      const cards = this.$store.state.app.cards
      return cards[cardId]
    }
  },
  methods: {
    copyToClipboard () {
      this.$refs['viewJSON'].select()
      document.execCommand('copy')
      this.$q.notify({
        position: 'top',
        message: 'Copied to clipboard.'
      })
    }
  }
}
</script>
