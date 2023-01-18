function AddMedecin() {
    return ( <>
                     <form style={{width:"50%" , marginTop :"10px", marginLeft :"250px"}}>
  {/* 2 column grid layout with text inputs for the first and last names */}
  <div className="row mb-4">
    <div className="col">
      <div className="form-outline">
        <input type="text" id="form3Example1" className="form-control" />
        <label className="form-label" htmlFor="form3Example1">First name</label>
      </div>
    </div>
    <div className="col">
      <div className="form-outline">
        <input type="text" id="form3Example2" className="form-control" />
        <label className="form-label" htmlFor="form3Example2">Last name</label>
      </div>
    </div>
  </div>
  {/* Email input */}
  <div className="form-outline mb-4">
    <input type="email" id="form3Example3" className="form-control" />
    <label className="form-label" htmlFor="form3Example3">Email address</label>
  </div>
  {/* Password input */}
  <div className="form-outline mb-4" >
    <input type="password" id="form3Example4" className="form-control" />
    <label className="form-label" htmlFor="form3Example4">Password</label>
  </div>
  <div className="form-outline mb-4" >
    <input type="password" id="form3Example4" className="form-control" />
    <label className="form-label" htmlFor="form3Example4">Phone</label>
  </div>
  {/* Submit button */}
  <button type="submit" className="btn btn-primary btn-block mb-4" style={{ marginLeft :"255px"}}>Save</button>
</form>
<div class="col-12">
                        <div class="bg-light rounded h-100 p-4">
                            <h6 class="mb-4">Responsive Table</h6>
                            <div class="table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First Name</th>
                                            <th scope="col">Last Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Phone</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>John</td>
                                            <td>Doe</td>
                                            <td>jhon@email.com</td>
                                            <td>USA</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>mark@email.com</td>
                                            <td>UK</td>
                                           
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>jacob@email.com</td>
                                            <td>AU</td>
                                            
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
</div>
    
    </> );
}

export default AddMedecin;