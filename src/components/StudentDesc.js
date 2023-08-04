import React, { useContext } from "react";
import StoreData from "./Store";
import { useNavigate } from "react-router-dom";

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
  return (
    <div className="body-container">
      <>
        <form>
          <label htmlFor="name">Name </label>
          <input
            id="name"
            type="text"
            placeholder="Name"
            name="Name"
            // value={this.state.Name}
            onChange={changeHandle}
            required
          />
          <br />
          <label htmlFor="age">Age </label>
          <input
            id="age"
            type="text"
            placeholder="Age"
            name="Age"
            // value={this.state.Dept}
            onChange={changeHandle}
            required
          />
          <br />
          <label htmlFor="course">Course </label>
          <input
            id="course"
            type="text"
            placeholder="Course"
            name="Course"
            // value={this.state.Rating}
            onChange={changeHandle}
            required
          />
          <br />
          <label htmlFor="batch">Batch </label>
          <input
            id="batch"
            type="text"
            placeholder="Batch"
            name="Batch"
            // value={this.state.Rating}
            onChange={changeHandle}
            required
          />
          <br />
          <button
            className="css-button-neumorphic"
            onClick={clickHandle}
            type="button"
          >
            Submit
          </button>
        </form>
      </>
    </div>
  );
};

export default StudentDesc;
