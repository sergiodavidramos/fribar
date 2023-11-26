import si from 'search-insights'
import {
  ALGOLIA_API_KEY,
  ALGOLIA_APP_ID,
  ALGOLIA_INDEX_NAME,
} from './Config'

si('init', {
  appId: ALGOLIA_APP_ID,
  apiKey: ALGOLIA_API_KEY,
  useCookie: true,
})

export default function useAlgoliaInsights() {
  const sendProductoAgregadoCarrito = (id) => {
    si('convertedObjectIDs', {
      index: ALGOLIA_INDEX_NAME,
      eventName: 'producto agregado al carrito',
      objectIDs: [id],
    })
  }
  const sendProductoVisto = (id) => {
    si('viewedObjectIDs', {
      index: ALGOLIA_INDEX_NAME,
      eventName: 'producto visto',
      objectIDs: [id],
    })
  }

  return {
    sendProductoAgregadoCarrito,
    sendProductoVisto,
  }
}
