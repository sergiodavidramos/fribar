import recommend from '@algolia/recommend'
import {
  ALGOLIA_API_KEY,
  ALGOLIA_APP_ID,
  ALGOLIA_INDEX_NAME,
} from '../Config'

const recommendClient = recommend(ALGOLIA_APP_ID, ALGOLIA_API_KEY)
const indexName = ALGOLIA_INDEX_NAME

export async function getProductosRelacionados(productId) {
  const { results } = await recommendClient.getRelatedProducts([
    {
      indexName: indexName,
      maxRecommendations: 5,
      objectID: productId,
    },
  ])

  return results?.[0].hits
}

export async function getFrecuentementeCompradosJuntos(productId) {
  const { results } = await recommendClient.getFrequentlyBoughtTogether([
    {
      indexName: indexName,
      maxRecommendations: 5,
      objectID: productId,
    },
  ])
  return results?.[0].hits
}
