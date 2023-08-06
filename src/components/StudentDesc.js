import React, { useContext } from "react";
import StoreData from "./Store";
import { useNavigate } from "react-router-dom";
import "./StudentDesc.css";

const StudentDesc = () => {
  const navi = useNavigate();
  const ContextData = useContext(StoreData);
  console.log(ContextData);
  const newStud = {
    name: "",
    age: "",
    course: "",
    batch: "",
  };
  const changeHandle = (e) => {
    newStud[e.target.name] = e.target.value;
  };

  const clickHandle = () => {
    ContextData.stuname.push(newStud);
    navi("/students");
  };
  const cancelClick = () => {
    navi("/students");
  };
  return (
    <div className="body-container">
      <form>
        <div className="form-row">
          <div className="form-input">
            <label htmlFor="name" className="form-label">
              Name{" "}
            </label>
            <input
              id="name"
              type="text"
              placeholder="Name"
              name="Name"
              className="form-field"
              // value={this.state.Name}
              onChange={changeHandle}
            />
          </div>
          <br />
          <div className="form-input">
            <label htmlFor="age" className="form-label">
              Age{" "}
            </label>
            <input
              id="age"
              type="text"
              placeholder="Age"
              name="Age"
              className="form-field"
              // value={this.state.Dept}
              onChange={changeHandle}
            />
          </div>
          <br />
        </div>
        <div className="form-row">
          <div className="form-input">
            <label htmlFor="course" className="form-label">
              Course{" "}
            </label>
            <input
              id="course"
              type="text"
              placeholder="Course"
              name="Course"
              className="form-field"
              // value={this.state.Rating}
              onChange={changeHandle}
            />
          </div>
          <br />
          <div className="form-input">
            <label htmlFor="batch" className="form-label">
              Batch{" "}
            </label>
            <input
              id="batch"
              type="text"
              placeholder="Batch"
              name="Batch"
              className="form-field"
              // value={this.state.Rating}
              onChange={changeHandle}
            />
          </div>
          <br />
        </div>
        <div className="form-actions">
          <button
            className="css-button-neumorphic"
            onClick={cancelClick}
            type="button"
          >
            Cancel
          </button>
          <button
            className="css-button-neumorphic"
            onClick={clickHandle}
            type="button"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentDesc;
