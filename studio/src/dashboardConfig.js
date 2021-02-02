export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '601927969bb7d15cc59b2b5f',
                  title: 'Sanity Studio',
                  name: 'saratho-studio',
                  apiId: 'd5e25676-c9d6-4a28-aecd-7bf06825a2f5'
                },
                {
                  buildHookId: '60192796018af68d9718f6ce',
                  title: 'Blog Website',
                  name: 'saratho',
                  apiId: 'e959184c-d01c-40a9-b477-ffc38bd85c1b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/aukoyy/saratho',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://saratho.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
