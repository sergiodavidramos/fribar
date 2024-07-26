import Link from 'next/link'
import MenuLef from './components/MenuLef'

export default ({ user, pedidos }) => (
  <div className="">
    <div className="container">
      <div className="row">
        <MenuLef />
        <div className="col-lg-9 col-md-8">
          <div className="dashboard-right">
            <div className="row">
              <div className="col-md-12">
                <div className="main-title-tab">
                  <h4>
                    <i className="uil uil-apps"></i>Vista General
                  </h4>
                </div>
                <div className="welcome-text">
                  <h2>Hola! {user.idPersona.nombre_comp}</h2>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="pdpt-bg">
                  <div className="pdpt-title">
                    <h4>Mis recompensas</h4>
                  </div>
                  <div className="ddsh-body">
                    <h2>0 Recompenzas</h2>
                    {/* <ul>
                      <li>
                        <a href="#" className="small-reward-dt hover-btn">
                          Won $2
                        </a>
                      </li>
                      <li>
                        <a href="#" className="small-reward-dt hover-btn">
                          Won 40% Off
                        </a>
                      </li>
                      <li>
                        <a href="#" className="small-reward-dt hover-btn">
                          Caskback $1
                        </a>
                      </li>
                      <li>
                        <a href="#" className="rewards-link5">
                          +More
                        </a>
                      </li>
                    </ul> */}
                  </div>
                  <Link href={'/perfil/recompensas'}>
                    <a className="more-link14">
                      Recompensas y detalles
                      <i className="uil uil-angle-double-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="pdpt-bg">
                  <div className="pdpt-title">
                    <h4>Mis Pedidos</h4>
                  </div>
                  <div className="ddsh-body">
                    <h2>{pedidos.length} Pedidos Recientes</h2>
                    <ul className="order-list-145">
                      {pedidos.length > 0 &&
                        pedidos.map((pedido, index) => (
                          <li>
                            <div className="smll-history">
                              <div className="order-title">
                                {pedido.detallePedido.detalle.length} Items{' '}
                                <span
                                  data-inverted=""
                                  data-tooltip={pedido.detallePedido.detalle.map(
                                    (d) => ' ' + d.producto.name
                                  )}
                                  data-position="top center"
                                >
                                  ?
                                </span>
                              </div>
                              {pedido.state === 0 && (
                                <div className="order-status">
                                  Pendiente
                                </div>
                              )}
                              {pedido.state === 1 && (
                                <div className="order-status">
                                  Preparando
                                </div>
                              )}
                              {pedido.state === 2 && (
                                <div className="order-status">
                                  En camino
                                </div>
                              )}
                              {pedido.state === 3 && (
                                <div className="order-status">
                                  Entregado
                                </div>
                              )}
                              {pedido.state === 4 && (
                                <div className="order-status">
                                  Cancelado
                                </div>
                              )}
                              <p>{pedido.total} Bs.</p>
                            </div>
                          </li>
                        ))}
                    </ul>
                  </div>
                  <Link href={'/perfil/pedidos'}>
                    <a className="more-link14">
                      Todos mis pedidos
                      <i className="uil uil-angle-double-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
              {/* <div className="col-lg-12 col-md-12">
                <div className="pdpt-bg">
                  <div className="pdpt-title">
                    <h4>Mi billetera</h4>
                  </div>
                  <div className="wllt-body">
                    <h2>Credito 0 Bs</h2>
                    <ul className="wallet-list">
                      <li>
                        <a href="#" className="wallet-links14">
                          <i className="uil uil-card-atm"></i>Payment
                          Methods
                        </a>
                      </li>
                      <li>
                        <a href="#" className="wallet-links14">
                          <i className="uil uil-gift"></i>3 offers Active
                        </a>
                      </li>
                      <li>
                        <a href="#" className="wallet-links14">
                          <i className="uil uil-coins"></i>Points Earning
                        </a>
                      </li>
                    </ul>
                  </div>
                  <a href="#" className="more-link14">
                    Rewards and Details{' '}
                    <i className="uil uil-angle-double-right"></i>
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
