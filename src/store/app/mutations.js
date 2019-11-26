import { date } from 'quasar'

export function setCards (state, e) { state.cards = e }

export function setCardId (state, e) { state.cardId = e }

export function setCardscript (state, e) { state.cardscript = e }

export function resetCardscript (state) {
  state.cardscript = {
    type: 'AdaptiveCard',
    $schema: 'http://adaptivecards.io/schemas/adaptive-card.json',
    version: '1.0',
    templateMeta: {
      name: '',
      title: '',
      category: ''
    },
    body: [],
    actions: []
  }
}

export function saveCurrentCard (state) {
  if (!state.cardscript.templateMeta.title) {
    state.cardscript.templateMeta.title = `Untitled - ${date.formatDate(new Date(), 'DD/MM/YY HH:mm')}`
  }

  state.cards[state.cardId] = state.cardscript
}

export function addComponent (state, { type, array, $cardscript }) {
  const component = $cardscript[array][type]
  if (component) {
    if (component.required.includes('id')) {
      component.data.id = `component${state.cardscript[array].length + 1}`
    }

    state.cardscript[array].push(component.data)
  } else {
    console.warn(`Cannot find component: '${array}/${type}'`)
  }
}

export function editComponent (state, { idx, array, component }) {
  state.cardscript[array][idx] = component
}

export function deleteComponent (state, { idx, array }) {
  state.cardscript[array].splice(idx, 1)
}
