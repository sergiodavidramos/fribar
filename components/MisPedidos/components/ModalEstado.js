import { Player } from '@lottiefiles/react-lottie-player'
export default ({ url, titulo }) => {
  return (
    <div
      id="estadoPedidoModal"
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
              <h4>{titulo}</h4>
            </div>
            <div className="add-address-form">
              <div className="checout-address-step">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="address-fieldset">
                      <div className="row">
                        <Player
                          src={url}
                          className="player"
                          autoplay
                          loop
                        />
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
