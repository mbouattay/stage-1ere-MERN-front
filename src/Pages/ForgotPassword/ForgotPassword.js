import { Link } from "react-router-dom";
function ForgotPassword() {
    return ( <>
    <div className="container-xxl position-relative bg-white d-flex p-0">
      {/* Sign In Start */}
      <div className="container-fluid">
        <div
          className="row h-100 align-items-center justify-content-center"
          style={{ minHeight: "100vh"}}
        >
          <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4" style={{width:"600px"}}>
            <div className="bg-light rounded p-4 p-sm-5 my-4 mx-3">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <a href="index.html" className>
                  <h3 className="text-primary">
                    <i className="fa fa-hashtag me-2" />
                    MY LABO
                  </h3>
                </a>
                <h3>Forgot Password</h3>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <button type="submit" className="btn btn-primary py-3 w-100 mb-4">
              ForgotPassword
              </button>
              <p className="text-center mb-0">
                Don't have an Account? <Link to={"/register"}>Sign Up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </> );
}

export default ForgotPassword;