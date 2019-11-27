<template>
  <div>
    <q-input label="ID" v-model="clonedData.id" />
    <q-input label="Title" v-model="clonedData.title" />
    <q-input label="Array Path" v-model="clonedData.arrayPath" />
    <q-input label="Not Found Text" v-model="clonedData.notFoundText" />
    <q-input label="Row Key" v-model="clonedData.rowKey" />

    <q-select label="Spacing" v-model="clonedData.spacing" :options="spacing" />
    <q-select label="Selection Type" v-model="clonedData.selectionType" :options="selectionType" />

    <q-checkbox label="Show Launches?" v-model="clonedData.showLaunches" /> <br />

    <q-card class="bg-grey-3 q-my-md">
      <q-card-section>
        <div class="text-caption text-uppercase text-grey-8">Columns</div>

        <q-markup-table v-if="clonedData.columns && clonedData.columns.length > 0" flat class="q-mt-md bg-grey-3">
          <thead>
          <tr>
            <th class="text-left">Title</th>
            <th class="text-left">Field</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(column, idx) in clonedData.columns" :key="idx">
            <td class="text-left">
              {{column.title}}
              <q-popup-edit v-model="column.title" touch-position buttons persistent fit>
                <q-input v-model="column.title" dense autofocus />
              </q-popup-edit>
            </td>
            <td class="text-left">
              {{column.field}}
              <q-popup-edit v-model="column.field" touch-position buttons persistent fit>
                <q-input v-model="column.field" dense autofocus />
              </q-popup-edit>
            </td>
            <td class="text-right">
              <q-btn icon="delete" flat round dense size="sm" color="negative" @click="removeColumn(idx)" />
            </td>
          </tr>
          </tbody>
        </q-markup-table>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn label="Add" dense color="primary" @click="addColumn()" />
      </q-card-actions>
    </q-card>
  </div>
</template>
<script>
import ComponentMixin from '../ComponentMixin.js'
export default {
  mixins: [ComponentMixin],
  methods: {
    addColumn () {
      const columns = [...this.clonedData.columns]
      columns.push({ title: `Title`, field: `FIELD` })
      this.clonedData.columns = columns
    },
    removeColumn (idx) {
      this.$q.dialog({
        title: 'Confirm',
        message: 'Are you sure you want to remove this column?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        const columns = [...this.clonedData.columns]
        columns.splice(idx, 1)
        this.clonedData.columns = columns
      })
    }
  }
}
</script>
