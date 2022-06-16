import Header from '../../components/Header'
import BanerPerfil from '../../components/Perfil/components/BanerPerfil'
import Footer from '../../components/Footer'
import Billetera from '../../components/Billetera'
import { useEffect } from 'react'
import Router from 'next/router'
import Link from 'next/link'

export default () => {
  useEffect(() => {
    const token = localStorage.getItem('fribar-user')
    token ? '' : Router.replace('/login')
  }, [])
  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="gambo-Breadcrumb">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">
                        <a>Inicio</a>
                      </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link href="/perfil">
                        <a>Perfil</a>
                      </Link>
                    </li>
                    <li
                      className="breadcrumb-item active"
                      aria-current="page"
                    >
                      Mi billetera
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <BanerPerfil />
        <Billetera />
      </div>
      <Footer />
    </>
  )
}
