/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "icons/icon-144x144.png",
    "revision": "639c3e75ec46a4d16f02d5505c47b8e4"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "9c15b590dbcd93ee5a4eeec1b29ae3b5"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "0dae9702ccd62a9930ff5208a3688334"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "332d5c3d8b2280c14341af73ce9ca8c3"
  },
  {
    "url": "icons/icon-48x48.png",
    "revision": "a59e774d601b4b391630d8f6cb8f01b1"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "bcd5ec57a9a9b5ad790b92b6ff67ae7c"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "49441ebebd8148c9fb6b2b4cb4356e36"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "5ae7b51a7096f2d0497e196d8c65ef07"
  },
  {
    "url": "framework-96f2a45b7f57ca14c9e2.js"
  },
  {
    "url": "app-1c006765c8dc2b4d3091.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "4324a96f505bc4ade40bd8ed0e8b83c5"
  },
  {
    "url": "static/webfonts/s/alegreyasans/v13/5aUt9_-1phKLFgshYDvh6Vwt7V9dv21T.woff2"
  },
  {
    "url": "static/webfonts/s/alegreyasans/v13/5aUo9_-1phKLFgshYDvh6Vwt7V9VBEhGiU9G.woff2"
  },
  {
    "url": "static/webfonts/s/alegreyasans/v13/5aUu9_-1phKLFgshYDvh6Vwt5fFPqEp2iw.woff2"
  },
  {
    "url": "static/webfonts/s/alegreyasans/v13/5aUz9_-1phKLFgshYDvh6Vwt7VptvQ.woff2"
  },
  {
    "url": "static/webfonts/s/alegreyasans/v13/5aUu9_-1phKLFgshYDvh6Vwt5alOqEp2iw.woff2"
  },
  {
    "url": "static/webfonts/s/alegreyasans/v13/5aUu9_-1phKLFgshYDvh6Vwt5eFIqEp2iw.woff2"
  },
  {
    "url": "static/webfonts/s/amaticsc/v15/TUZyzwprpvBS1izr_vOECuSf.woff2"
  },
  {
    "url": "static/webfonts/s/amaticsc/v15/TUZ3zwprpvBS1izr_vOMscGKfrUC.woff2"
  },
  {
    "url": "webpack-runtime-a36dfc60ca2371b5aeb5.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-b0556ce5127c1a3e2490.js"
  },
  {
    "url": "polyfill-9238a5fdf6360dc5a847.js"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "13e12b4913db206ade59e8120a53cb92"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-1c006765c8dc2b4d3091.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
