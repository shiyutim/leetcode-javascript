module.exports = {
    title: 'leetcode for javascript',
    base: '/leetcode-javascript/',
    description: '使用 JavaScript 解 leetcoede',
    themeConfig: {
      lastUpdated: '最后更新时间',
      repo: 'shiyutim/leetcode-javascript',
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
            title: '1-100',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              '1-100/14',
              '1-100/41',
              '1-100/58',
              '1-100/73',
            ]
          },
          {
            title: '101-200',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              '101-200/125',
              '101-200/189',
            ]
          },
          {
            title: '201-300',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              '201-300/274',
              '201-300/283',
            ]
          },
          {
            title: '301-400',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              '301-400/303.md',
              '301-400/344.md',
              '301-400/396.md',
            ]
          },
          {
            title: '401-500',   // 必要的
          //   path: '/401-500/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 0,    // 可选的, 默认值是 1
            children: [
              '401-500/414',
              '401-500/434',
              '401-500/442',
              '401-500/448',
              '401-500/453',
              '401-500/485',
              '401-500/495',
              
            ]
          },
          {
            title: '501-600',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              '501-600/520.md',
              '501-600/541.md',
              '501-600/557.md',
              '501-600/566.md',
            ]
          },
          {
            title: '601-700',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              '601-700/628',
              '601-700/645',
              '601-700/665',
              '601-700/697'
            ]
          },
        ]
      }
  }