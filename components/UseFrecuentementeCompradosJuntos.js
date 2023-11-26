import { useEffect, useState } from 'react'
import { getFrecuentementeCompradosJuntos } from './services/recommend'

export default function useGetFrecuentementeCompradosJuntos(productoId) {
  const [recomendaciones, setRecomendaciones] = useState([])

  useEffect(() => {
    getFrecuentementeCompradosJuntos(productoId).then(setRecomendaciones)
  }, [productoId])
  return { recomendaciones }
}
