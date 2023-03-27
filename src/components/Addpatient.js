import React , {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Addpatient() {
  const [patient, setPatient] = useState({name: "", email: "", mobile: null, bloodg:"", age: null,gender:"", aadhar:"", address:"", comment:""});
  const Navigate = useNavigate();
  const handleclick = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:4000/api/patient/addpatient',{
            name: patient.name,
            email:patient.email,
            mobileNo:patient.mobile,
            bloodG:patient.bloodg,
            age:patient.age,
            gender:patient.gender,
            aadhar:patient.aadhar,
            address:patient.address,
            comments:patient.comment,
    })
    console.log(response.data);
    if(response.data)
    {
        Navigate("/");
    }

  }


  const onchange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

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
          class="display-6"
          style={{
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          Patient details
        </h1>
        <hr />
        <div class="form-row my-3">
          <div class="input-group" style={{ marginTop: "30px" }}>
            <div class="input-group-prepend">
              <span class="input-group-text">Name</span>
            </div>
            <input
              type="text"
              class="form-control"
              id="name"
              name="name"
              value={patient.name}
              onChange={onchange}
              placeholder="Full name"
              style={{ marginLeft: "20px" }}
              required
            />
          </div>
          <div class="input-group my-3">
            <div class="input-group-prepend">
              <span class="input-group-text">Email</span>
            </div>
            <input
              type="email"
              class="form-control"
              id="email"
              name="email"
              value={patient.email}
              onChange={onchange}
              placeholder="Email"
              style={{ marginLeft: "20px" }}
              required
            />
          </div>
          <div class="input-group my-3">
            <div class="input-group-prepend">
              <span class="input-group-text">Mobile</span>
            </div>
            <input
              type="tel"
              class="form-control"
              id="mobile"
              name="mobile"
              value={patient.mobile}
              onChange={onchange}
              placeholder="mobile number"
              style={{ marginLeft: "20px" }}
              required
            />
          </div>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">Blood group</span>
            </div>
            <input
              type="text"
              class="form-control"
              id="bloodg"
              name="bloodg"
              value={patient.bloodg}
              onChange={onchange}
              placeholder="Blood group"
              style={{ marginLeft: "20px" }}
              required
            />
          </div>
          <div class="d-flex justify-content-between">
            <div class="input-group my-3">
              <div class="input-group-prepend">
                <span class="input-group-text">Age</span>
              </div>
              <input
                type="number"
                min={"1"}
                class="form-control"
                id="age"
                name="age"
                value={patient.age}
                onChange={onchange}
                placeholder="age"
                style={{ marginLeft: "20px" }}
                required
              />
            </div>
            <div class="input-group my-3 mx-3">
              <div class="input-group-prepend">
                <span class="input-group-text">Gender</span>
              </div>
              <input
                type="text"
                min={"1"}
                class="form-control"
                id="gender"
                name="gender"
                value={patient.gender}
                onChange={onchange}
                placeholder="Gender"
                style={{ marginLeft: "20px" }}
                required
              />
              {/* <select
                class="form-select mx-3"
                aria-label="Default select example"
                id="gender"
                name="gender"
                onChange={onchange}
              >
                <option selected>select</option>
                <option 
                value={patient.gender}
                name="gender"
                >
                  M</option>
                <option 
                value={patient.gender}
                name="gender"
                >
                  F</option>
                <option 
                value={patient.gender}
                name="gender"
                >
                  other</option>
              </select> */}
            </div>
          </div>
          <div class="input-group my-3">
            <div class="input-group-prepend">
              <span class="input-group-text">Aadhar no</span>
            </div>
            <input
              type="text"
              class="form-control"
              id="aadhar"
              name="aadhar"
              value={patient.aadhar}
              onChange={onchange}
              placeholder="Aadhar number"
              // minLength={"12"}
              maxLength={"12"}
              style={{ marginLeft: "20px" }}
              required
            />
          </div>
          <div class="input-group my-3">
            <div class="input-group-prepend">
              <span class="input-group-text">Address</span>
            </div>
            <input
              type="text"
              class="form-control"
              id="address"
              name="address"
              value={patient.address}
              onChange={onchange}
              placeholder="address"
              style={{ marginLeft: "20px" }}
              required
            />
          </div>
          <div class="input-group my-3">
            <div class="input-group-prepend">
              <span class="input-group-text">comments*</span>
            </div>
            <input
              type="text"
              class="form-control"
              id="comment"
              name="comment"
              value={patient.comment}
              onChange={onchange}
              placeholder="optional"
              style={{ marginLeft: "20px" }}
            />
          </div>
        </div>
        <div class="d-flex justify-content-between">
          <button type="submit" class="btn btn-dark mx-3" onClick={handleclick}>
            Add Patient details
          </button>
        </div>
      </form>
    </>
  );
}

export default Addpatient;
