module.exports = {
    title: 'leetcode for javascript',
    base: '/leetcode-javascript/',
    description: '使用 JavaScript 解 leetcoede',
    themeConfig: {
        sidebar: [
            {
              title:  '说明',   // 必要的
            //   path: '/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
              collapsable: false, // 可选的, 默认值是 true,
              sidebarDepth: 0,    // 可选的, 默认值是 1
              children: [
                '/'
              ]
            },
            {
              title: '401-500',   // 必要的
            //   path: '/401-500/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
              collapsable: false, // 可选的, 默认值是 true,
              sidebarDepth: 0,    // 可选的, 默认值是 1
              children: [
                  '401-500/401',
                '401-500/485',
              ]
            },
          ]
      }
  }