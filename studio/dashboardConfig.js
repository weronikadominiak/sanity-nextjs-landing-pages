export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '6101601c63038d11cc80e424',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-jn1cub8i',
                  apiId: '67743aee-5fb2-4d86-b566-88bdbaaf8bc3'
                },
                {
                  buildHookId: '6101601cf455f30320f27547',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-mj2q3umx',
                  apiId: '15e76954-c20e-40bc-8ba8-1ec53035c030'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/weronikadominiak/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-mj2q3umx.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
