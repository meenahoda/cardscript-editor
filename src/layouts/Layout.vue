<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn v-if="$route.name === 'edit' || $route.name === 'preview' || $route.name === 'viewJson' || $route.name === 'importJson'" icon="arrow_back" round flat @click="goBack"/>

        <q-toolbar-title>
          Cardscript Editor
        </q-toolbar-title>

        <q-btn v-if="$route.name === 'edit'" icon="more_vert" round flat>
          <q-menu>
            <q-list style="min-width: 100px">
              <q-item clickable v-close-popup v-for="(action, idx) in actions" :key="idx" @click="action.launch">
                <q-item-section>{{action.title}}</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
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
  data () {
    return {
      actions: [
        { title: 'Save', launch: this.save },
        { title: 'Preview', launch: this.preview },
        { title: 'View JSON', launch: this.viewJson }
      ]
    }
  },
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
