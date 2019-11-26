<template>
  <div>
    <q-select label="Spacing" v-model="clonedData.spacing" :options="spacing" />

    <q-checkbox label="Separator?" v-model="clonedData.separator" class="q-my-md" /> <br />

    <q-card class="bg-grey-3 q-my-md">
      <q-card-section>
        <div class="text-caption text-uppercase text-grey-8">Items</div>

        <q-markup-table v-if="clonedData.facts && clonedData.facts.length > 0" flat class="q-mt-md bg-grey-3">
          <thead>
          <tr>
            <th class="text-left">Title</th>
            <th class="text-left">Value</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(fact, idx) in clonedData.facts" :key="idx">
            <td class="text-left">
              {{fact.title}}
              <q-popup-edit v-model="fact.title">
                <q-input v-model="fact.title" dense autofocus />
              </q-popup-edit>
            </td>
            <td class="text-left">
              {{fact.value}}
              <q-popup-edit v-model="fact.value">
                <q-input v-model="fact.value" dense autofocus />
              </q-popup-edit>
            </td>
            <td class="text-right">
              <q-btn icon="delete" flat round dense size="sm" color="negative" @click="removeFact(idx)" />
            </td>
          </tr>
          </tbody>
        </q-markup-table>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn label="Add" dense color="primary" class="q-mt-md" @click="addFact" />
      </q-card-actions>
    </q-card>
  </div>
</template>
<script>
import ComponentMixin from '../ComponentMixin.js'
export default {
  mixins: [ComponentMixin],
  methods: {
    addFact () {
      const facts = [...this.clonedData.facts]
      facts.push({ title: `Title`, value: `VALUE` })
      this.clonedData.facts = facts
    },
    removeFact (idx) {
      const facts = [...this.clonedData.facts]
      facts.splice(idx, 1)
      this.clonedData.facts = facts
    }
  }
}
</script>
