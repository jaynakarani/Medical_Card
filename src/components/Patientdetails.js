import React from "react";
import { Link } from "react-router-dom";
function Patientdetails() {
  return (
    <>
      <form
        className="needs-validation"
        style={{
          border: "rounded",
          margin: "auto",
          width: "50%",
          padding: "10px",
          marginTop: "30px",
        }}
      >
        <h1
          className="display-6"
          style={{
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Patient details
        </h1>
        <hr />
        <div className="form-row my-3">
          <div className="input-group my-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Name</span>
            </div>
            <p className="lead my-1 mx-3">
              This is a lead paragraph. It stands out from regular paragraphs.
            </p>
          </div>
          <div className="input-group my-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Email</span>
            </div>

            <p className="lead my-1 mx-3">
              This is a lead paragraph. It stands out from regular paragraphs.
            </p>
          </div>
          <div className="input-group my-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Mobile</span>
            </div>
            <p className="lead my-1 mx-3">
              This is a lead paragraph. It stands out from regular paragraphs.
            </p>
          </div>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">Blood group</span>
            </div>
            <p className="lead my-1 mx-3">
              This is a lead paragraph. It stands out from regular paragraphs.
            </p>
          </div>
          <div className="d-flex justify-content-between">
            <div className="input-group my-3">
              <div className="input-group-prepend">
                <span className="input-group-text">Age</span>
              </div>
              <p className="lead my-1 mx-3">This</p>
            </div>
            <div className="input-group my-3 mx-3">
              <div className="input-group-prepend">
                <span className="input-group-text">Gender</span>
              </div>
              <p className="lead my-1 mx-3">This</p>
            </div>
          </div>
          <div className="input-group my-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Aadhar no</span>
            </div>
            <p className="lead my-1 mx-3">
              This is a lead paragraph. It stands out from regular paragraphs.
            </p>
          </div>
          <div className="input-group my-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Address</span>
            </div>
            <p className="lead my-1 mx-3">
              This is a lead paragraph. It stands out from regular paragraphs.
            </p>
          </div>
          <div className="input-group my-3">
            <div className="input-group-prepend">
              <span className="input-group-text">comments*</span>
            </div>
            <p className="lead my-1 mx-3">
              This is a lead paragraph. It stands out from regular paragraphs.
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          {/* <button type="submit" className="btn btn-outline-dark">
            Edit Patient details
          </button> */}
          <div></div>

          <Link className="btn btn-sm btn-dark my-auto" to={"/editpatient"}>
            Edit details
          </Link>
        </div>
      </form>
    </>
  );
}

export default Patientdetails;
