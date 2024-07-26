import GetImg from '../../GetImg'
import { API_URL } from '../../Config'
import { useContext, useEffect, useState } from 'react'
import UserContext from '../../UserContext'
import ModelEditarPerfil from './ModelEditarPerfil'
export default () => {
  const { user, token, signOut } = useContext(UserContext)
  const [putos, setPunto] = useState(0)
  useEffect(() => {
    if ((token, user))
      fetch(`${API_URL}/person?id=${user.idPersona._id}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Constent-Type': 'application/json',
        },
      })
        .then((res) => {
          if (res.status === 401) signOut()
          return res.json()
        })
        .then((infoPerson) => {
          setPunto(infoPerson.body.persons[0].puntos)
        })
  }, [token])
  return (
    <>
      <ModelEditarPerfil user={user} />
      {user ? (
        <div className="dashboard-group">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="user-dt">
                  <div className="user-img">
                    <img
                      src={GetImg(user.img, `${API_URL}/upload/user`)}
                      alt=""
                    />
                    {/* <div className="img-add">
                      <input type="file" id="file" />
                      <label htmlFor="file">
                        <i className="uil uil-camera-plus"></i>
                      </label>
                    </div> */}
                  </div>
                  <h4>{user.idPersona.nombre_comp}</h4>
                  <p>
                    <a
                      data-toggle="modal"
                      data-target="#editarPerfil_model"
                    >
                      Editar Perfil:
                      <i className="uil uil-edit"></i>
                    </a>
                  </p>
                  <div className="earn-points">
                    <img src="/img/Dollar.svg" alt="" />
                    Puntos : <span>{putos}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ''
        // <Loader />
      )}
    </>
  )
}
