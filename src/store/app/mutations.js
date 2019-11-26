export function addCard (state, { id, card }) { state.cards[id] = card }

export function removeCard (state, id) { delete state.cards[id] }

export function cardId (state, e) { state.cardId = e }

export function cardscript (state, e) { state.cardscript = e }

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

export function addComponent (state, { type, array, $cardscript }) {
  const component = $cardscript[array][type]
  if (component) {
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
