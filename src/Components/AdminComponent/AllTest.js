import { useState } from "react";
function AllTest() {
    const [pop, setpop] = useState(false);
    const Pop=()=>{
          setpop(true)
    }
    const close=()=>{
        setpop(false)
    }
    return (
        <div class="col-12">
        <div class="bg-light rounded h-100 p-4">
            <h6 class="mb-4">Responsive Table</h6>
            <div class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col"> Name</th>
                            <th scope="col">Prix</th>
                            <th scope="col"> Update</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" style={{width:"20px"}} >2</th>
                            <td >Mark</td>
                            <td>Otto</td>
                            <td style={{width:"20px"}}> <button  className="btn btn-success" onClick={Pop}> Update </button> </td>
                            <td style={{width:"20px"}}> <button  className="btn btn-danger" > Delete </button> </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        {pop &&  <div >
      <div 
        className="modal-dialog"
        role="document"
        style={{
          position: "absolute",
          top:" 50px", left: "39%" ,
          width:"50%"
        }}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModal3Label">
             Update client
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true" onClick={close}>×</span>
            </button>
          </div>
          <div className="modal-body">
          <form >
  {/* 2 column grid layout with text inputs for the first and last names */}
  {/* Email input */}
  <div className="form-outline mb-4">
    <input type="email" id="form3Example3" className="form-control" />
    <label className="form-label" htmlFor="form3Example3">ID</label>
  </div>
  {/* Password input */}
  <div className="form-outline mb-4" >
    <input type="password" id="form3Example4" className="form-control" />
    <label className="form-label" htmlFor="form3Example4">Name</label>
  </div>
  <div className="form-outline mb-4" >
    <input type="password" id="form3Example4" className="form-control" />
    <label className="form-label" htmlFor="form3Example4">Prix</label>
  </div>
</form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={close}
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
      </div>}
    </div>
    );
}

export default AllTest;