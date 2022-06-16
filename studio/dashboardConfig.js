export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62abc1f720d8f24b28f813ce',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-65xqcuia',
                  apiId: 'ce6f0d08-d5ff-4ed6-a87e-5bc28f2e602c'
                },
                {
                  buildHookId: '62abc1f89c458952a26209e5',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-eht9dhiq',
                  apiId: '56021d26-1e9f-498a-83e5-1c31e9706956'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pucilpet/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-eht9dhiq.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
