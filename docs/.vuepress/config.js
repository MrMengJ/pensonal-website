module.exports = {
  title: 'MrMengJ',
  sidebarDepth: 0,
  themeConfig: {
    nav: [{
        text: 'Home',
        link: '/'
      },
      {
        text: 'Blog',
        link: '/blog/'
      },
      {
        text: 'AboutMe',
        link: '/introduce/'
      }
    ],
    sidebar: {
      '/introduce/': [{
        title: 'introduce',
        children: [{
          title: 'child1',
          children: [
            '/'
          ]
        }]
      }],
      '/blog/': [
        {
          title: 'Javascript',
          children: [
            '/blog/Javascirpt/a',
          ]
        },
        {
          title: 'CSS',
          children: [
            '/blog/CSS/b'
          ]
        },
        {
          title: 'HTML',
          children: [
            '/blog/HTML/c'
          ]
        }
        
      ]
    }
  }
}
