/**
 * 右上角导航
 */
const pkg = require('../../package.json')

const nav = [
    { text: '导航', link: '/nav', activeMatch: '^/nav' },
    {
        text:'个人笔记',
        items: [
            {text: 'HTML/CSS 知识', link: `/f2e/html/index`},
            {text: 'JavaScript 基础知识', link: '/f2e/javascript/types'},
            {text: 'ES6 知识点', link: '/f2e/es6/index'},
            {text: 'TypeScript', link: '/f2e/typescript/base'},
            {text: '前端概念知识点', link: '/f2e/concept/module'},
        ]
    },
    {
        text: 'work',
        items: [
            {text: '常用工具/方法', link: `/workflow/utils/library`},
            {text: 'Node 相关', link: '/workflow/node/npm'},
            {text: '终端相关', link: '/workflow/terminal/zsh'},
            {text: 'Git 相关', link: '/workflow/git/'},
        ]
    },
    {
        text: '提效工具',
        items: [
            {text: '软件推荐与配置', link: `/efficiency/software/cross-platform`},
           
        ]
    },
]

export default nav
