export default () => (
  <div className="dashboard-group">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="user-dt">
            <div className="user-img">
              <img src="images/avatar/img-5.jpg" alt="" />
              <div className="img-add">
                <input type="file" id="file" />
                <label htmlFor="file">
                  <i className="uil uil-camera-plus"></i>
                </label>
              </div>
            </div>
            <h4>Johe Doe</h4>
            <p>
              +91999999999
              <a href="#">
                <i className="uil uil-edit"></i>
              </a>
            </p>
            <div className="earn-points">
              <img src="images/Dollar.svg" alt="" />
              Points : <span>20</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
