import { useEffect, useContext } from 'react'
import { encode } from 'base-64'
import FacebookLogin from 'react-facebook-login'
import Link from 'next/link'
import Notifications, { notify } from 'react-notify-toast'
import UserContext from './UserContext'
import { API_URL } from './Config'
export const LoginComponent = () => {
  var auth2
  const { signInCompra } = useContext(UserContext)
  function handlerSubmit() {
    event.preventDefault()
    console.log(event.target[0].value)
    console.log(event.target[1].value)
    let headers = new Headers()
    headers.append(
      'Authorization',
      'Basic ' +
        encode(event.target[0].value + ':' + event.target[1].value)
    )
    fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: headers,
    })
      .then((res) => res.json())
      .then((response) => {
        response.error
          ? notify.show(response.body.message, 'warning')
          : setUserLogin(response)
      })
      .catch((err) => {
        notify.show(err.message, 'error')
      })
  }

  const setUserLogin = (userResponse) => {
    if (userResponse.body.usuario.status !== false) {
      signInCompra(userResponse.body.usuario, userResponse.body.token)
    } else
      notify.show(
        'Su cuenta no tiene permisos para ingresar al sistema',
        'warning'
      )
  }
  var startApp = function () {
    gapi.load('auth2', function () {
      auth2 = window.gapi.auth2.init({
        client_id:
          '1089002507424-cilko1bfs2h6ka5injmj8r0nuaev4ne9.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
      })
      attachSignin(document.getElementById('customBtn'))
    })
  }

  function attachSignin(element) {
    auth2.attachClickHandler(
      element,
      {},
      function (googleUser) {
        const id_token = googleUser.getAuthResponse().id_token
        fetch(`${API_URL}/login/google`, {
          method: 'POST',
          body: JSON.stringify({
            idtoken: id_token,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((res) => res.json())
          .then((response) => {
            response.error
              ? notify.show(response.body.message, 'warning')
              : setUserLogin(response)
          })
          .catch((err) => {
            console.log(err)
            notify.show('Error en el Servidor', 'error')
          })
      },
      function (error) {}
    )
  }

  const responseFacebook = (response) => {
    fetch(`${API_URL}/login/facebook`, {
      method: 'POST',
      body: JSON.stringify({
        accessToken: response.accessToken,
        userID: response.userID,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((response) => {
        response.error
          ? notify.show(response.body.message, 'warning')
          : setUserLogin(response)
      })
      .catch((err) => {
        notify.show('Error en el Servidor', 'error')
      })
  }
  const componentClicked = () => {}

  useEffect(() => {
    startApp()
  }, [])
  return (
    <>
      <Notifications />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="">
              <div className="sign-inner">
                <div className="form-dt">
                  <div className="checout-address-step">
                    <main>
                      <button
                        className="btn btn-lg btn-google form-group pos_rel"
                        id="customBtn"
                      >
                        <i className="fab fa-google-plus-g mr-2"></i>
                        Inicia sesión con Google
                      </button>
                      <div className="container-face">
                        <FacebookLogin
                          appId="284295679548568"
                          autoLoad={false}
                          onClick={componentClicked}
                          callback={responseFacebook}
                          cssClass="btn btn-lg btn-facebook"
                          icon="fab fa-facebook-f mr-2"
                          textButton="Inicia sesión con Facebook"
                        />
                      </div>
                    </main>
                    <form onSubmit={handlerSubmit}>
                      <div className="form-group pos_rel">
                        <input
                          id="phone[number]"
                          name="phone"
                          type="text"
                          placeholder="Introduzca num. teléfono / Email"
                          className="form-control lgn_input"
                          required
                        />
                        <i className="uil uil-mobile-android-alt lgn_icon"></i>
                      </div>
                      <div className="form-group pos_rel">
                        <input
                          id="password1"
                          name="password1"
                          type="password"
                          placeholder="Introducir la contraseña"
                          className="form-control lgn_input"
                          required
                        />
                        <i className="uil uil-padlock lgn_icon"></i>
                      </div>
                      <button
                        className="login-btn hover-btn"
                        type="submit"
                      >
                        Iniciar Sesión
                      </button>
                    </form>
                  </div>
                  <div className="password-forgor">
                    <a href="forgot_password.html">
                      Se te olvidó tu contraseña?
                    </a>
                  </div>
                  <div className="signup-link">
                    <p>
                      ¿No tienes una cuenta? -{' '}
                      <Link href="/registro">
                        <a>Regístrate ahora</a>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="copyright-text text-center mt-3">
              <i className="uil uil-copyright"></i>Copyright 2020{' '}
              <b>FriFolly</b> . Todos los derechos reservados
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        main {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }
        .btn-google {
          color: white;
          background-color: #ea4335;
          font-size: 15px;
          font-weight: 600;
        }
        .card-modi {
          margin-top: 0 !important;
        }
      `}</style>
    </>
  )
}