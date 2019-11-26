<template>
  <div>
    <q-input label="ID" v-model="clonedData.id" />
    <q-input label="Title" v-model="clonedData.title" />
    <q-input label="Icon" v-model="clonedData.icon" />

    <q-select label="Spacing" v-model="clonedData.spacing" :options="spacing" />
    <q-select label="Style" v-model="clonedData.style" :options="choiceStyles" />

    <q-checkbox label="Clearable?" v-model="clonedData.clearable" /> <br />
    <q-checkbox label="Separator?" v-model="clonedData.separator" /> <br />
    <q-checkbox label="Is multiselect?" v-model="clonedData.isMultiSelect" />

    <q-card class="bg-grey-3 q-my-md">
      <q-card-section>
        <div class="text-subtitle1">Choices</div>

        <q-markup-table v-if="clonedData.choices && clonedData.choices.length > 0" flat class="q-mt-md bg-grey-3">
          <thead>
          <tr>
            <th class="text-left">Title</th>
            <th class="text-left">Value</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(choice, idx) in clonedData.choices" :key="idx">
            <td class="text-left">
              {{choice.title}}
              <q-popup-edit v-model="choice.title">
                <q-input v-model="choice.title" dense autofocus />
              </q-popup-edit>
            </td>
            <td class="text-left">
              {{choice.value}}
              <q-popup-edit v-model="choice.value">
                <q-input v-model="choice.value" dense autofocus />
              </q-popup-edit>
            </td>
            <td class="text-right">
              <q-btn icon="delete" flat round dense size="sm" color="negative" @click="removeChoice(idx)" />
            </td>
          </tr>
          </tbody>
        </q-markup-table>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn label="Add" dense color="primary" @click="addChoice()" />
      </q-card-actions>
    </q-card>
  </div>
</template>
<script>
import ComponentMixin from '../ComponentMixin.js'
export default {
  mixins: [ComponentMixin],
  methods: {
    addChoice () {
      const choices = [...this.clonedData.choices]
      choices.push({ title: `Title`, value: `VALUE` })
      this.clonedData.choices = choices
    },
    removeChoice (idx) {
      const choices = [...this.clonedData.choices]
      choices.splice(idx, 1)
      this.clonedData.choices = choices
    }
  }
}
</script>
