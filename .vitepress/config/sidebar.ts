
import f2e from './sidebar/f2e.json'
export default {
    '/f2e/': f2e,
    '/workflow/': [
        {
          text: '常用工具/方法',
          collapsed: false,
          items: [
            { text: '工具库整理', link: '/workflow/utils/library' },
            { text: '常用正则整理', link: '/workflow/utils/regexp' },
            { text: '常用方法整理', link: '/workflow/utils/function' }
          ]
        },
       
        {
          text: 'Node 相关',
          // collapsed: false,
          items: [{ text: 'npm 常用命令', link: '/workflow/node/npm' }]
        },
        {
          text: '终端相关',
          collapsed: false,
          items: [
            { text: 'Zsh 配置', link: '/workflow/terminal/zsh' },
            { text: '命令行工具', link: '/workflow/terminal/toolkit' },
            { text: 'Shell 命令', link: '/workflow/terminal/shell' }
          ]
        },
        {
          text: 'Git 相关',
          collapsed: false,
          items: [
            { text: 'Git 相关技巧', link: '/workflow/git/' },
            { text: 'Git 命令清单', link: '/workflow/git/command' }
          ]
        }
      ],
}