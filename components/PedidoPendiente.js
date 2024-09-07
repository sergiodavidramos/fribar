import { useContext, useEffect, useState } from 'react'
import UserContext from './UserContext'
import Loader from './Loader'
import GetImg from './GetImg'
import { API_URL } from './Config'
import Link from 'next/link'
export default ({ pedidos }) => {
  const [mostrarBaner, setMostrarBaner] = useState(false)
  useEffect(() => {
    for (let p of pedidos) {
      if (p.state === 0 || p.state === 1 || p.state === 2) {
        setMostrarBaner(true)
      }
    }
  }, [])
  return (
    mostrarBaner && (
      <div
        style={{
          background:
            'linear-gradient(90deg, rgba(245,93,44,1) 0%, rgba(220,44,40,1) 50%, rgba(230,92,91,1) 100%)',
          padding: '15px',
          marginLeft: '10%',
          marginRight: ' 10% ',
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div style={{ textAlign: 'center' }}>
                <Link href="/perfil/pedidos">
                  <a
                    style={{
                      color: 'white',
                    }}
                  >
                    <ul>
                      <li
                        style={{
                          display: 'inline-block',
                        }}
                      >
                        <h3>Ver mi pedido en proceso</h3>
                      </li>
                    </ul>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  )
}
