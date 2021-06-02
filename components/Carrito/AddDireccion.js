import { useContext } from 'react'
import UserContext from '../UserContext'
export const AddDireccion = () => {
  const { setModelCategory, stateModel } = useContext(UserContext)
  console.log('este es el valor de model', stateModel)
  return (
    <div className="checkout-step">
      <div className="checkout-card" id="headingTwo">
        <span className="checkout-step-number">2</span>
        <h4 className="checkout-step-title">
          <button
            className="wizard-btn collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Dirección de entrega
          </button>
        </h4>
      </div>
      <div
        id="collapseTwo"
        className="collapse"
        aria-labelledby="headingTwo"
        data-parent="#checkout_wizard"
      >
        <div className="checkout-step-body">
          <div className="checout-address-step">
            <div className="row">
              <div className="col-lg-12">
                <form className="">
                  <div className="form-group">
                    <div className="product-radio">
                      <ul className="product-now">
                        <li>
                          <input
                            type="radio"
                            id="ad1"
                            name="address1"
                            defaultChecked
                          />
                          <label htmlFor="ad1">
                            Casa
                            <br />
                            <small>calle calero sdsd</small>
                          </label>
                        </li>
                        <li>
                          <input type="radio" id="ad2" name="address1" />
                          <label htmlFor="ad2">Oficina</label>
                        </li>
                        <li>
                          <input type="radio" id="ad2" name="address1" />
                          <label htmlFor="ad2">Trabajo</label>
                        </li>
                        <li>
                          <input type="radio" id="ad2" name="address1" />
                          <label htmlFor="ad2">Office</label>
                        </li>
                        <li></li>
                      </ul>
                      {/* <input type="radio" id="ad3" name="address1" />
                        <label htmlFor="ad3">Other</label> */}
                    </div>
                  </div>
                  <div className="address-fieldset">
                    <div className="container">
                      {/* <div className="row"> */}
                      <div className="row justify-content-center">
                        <div className="col-lg-5">
                          <button
                            type="button"
                            data-toggle="modal"
                            data-target="#category_model"
                            className="login-btn hover-btn"
                            onClick={() => {
                              setModelCategory(false)
                            }}
                          >
                            Agregar Nueva Dirección
                          </button>
                        </div>
                        {/* </div> */}
                      </div>
                      {/* <div className="col-lg-6 col-md-12">
                        <div className="form-group">
                          <label className="control-label">Name*</label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Name"
                            className="form-control input-md"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12">
                        <div className="form-group">
                          <label className="control-label">
                            Email Address*
                          </label>
                          <input
                            id="email1"
                            name="email1"
                            type="text"
                            placeholder="Email Address"
                            className="form-control input-md"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <label className="control-label">
                            Flat / House / Office No.*
                          </label>
                          <input
                            id="flat"
                            name="flat"
                            type="text"
                            placeholder="Address"
                            className="form-control input-md"
                            required=""
                          />
                        </div>
                      </div> */}
                      {/* <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <label className="control-label">
                            Street / Society / Office Name*
                          </label>
                          <input
                            id="street"
                            name="street"
                            type="text"
                            placeholder="Street Address"
                            className="form-control input-md"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12">
                        <div className="form-group">
                          <label className="control-label">Pincode*</label>
                          <input
                            id="pincode"
                            name="pincode"
                            type="text"
                            placeholder="Pincode"
                            className="form-control input-md"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12">
                        <div className="form-group">
                          <label className="control-label">
                            Locality*
                          </label>
                          <input
                            id="Locality"
                            name="locality"
                            type="text"
                            placeholder="Enter City"
                            className="form-control input-md"
                            required=""
                          />
                        </div>
                      </div> */}
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <div className="address-btns">
                            {/* <button className="save-btn14 hover-btn">
                              Save
                            </button> */}
                            <a
                              className="collapsed ml-auto next-btn16 hover-btn"
                              role="button"
                              data-toggle="collapse"
                              data-parent="#checkout_wizard"
                              href="#collapseFour"
                            >
                              Next
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
