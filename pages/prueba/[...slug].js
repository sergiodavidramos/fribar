import { useRouter } from 'next/router'
export default function hola() {
  const router = useRouter()
  const { slug } = router.query
  console.log('router', router.query)
  console.log('slug', slug)
  return (
    <>
      <h1>este es el id {slug[0]}</h1>
      {/* <h1>este es el titulo {title}</h1> */}
    </>
  )
}
hola.getInitialProps = async () => {
  return {}
}
