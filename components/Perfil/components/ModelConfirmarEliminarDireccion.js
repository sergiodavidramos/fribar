import { API_URL } from '../../Config'
export default ({
  idDireccion,
  index,
  token,
  notify,
  direcciones,
  setDirecciones,
  user,
}) => {
  async function handlerEliminarDireccion() {
    try {
      const res = await fetch(`${API_URL}/direction/${idDireccion}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      const direcDeleted = await res.json()
      if (direcDeleted.error)
        notify.show('Error al eliminar la Direccipon', 'error')
      const aux1 = direcciones
      aux1.splice(index, 1)
      setDirecciones(aux1)

      actualizarDireccionUsuario(aux1)
    } catch (error) {
      console.log(error)
      notify.show('Algo salio mal al eliminar direccion', 'error')
    }
  }
  async function actualizarDireccionUsuario(direccion) {
    try {
      const res = await fetch(`${API_URL}/user/${user._id}`, {
        method: 'PATCH',
        body: JSON.stringify({ direccion }),
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      const actualizado = await res.json()
      if (actualizado.error)
        notify.show('Error en el sistema al actualizar', 'error')
      notify.show('Se elimino con exito!', 'success')
    } catch (error) {
      console.log(error)
      notify.show(
        'Algo salio mal al actualizar la direccion borrada',
        'error'
      )
    }
  }
  return (
    <div
      id="eliminarDireccion_model"
      className="header-cate-model main-gambo-model modal fade show"
      tabIndex="-1"
      role="dialog"
      aria-modal="false"
    >
      <div className="modal-dialog category-area" role="document">
        <div className="category-area-inner">
          <div className="modal-header">
            <button
              type="button"
              className="close btn-close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <i className="uil uil-multiply"></i>
            </button>
          </div>
          <div className="category-model-content modal-content">
            <div className="cate-header">
              <h4>¿Esta seguro de eliminar?</h4>
            </div>
            <div className="add-address-form">
              <div className="checout-address-step">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="address-fieldset">
                      <div className="row">
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group mb-0">
                            <div className="address-btns">
                              <button
                                className="save-btn14 w-100 hover-btn"
                                type="button"
                                data-dismiss="modal"
                                aria-label="Close"
                                onClick={handlerEliminarDireccion}
                              >
                                SI
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group mb-0">
                            <div className="address-btns">
                              <button
                                className="save-btn14 w-100 hover-btn"
                                type="button"
                                data-dismiss="modal"
                                aria-label="Close"
                              >
                                NO
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
