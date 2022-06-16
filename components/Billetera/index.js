import MenuLef from '../Perfil/components/MenuLef'
import UserContext from '../UserContext'
import { useContext } from 'react'
import moment from 'moment'
export default () => {
  moment.locale('es')
  const { movimientos, user } = useContext(UserContext)
  console.log('movimientossss', movimientos)
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
                    <i className="uil uil-wallet"></i>Mi billetera
                  </h4>
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="pdpt-bg">
                  <div className="reward-body-dtt">
                    <div className="reward-img-icon">
                      <img src="/img/money.svg" alt="" />
                    </div>
                    <span className="rewrd-title">Mi cuenta</span>
                    <h4 className="cashbk-price">
                      {user ? user.cuenta : 0} Bs
                    </h4>
                    <span className="date-reward">
                      Ultimo Agregado fecha:{' '}
                      {movimientos.length > 0
                        ? moment(movimientos[0].fecha).format('ll')
                        : ''}
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="pdpt-bg">
                  <div className="pdpt-title">
                    <h4>Agregar saldo</h4>
                  </div>
                  <div className="add-cash-body">
                    <div className="row">
                      <div className="col-lg-6 col-md-12">
                        <div className="form-group mt-1">
                          <label className="control-label">
                            Nombre del titular*
                          </label>
                          <div className="ui search focus">
                            <div className="ui left icon input swdh11 swdh19">
                              <input
                                className="prompt srch_explore"
                                type="text"
                                name="holdername"
                                defaultValue={user ? user.nombre_comp : ''}
                                id="holder[name]"
                                required
                                maxLength="64"
                                placeholder="Nombre del titular"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12">
                        <div className="form-group mt-1">
                          <label className="control-label">
                            Número de tarjeta*
                          </label>
                          <div className="ui search focus">
                            <div className="ui left icon input swdh11 swdh19">
                              <input
                                className="prompt srch_explore"
                                type="text"
                                name="cardnumber"
                                defaultValue=""
                                id="card[number]"
                                required
                                maxLength="64"
                                placeholder="Número de tarjeta"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4">
                        <div className="form-group mt-1">
                          <label className="control-label">
                            Mes de expiración*
                          </label>
                          <select
                            className="ui fluid search dropdown form-dropdown"
                            name="card[expire-month]"
                          >
                            <option value="">Mes</option>
                            <option value="1">Enero</option>
                            <option value="2">Febrero</option>
                            <option value="3">Marzo</option>
                            <option value="4">Abril</option>
                            <option value="5">Mayo</option>
                            <option value="6">Junio</option>
                            <option value="7">Julio</option>
                            <option value="8">Agosto</option>
                            <option value="9">Septiembre</option>
                            <option value="10">Octubre</option>
                            <option value="11">Noviembre</option>
                            <option value="12">Diciembre</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4">
                        <div className="form-group mt-1">
                          <label className="control-label">
                            Año de vencimiento*
                          </label>
                          <div className="ui search focus">
                            <div className="ui left icon input swdh11 swdh19">
                              <input
                                className="prompt srch_explore"
                                type="text"
                                name="card[expire-year]"
                                maxLength="4"
                                placeholder="Año"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4">
                        <div className="form-group mt-1">
                          <label className="control-label">CVV*</label>
                          <div className="ui search focus">
                            <div className="ui left icon input swdh11 swdh19">
                              <input
                                className="prompt srch_explore"
                                name="card[cvc]"
                                maxLength="3"
                                placeholder="CVV"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group mt-1">
                          <label className="control-label">
                            Agregar saldo*
                          </label>
                          <div className="ui search focus">
                            <div className="ui left icon input swdh11 swdh19">
                              <input
                                className="prompt srch_explore"
                                type="text"
                                name="addbalance"
                                maxLength="3"
                                placeholder="0 Bs"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <a href="#" className="next-btn16 hover-btn mt-3">
                      Agregar saldo
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="pdpt-bg">
                  <div className="pdpt-title">
                    <h4>Historial</h4>
                  </div>
                  <div className="history-body scrollstyle_4">
                    <ul className="history-list">
                      {movimientos.length > 0 ? (
                        movimientos.map((movi) => (
                          <li key={movi._id}>
                            <div className="purchase-history">
                              <div className="purchase-history-left">
                                <h4>
                                  {movi.monto < 0 ? 'Compra' : 'Recarga'}
                                </h4>
                                <p>
                                  ID{' '}
                                  <ins>{movi._id.substring(0, 10)}...</ins>
                                </p>
                                <span>
                                  {moment(movi.fecha).format('lll')}
                                </span>
                              </div>
                              <div className="purchase-history-right">
                                <span>{movi.monto} Bs</span>
                                <a href="#">Ver detalle</a>
                              </div>
                            </div>
                          </li>
                        ))
                      ) : (
                        <li>
                          <div className="purchase-history">
                            <div className="purchase-history-left">
                              <h4>Aun no hay acciones</h4>
                            </div>
                          </div>
                        </li>
                      )}
                    </ul>
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
