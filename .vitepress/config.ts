import { defineConfig, UserConfig } from 'vitepress'
import head from './config/head'
import nav from './config/nav'
import sidebar from './config/sidebar'
import pkg from '../package.json'
const config: UserConfig = {
    title: '心脏涵~',
    description: '个人笔记',
    lang: 'zh-CN',
    lastUpdated: true,
    ignoreDeadLinks: true,
    markdown: {
        lineNumbers: true,
    },
    head: head,
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config#outline
        outline: 'deep', // [2. 6]
        author: pkg.author,
        // 顶部导航
        nav: nav,
        // 侧边栏
        sidebar: sidebar,
        siteTitle: '学习笔记',
        lastUpdated: 'Last Updated',
        logo: '/favicon.ico',
        logoSmall: '/favicon.ico',
        editLink: {
            pattern: `${pkg.homepage}/edit/master/:path`,
            text: 'Edit this page on GitHub'
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/xinzanghan/' }
        ],
        search: {
            provider: 'local',
        },
        footers: [
                `如有转载或 CV 的请标注本站原文地址`,
                `<a target="_blank" href="https://github.com/xinzanghan">Copyright &copy; 2016 - ${new Date().getFullYear()} &nbsp;xinzanghan</a>`
        ]
    },
}
export default defineConfig(config)
