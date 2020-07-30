import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default () => (
  <>
    <Head></Head>
    <Header />
    <div className="sign-inup">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="sign-form">
              <div className="sign-inner">
                <div className="sign-logo" id="logo">
                  <a href="index.html">
                    <img src="images/logo.svg" alt="" />
                  </a>
                  <a href="index.html">
                    <img
                      className="logo-inverse"
                      src="images/dark-logo.svg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="form-dt">
                  <div className="form-inpts checout-address-step">
                    <form>
                      <div className="form-title">
                        <h6>Sign Up</h6>
                      </div>
                      <div className="form-group pos_rel">
                        <input
                          id="full[name]"
                          name="fullname"
                          type="text"
                          placeholder="Full name"
                          className="form-control lgn_input"
                          required=""
                        />
                        <i className="uil uil-user-circle lgn_icon"></i>
                      </div>
                      <div className="form-group pos_rel">
                        <input
                          id="email[address]"
                          name="emailaddress"
                          type="email"
                          placeholder="Email Address"
                          className="form-control lgn_input"
                          required=""
                        />
                        <i className="uil uil-envelope lgn_icon"></i>
                      </div>
                      <div className="form-group pos_rel">
                        <input
                          id="phone[number]"
                          name="phone"
                          type="text"
                          placeholder="Phone Number"
                          className="form-control lgn_input"
                          required=""
                        />
                        <i className="uil uil-mobile-android-alt lgn_icon"></i>
                      </div>
                      <div className="form-group pos_rel">
                        <label className="control-label">Enter Code</label>
                        <ul className="code-alrt-inputs signup-code-list">
                          <li>
                            <input
                              id="code[1]"
                              name="number"
                              type="text"
                              placeholder=""
                              className="form-control input-md"
                              required=""
                            />
                          </li>
                          <li>
                            <input
                              id="code[2]"
                              name="number"
                              type="text"
                              placeholder=""
                              className="form-control input-md"
                              required=""
                            />
                          </li>
                          <li>
                            <input
                              id="code[3]"
                              name="number"
                              type="text"
                              placeholder=""
                              className="form-control input-md"
                              required=""
                            />
                          </li>
                          <li>
                            <input
                              id="code[4]"
                              name="number"
                              type="text"
                              placeholder=""
                              className="form-control input-md"
                              required=""
                            />
                          </li>
                          <li>
                            <a
                              className="chck-btn hover-btn code-btn145"
                              href="#"
                            >
                              Send
                            </a>
                          </li>
                        </ul>
                        <a href="#" className="resend-link">
                          Resend Code
                        </a>
                      </div>
                      <div className="form-group pos_rel">
                        <input
                          id="password1"
                          name="password1"
                          type="password"
                          placeholder="New Password"
                          className="form-control lgn_input"
                          required=""
                        />
                        <i className="uil uil-padlock lgn_icon"></i>
                      </div>
                      <button className="login-btn hover-btn" type="submit">
                        Sign Up Now
                      </button>
                    </form>
                  </div>
                  <div className="signup-link">
                    <p>
                      I have an account? -{" "}
                      <a href="sign_in.html">Sign In Now</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="copyright-text text-center mt-3">
              <i className="uil uil-copyright"></i>Copyright 2020{" "}
              <b>Gambolthemes</b> . All rights reserved
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>
);
