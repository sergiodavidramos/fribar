import { useContext, useState, useEffect } from 'react'
import Notifications, { notify } from 'react-notify-toast'
import UserContext from '../UserContext'
import { API_URL } from '../Config'
import { LoginComponent } from '../LoginComponent'
export const Verificacion = ({
  token,
  setCodigoVerificado,
  codigoVerificado,
}) => {
  const [valueCode, setValueCode] = useState('')
  const [codigoEnviado, setCodigoEnviado] = useState(false)
  const { signOut, setUser, user } = useContext(UserContext)
  useEffect(() => {}, [])
  function handlerMandarCode(numero) {
    setCodigoEnviado(true)
    fetch(
      `${API_URL}/verificar/getcode?numero=591${
        user.phone ? user.phone : numero
      }&channel=sms`,
      {
        method: 'GET',
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          notify.show(
            'El sistema bloqueo temporalmente este numero debido a actividades fraudulentas',
            'error'
          )
        } else notify.show('Se mando el codigo a su teléfono', 'success')
      })
      .catch((error) => notify.show('Error en el servidor', 'error'))
  }
  function handlerEditNum() {
    event.preventDefault()
    if (!event.target[0].value)
      notify.show('Por favor digite su numero telefonico', 'warning')
    else {
      fetch(`${API_URL}/user/${user._id}`, {
        method: 'PATCH',
        body: JSON.stringify({
          phone: event.target[0].value,
        }),
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
        .then((res) => {
          if (res.status === 401) signOut()
          return res.json()
        })
        .then((data) => {
          if (data.error) {
            console.log(data)
            notify.show(
              'Error al actualizar o ya hay un usuario registrado con este numero',
              'error',
              2000
            )
          } else {
            handlerMandarCode(data.body.phone)
            setUser(data.body)
          }
        })
    }
  }
  function handlerChangeCode() {
    event.preventDefault()
    setValueCode(event.target.value)
  }
  function handlerSubmitVerificarCodigo() {
    event.preventDefault()
    if (valueCode === '' || valueCode.length !== 4)
      notify.show(
        'ERROR: Por favor digite el Código de 4 dígitos',
        'warning'
      )
    else {
      fetch(
        `${API_URL}/verificar/verifycode?numero=591${user.phone}&code=${valueCode}`,
        {
          method: 'GET',
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.error)
            notify.show(
              'Error código incorrecto por favor intentelo nuevamente',
              'error'
            )
          else {
            setCodigoVerificado(true)
            notify.show('Codigo verificado con exito!', 'success')
          }
        })
        .catch((error) => {
          notify.show('Error en el servidor', 'error')
        })
    }
  }
  return (
    <div className="checkout-step">
      <div className="checkout-card" id="headingOne">
        <span className="checkout-step-number">1</span>
        <h4 className="checkout-step-title">
          <button
            className="wizard-btn"
            type="button"
            // data-toggle="collapse"
            // data-target="#collapseOne"
            // aria-expanded="true"
            // aria-controls="collapseOne"
          >
            Verificación de número telefónico
          </button>
        </h4>
      </div>
      {user ? (
        <div
          id="collapseOne"
          className="collapse in show"
          data-parent="#checkout_wizard"
        >
          <div className="checkout-step-body">
            <p>
              Necesitamos su número telefónico para poder informarle sobre
              el envio de su compra.
            </p>
            {user.phone ? (
              <p className="phn145">
                El Código de 4 dígitos se enviar tu teléfono BO +591{' '}
                <span>{user.phone}</span>
                <a
                  className="edit-no-btn hover-btn"
                  data-toggle="collapse"
                  href="#edit-number"
                >
                  Editar
                </a>
              </p>
            ) : (
              <p className="phn145">Digite su número de teléfono:</p>
            )}
            <div
              className={`collapse ${
                user.phone ? ' handlerMandarCode()' : 'show'
              }`}
              id="edit-number"
            >
              <div className="row">
                <div className="col-lg-8">
                  <div className="checkout-login">
                    <form name="myform" onSubmit={handlerEditNum}>
                      <div className="login-phone">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Número de Teléfono"
                          required={true}
                        />
                      </div>
                      <input
                        type="submit"
                        className="chck-btn hover-btn"
                        value={
                          user.phone
                            ? 'Editar número y enviar el código'
                            : 'Guardar número y enviar el código '
                        }
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="otp-verifaction container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group mb-0">
                    <label className="control-label">
                      Introduzca el código y click en Siguiente.
                    </label>
                    <ul style={{ display: 'flex' }}>
                      <li>
                        <input
                          id="code[1]"
                          name="number"
                          type="text"
                          value={valueCode}
                          onChange={handlerChangeCode}
                          placeholder="Codigo"
                          className="form-control date-now"
                          required
                        />
                      </li>
                      {!codigoVerificado && (
                        <li
                          style={{
                            marginLeft: '10px',
                          }}
                        >
                          <button
                            className="collapsed ml-auto next-btn16 hover-btn"
                            style={{ padding: '2px 3px', height: '35px' }}
                            onClick={handlerSubmitVerificarCodigo}
                          >
                            Verificar codigo
                          </button>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <div
                      className="address-btns"
                      style={{ marginTop: '10px' }}
                    >
                      <button
                        className="save-btn14 hover-btn"
                        onClick={handlerMandarCode}
                        style={{
                          padding: '9px 10px',
                          height: 'auto',
                          marginRight: '10px',
                        }}
                      >
                        {codigoEnviado
                          ? 'Volver a enviar el código a mi numero'
                          : 'Enviar código a mi numero'}
                      </button>
                      {codigoVerificado && (
                        <button
                          id="botonSiguiente"
                          className="collapsed ml-auto next-btn16 hover-btn"
                          data-toggle="collapse"
                          data-parent="#checkout_wizard"
                          href="#collapseTwo"
                          style={{ padding: '9px 10px' }}
                        >
                          Siguiente
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <LoginComponent />
      )}
    </div>
  )
}
