<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn v-if="$route.name === 'edit' || $route.name === 'preview' || $route.name === 'viewJson' || $route.name === 'importJson'" icon="arrow_back" round flat @click="goBack"/>

        <q-toolbar-title>
          Cardscript Editor
        </q-toolbar-title>

        <q-btn v-if="$route.name === 'edit'" icon="save" round flat @click="save">
          <q-tooltip>
            Save
          </q-tooltip>
        </q-btn>

        <q-btn v-if="$route.name === 'edit'" icon="visibility" round flat @click="preview">
          <q-tooltip>
            Preview
          </q-tooltip>
        </q-btn>

        <q-btn v-if="$route.name === 'edit'" icon="code" round flat @click="viewJson">
          <q-tooltip>
            View JSON
          </q-tooltip>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { date } from 'quasar'

export default {
  name: 'Layout',
  computed: {
    cardId () {
      return this.$store.state.app.cardId
    },
    cardscript () {
      return this.$store.state.app.cardscript
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    preview () {
      this.save()
      this.$router.push({ path: `/${this.cardId}/preview` })
    },
    save () {
      this.$store.commit('app/saveCurrentCard')
    },
    viewJson () {
      this.save()
      this.$router.push({ path: `/${this.cardId}/view-json` })
    },
    formatDate: date.formatDate
  }
}
</script>
