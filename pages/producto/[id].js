import Header from '../../components/Header'
import SingleProduct from '../../components/SingleProduct'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { API_URL } from '../../components/Config'
export default () => {
  const [producto, setProducto] = useState(null)
  const router = useRouter()
  const { id } = router.query
  useEffect(() => {
    fetch(`${API_URL}/productos?id=${id}`)
      .then((res) => res.json())
      .then((r) => {
        setProducto(r)
      })
  }, [id])

  return (
    <>
      <Header />
      {producto && <SingleProduct producto={producto} />}
    </>
  )
}
