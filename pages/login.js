import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useEffect, useContext } from 'react'
import Notifications, { notify } from 'react-notify-toast'
import FacebookLogin from 'react-facebook-login'
import UserContext from '../components/UserContext'
import { encode } from 'base-64'
import Link from 'next/link'
import { LoadFile } from '../components/LoadFile'
export default () => {
  var auth2
  const { signIn } = useContext(UserContext)
  const setUser = (userResponse) => {
    if (userResponse.userData.idPersona.status !== false) {
      signIn(userResponse.userData, userResponse.token)
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
        fetch('http://localhost:3001/login/google', {
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
    fetch('http://localhost:3001/login/facebook', {
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
          : console.log(response)
        // setUser(response)
      })
      .catch((err) => {
        notify.show('Error en el Servidor', 'error')
      })
  }
  const componentClicked = () => {}

  useEffect(() => {
    startApp()
    // LoadFile()
  }, [])
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
    fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: headers,
    })
      .then((res) => res.json())
      .then((response) => {
        response.error
          ? notify.show(response.body.message, 'warning')
          : setUser(response.body)
      })
      .catch((err) => {
        notify.show(err.message, 'error')
      })
  }
  return (
    <>
      <Head>
        <title>Login</title>

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
            <div className="col-lg-5">
              <div className="sign-form">
                <div className="sign-inner">
                  <div className="form-dt">
                    <div className="form-inpts checout-address-step">
                      <div className="form-title">
                        <h6>Login</h6>
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
