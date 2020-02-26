
const routes = [
  {
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { name: 'edit', path: '/:cardId/edit', component: () => import('pages/Edit.vue') },
      { name: 'preview', path: '/:cardId/preview', component: () => import('pages/Preview.vue') },
      { name: 'viewJson', path: '/:cardId/view-json', component: () => import('pages/ViewJson.vue') },
      { name: 'importJson', path: '/import-json', component: () => import('pages/ImportJson.vue') },
      { name: 'editor', path: '/editor', component: () => import('pages/Editor.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
