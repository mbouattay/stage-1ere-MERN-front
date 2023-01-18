function AddResulta() {
  return (
    <>
      <form style={{ width: "100%", marginTop: "50px", marginLeft: "300px" }}>
        <div className="col-sm-12 col-xl-6">
          <div className="bg-light rounded h-100 p-4">
            <h6 class="mb-4">Add Resulta</h6>
            <div className="form-floating mb-3">
              <select
                className="form-select"
                id="floatingSelect"
                aria-label="Floating label select example"
              >
                <option selected>Open this select Client</option>
                <option value={1}>One</option>
                <option value={2}>Two</option>
                <option value={3}>Three</option>
              </select>
              <label htmlFor="floatingSelect"> Client</label>
            </div>
            <div className="form-floating mb-3">
              <select
                className="form-select"
                id="floatingSelect"
                aria-label="Floating label select example"
              >
                <option selected>Open this select Medecin</option>
                <option value={1}>One</option>
                <option value={2}>Two</option>
                <option value={3}>Three</option>
              </select>
              <label htmlFor="floatingSelect">Medecin</label>
            </div>
            <div className="form-floating mb-3">
              <select
                className="form-select"
                id="floatingSelect"
                aria-label="Floating label select example"
              >
                <option selected>Open this select Test</option>
                <option value={1}>One</option>
                <option value={2}>Two</option>
                <option value={3}>Three</option>
              </select>
              <label htmlFor="floatingSelect">Test</label>
            </div>
            <div className="form-floating mb-3">
              <select
                className="form-select"
                id="floatingSelect"
                aria-label="Floating label select example"
              >
                <option selected>Open this select Etat</option>
                <option value={1}>One</option>
                <option value={2}>Two</option>
                <option value={3}>Three</option>
              </select>
              <label htmlFor="floatingSelect">Etat</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                value={200}
                disabled
              />
              <label>PRIX :</label>
            </div>

            <div className="form-floating">
              <div>
                <label htmlFor="formFileLg" className="form-label">
                  Analyse
                </label>
                <input
                  className="form-control form-control-lg"
                  id="formFileLg"
                  type="file"
                />
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary btn-block mb-4" style={{ marginLeft :"255px" , marginTop:"15px"}}>Save</button>
        </div>
      </form>
    </>
  );
}

export default AddResulta;
