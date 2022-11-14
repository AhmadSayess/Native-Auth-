import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createGoal } from "../features/goals/GoalSlice";

function GoalForm() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createGoal({ text }));
    setText("");
  };
  console.log(text);
  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">goal</label>
          <input
            type="text"
            name="text"
            id="text"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="Submit">
            Add goal
          </button>
        </div>
      </form>
    </section>
  );
}

export default GoalForm;
