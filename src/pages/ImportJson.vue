<template>
  <q-page padding>
    <q-card>
      <q-card-section>
        <q-input
          label="Paste your Cardscript JSON here"
          v-model="cardscript"
          type="textarea"
          :max-height="600"
          rows="7"
        />
      </q-card-section>

      <q-card-actions align="right">
        <q-btn label="Import" color="primary" @click="importJson" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>
<script>
const uuidv1 = require('uuid/v1')

export default {
  name: 'PagePreview',
  data () {
    return {
      cardscript: ''
    }
  },
  methods: {
    importJson () {
      if (this.cardscript) {
        // todo: validate against cardscript-schema?
        const id = uuidv1()
        this.$store.commit('app/cardId', id)
        this.$store.commit('app/cardscript', JSON.parse(this.cardscript))
        this.$router.push({ path: `/${id}/edit` })
      }
    }
  }
}
</script>
