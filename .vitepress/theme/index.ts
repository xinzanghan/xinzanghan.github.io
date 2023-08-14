// theme
import mediumZoom from 'medium-zoom'
import { EnhanceAppContext, Theme, useRoute} from "vitepress";
import DefaultTheme from 'vitepress/theme'
import {nextTick, onMounted, watch} from "vue";
import { inBrowser } from 'vitepress'
import busuanzi from 'busuanzi.pure.js'
import './search.css'
import './styles/index.scss'
import IFooter from './components/IFooter.vue'
import MNavLinks from './components/MNavLinks.vue'
if (typeof window !== 'undefined') {
    /* 注销 PWA 服务 */
    if (window.navigator && navigator.serviceWorker) {
      navigator.serviceWorker.getRegistrations().then(function (registrations) {
        for (let registration of registrations) {
          registration.unregister()
        }
      })
    }
  
    /* 删除浏览器中的缓存 */
    if ('caches' in window) {
      caches.keys().then(function (keyList) {
        return Promise.all(
          keyList.map(function (key) {
            return caches.delete(key)
          })
        )
      })
    }
  }
const theme: Theme = {
    ...DefaultTheme,
    Layout: IFooter,
    enhanceApp({ app,router }: EnhanceAppContext) {
        app.component('MNavLinks',MNavLinks)
        // 一定要在这里判断一下是否是在浏览器中，不然在我们打包项目的时候会报错
        if (inBrowser) {
            router.onAfterRouteChanged = () => {
                busuanzi.fetch()
            }
        }
        // ...
    },
    setup() {
        const route = useRoute()
        const initZoom = () => {
            mediumZoom('.main img')
        }
        onMounted(() => {
            initZoom()
        })
        watch(
            () => route.path,
            () => nextTick(() => initZoom()),
            () => updateHomePageStyle(location.pathname === '/'),
            { immediate: true }
        )
    },
}
let homePageStyle: HTMLStyleElement | undefined

if (typeof window !== 'undefined') {
    // detect browser, add to class for conditional styling
    const browser = navigator.userAgent.toLowerCase()
    if (browser.includes('chrome')) {
      document.documentElement.classList.add('browser-chrome')
    } else if (browser.includes('firefox')) {
      document.documentElement.classList.add('browser-firefox')
    } else if (browser.includes('safari')) {
      document.documentElement.classList.add('browser-safari')
    }
  }

// Speed up the rainbow animation on home page
function updateHomePageStyle(value: boolean) {
    if (value) {
      if (homePageStyle) return
  
      homePageStyle = document.createElement('style')
      homePageStyle.innerHTML = `
      :root {
        animation: rainbow 12s linear infinite;
      }`
      document.body.appendChild(homePageStyle)
    } else {
      if (!homePageStyle) return
  
      homePageStyle.remove()
      homePageStyle = undefined
    }
  }

export default theme