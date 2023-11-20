import MenuLef from '../Perfil/components/MenuLef'
import { useContext, useEffect, useState } from 'react'
import UserContext from '../UserContext'
import { API_URL } from '../Config'
import GetImg from '../GetImg'
import expectedRound from 'expected-round'
import Link from 'next/link'

export default () => {
  const { likes, user, setLikes, token } = useContext(UserContext)
  const [likesUser, setLikesUser] = useState([])

  async function getproducts() {
    const auxLikes = []
    for (let l of likes) {
      const res = await fetch(`${API_URL}/productos?id=${l}`)
      const data = await res.json()
      auxLikes.push(data.body[0][0])
    }
    setLikesUser(auxLikes)
  }

  function addLiked(idProducto) {
    const resultado = likes.filter((like) => like != idProducto)
    setLikes(resultado)
    actualizarLikedUser(resultado)
  }
  async function actualizarLikedUser(likes) {
    try {
      const res = await fetch(`${API_URL}/user/${user._id}`, {
        method: 'PATCH',
        body: JSON.stringify({ favoritos: likes }),
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })

      if (res.status === 401) signOut()
      const datos = await res.json()
      if (datos.error)
        notify.show('Error al agrefar a favoritos', 'warning')
    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    if (likes.length > 0) {
      getproducts()
    }
  }, [likes])
  return (
    <div className="container">
      <div className="row">
        <MenuLef />
        <div className="col-lg-9 col-md-8">
          <div className="dashboard-right">
            <div className="row">
              <div className="col-md-12">
                <div className="main-title-tab">
                  <h4>
                    <i className="uil uil-heart"></i>Tus me gusta
                  </h4>
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="pdpt-bg">
                  <div className="wishlist-body-dtt">
                    {user && likesUser.length > 0 ? (
                      likesUser.map((pro, index) => (
                        <div className="cart-item" key={index}>
                          <div className="cart-product-img">
                            <img
                              src={GetImg(
                                pro.img[0],
                                'http://localhost:3001/upload/producto'
                              )}
                              alt={pro.name}
                            />
                            {pro.descuento > 0 && (
                              <div className="offer-badge">
                                {pro.descuento} desct.
                              </div>
                            )}
                          </div>

                          <div className="cart-text">
                            <Link
                              href={{
                                pathname: '/productos/[nombre]',
                                query: {
                                  nombre: pro.name
                                    .toLowerCase()
                                    .replace(/ /g, '-'),
                                },
                              }}
                            >
                              <a style={{ cursor: 'pointer' }}>
                                <h4>{pro.name}</h4>
                              </a>
                            </Link>
                            <div className="cart-item-price">
                              Bs{' '}
                              {expectedRound
                                .round10(
                                  pro.precioVenta -
                                    (pro.descuento * pro.precioVenta) /
                                      100,
                                  -1
                                )
                                .toFixed(2)}
                              {pro.descuento > 0 && (
                                <span>
                                  Bs {pro.precioVenta.toFixed(2)}
                                </span>
                              )}
                            </div>
                            <button
                              type="button"
                              className="cart-close-btn"
                              onClick={() => addLiked(pro._id)}
                            >
                              <i className="uil uil-trash-alt"></i>
                            </button>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="cart-item">
                        <h4>Aun no tienes productos favoritos 😐</h4>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
