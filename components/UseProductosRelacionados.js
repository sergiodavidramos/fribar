import { useEffect, useState } from 'react'
import { getProductosRelacionados } from './services/recommend'

export default function useGetProductosRelacionados(productoId) {
  const [recomendaciones, setRecomendaciones] = useState([])

  useEffect(() => {
    getProductosRelacionados(productoId).then(setRecomendaciones)
  }, [productoId])
  return { recomendaciones }
}
