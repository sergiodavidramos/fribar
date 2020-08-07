import Breadcrumb from "../components/Breadcrumb";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default () => (
  <>
    <Header />
    <div className="wrapper-carrito">
      <Breadcrumb />
      <div className="all-product-grid">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8">
              <div className="order-placed-dt">
                <i className="uil uil-check-circle icon-circle"></i>
                <h2>Order Successfully Placed</h2>
                <p>
                  Thank you for your order! will received order timing -{" "}
                  <span>(Today, 3.00PM - 5.00PM)</span>
                </p>
                <div className="delivery-address-bg">
                  <div className="title585">
                    <div className="pln-icon">
                      <i className="uil uil-telegram-alt"></i>
                    </div>
                    <h4>Your order will be sent to this address</h4>
                  </div>
                  <ul className="address-placed-dt1">
                    <li>
                      <p>
                        <i className="uil uil-map-marker-alt"></i>Address :
                        <span>
                          #000, St 8, Sks Nagar, Near Pakhowal Road, Ldh, 141001
                        </span>
                      </p>
                    </li>
                    <li>
                      <p>
                        <i className="uil uil-phone-alt"></i>Phone Number :
                        <span>+919999999999</span>
                      </p>
                    </li>
                    <li>
                      <p>
                        <i className="uil uil-envelope"></i>Email Address :
                        <span>johndoe@example.com</span>
                      </p>
                    </li>
                    <li>
                      <p>
                        <i className="uil uil-card-atm"></i>Payment Method :
                        <span>Cash on Delivery</span>
                      </p>
                    </li>
                  </ul>
                  <div className="stay-invoice">
                    <div className="st-hm">
                      Stay Home<i className="uil uil-smile"></i>
                    </div>
                    <a href="#" className="invc-link hover-btn">
                      invoice
                    </a>
                  </div>
                  <div className="placed-bottom-dt">
                    The payment of <span>$16</span> you'll make when the deliver
                    arrives with your order.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>
);
