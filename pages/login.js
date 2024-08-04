import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useEffect, useContext } from 'react'
import Notifications, { notify } from 'react-notify-toast'
import FacebookLogin from 'react-facebook-login'
import UserContext from '../components/UserContext'
import { encode } from 'base-64'
import Link from 'next/link'
import { API_URL } from '../components/Config'
export default () => {
  var auth2
  const { signIn, token } = useContext(UserContext)
  const setUser = (userResponse) => {
    if (userResponse.body.usuario.status !== false) {
      notify.show('Bienvenido 🤩', 'success')
      signIn(userResponse.body.usuario, userResponse.body.token)
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
              : setUser(response)
          })
          .catch((err) => {
            console.log(err)
            notify.show('Error en el Servidor', 'error')
          })
      },
      function (error) {
        notify.show(`No se pudo iniciar sesion: ${error.error}`, 'error')
      }
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
          ? notify.show(response.body, 'warning')
          : console.log('EL ERROR', response)
        // setUser(response)
      })
      .catch((err) => {
        notify.show('Error en el Servidor', 'error')
      })
  }
  const componentClicked = () => {}

  useEffect(() => {
    startApp()
    if (window.FB) {
      window.fbAsyncInit = function () {
        FB.init({
          appId: '333033351546623',
          xfbml: true,
          version: 'v20.0',
        })
        FB.AppEvents.logPageView()
      }
      ;(function (d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0]
        if (d.getElementById(id)) {
          return
        }
        js = d.createElement(s)
        js.id = id
        js.src = 'https://connect.facebook.net/en_US/sdk.js'
        fjs.parentNode.insertBefore(js, fjs)
      })(document, 'script', 'facebook-jssdk')
    }
  })
  function handlerSubmit() {
    event.preventDefault()
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
          ? notify.show(response.body, 'warning')
          : setUser(response)
      })
      .catch((err) => {
        notify.show(err.message, 'error')
      })
  }
  return (
    <>
      <Head>
        <title>Iniciar sesión</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,height=device-height,initial-scale=1,maximum-scale=1"
        />
        <meta
          name="keywords"
          content="Inicia sesión, carnicería online, compra carne fresca, ecommerce de carne, productos de primera necesidad, alimentos básicos, artículos esenciales, cortes premium, carne de calidad, entrega a domicilio, minimarket online, supermercado en línea, tienda de comestibles, productos frescos, carne a domicilio, tienda online de alimentos, pagos online"
        />
        <meta
          name="description"
          content="Inicia sesión en Fribar, tu ecommerce de confianza para productos de minimarket y carnicería. Accede a tu cuenta para gestionar tus pedidos, ver el historial de compras y disfrutar de ofertas exclusivas en carnes frescas y productos esenciales. ¡Compra fácil y rápido!"
        />

        <meta
          name="google-signin-client_id"
          content="1089002507424-cilko1bfs2h6ka5injmj8r0nuaev4ne9.apps.googleusercontent.com"
        ></meta>
        <script src="https://apis.google.com/js/api:client.js"></script>
      </Head>
      <Header />
      <div className="sign-inup">
        <Notifications />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5" style={{ marginTop: '4em' }}>
              <div className="sign-form">
                <div className="sign-inner">
                  <div className="form-dt">
                    <div className="form-inpts checout-address-step">
                      <div className="form-title">
                        <h6>Iniciar sesión</h6>
                      </div>
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
                            appId="333033351546623"
                            autoLoad={false}
                            onClick={componentClicked}
                            callback={responseFacebook}
                            cssClass="btn btn-lg btn-facebook"
                            icon="fab fa-facebook-f mr-2"
                            textButton="Inicia sesión con Facebook"
                            fields="name,email,picture"
                          />
                        </div>
                      </main>
                      <form onSubmit={handlerSubmit}>
                        <div className="form-group pos_rel">
                          <input
                            id="email[address]"
                            name="emailaddress"
                            type="email"
                            placeholder="Introduzca su correo electronico"
                            className="form-control lgn_input"
                            required
                          />
                          <i className="uil uil-envelope lgn_icon"></i>
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
                <i className="uil uil-copyright"></i>Copyright 2023{' '}
                <b>FriFolly</b> . Todos los derechos reservados
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
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
