import GetImg from '../../GetImg'
import { API_URL } from '../../Config'
import { useContext } from 'react'
import UserContext from '../../UserContext'
import Loader from '../../Loader'
import ModelEditarPerfil from './ModelEditarPerfil'
export default () => {
  const { user } = useContext(UserContext)
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
                    Puntos : <span>{user.idPersona.puntos}</span>
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
