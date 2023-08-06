import React, { useContext } from "react";
import "./StudentDesc.css";
import { useLocation, useNavigate } from "react-router-dom";
import StoreData from "./Store";

const EditStudent = () => {
  const ContextData = useContext(StoreData);
  const navi = useNavigate();
  const IndexValue = useLocation().state.data;
  console.log(ContextData);
  console.log(IndexValue);

  const updateObj = {
    Name: ContextData.stuname[IndexValue].Name,
    Age: ContextData.stuname[IndexValue].Age,
    Course: ContextData.stuname[IndexValue].Course,
    Batch: ContextData.stuname[IndexValue].Batch,
  };

  const changeHandle = (event) => {
    updateObj[event.target.name] = event.target.value;
  };
  const cancelClick = () => {
    navi("/students");
  };
  const clickHandle = () => {
    ContextData.stuname[IndexValue] = updateObj;
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
              name="Name"
              className="form-field"
              placeholder={ContextData.stuname[IndexValue].Name}
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
              name="Age"
              className="form-field"
              placeholder={ContextData.stuname[IndexValue].Age}
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
              name="Course"
              className="form-field"
              placeholder={ContextData.stuname[IndexValue].Course}
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
              name="Batch"
              className="form-field"
              placeholder={ContextData.stuname[IndexValue].Batch}
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
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditStudent;
