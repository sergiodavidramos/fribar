import GetImg from '../../GetImg'
import { API_URL } from '../../Config'
import { useContext } from 'react'
import UserContext from '../../UserContext'
import Loader from '../../Loader'
export default () => {
  const { user } = useContext(UserContext)
  return (
    <>
      {false ? (
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
                    <div className="img-add">
                      <input type="file" id="file" />
                      <label htmlFor="file">
                        <i className="uil uil-camera-plus"></i>
                      </label>
                    </div>
                  </div>
                  <h4>{user.nombre_comp}</h4>
                  <p>
                    {user.phone}
                    <a href="#">
                      <i className="uil uil-edit"></i>
                    </a>
                  </p>
                  <div className="earn-points">
                    <img src="images/Dollar.svg" alt="" />
                    Puntos : <span>{user.puntos}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  )
}
