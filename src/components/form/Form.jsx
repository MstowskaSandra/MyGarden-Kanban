import React, { useState } from "react";

function Form({ onAddTask, labelsList }) {
  const [taskName, setTaskName] = useState("");
  const [userName, setUserName] = useState("");
  const [selectedLabels, setSelectedLabels] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.length < 5 || userName.length < 3) {
      alert("Wypełnij formularz.");
      return;
    }
    onAddTask({
      name: taskName,
      user: userName,
      idColumn: 1,
      labels: selectedLabels,
    });

    setTaskName("");
    setUserName("");
    setSelectedLabels([]);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>Add new task</label>
      <textarea
        className="input-form textarea"
        name="task"
        placeholder="New task"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      ></textarea>

      <div>
        <label>Labels:</label>
        <div>
          {labelsList?.map((label) => (
            <label key={label.id}>
              <input
                type="checkbox"
                checked={selectedLabels.includes(label.name)}
                onChange={(e) => {
                  const labelName = label.name;
                  setSelectedLabels(
                    e.target.checked
                      ? [...selectedLabels, labelName]
                      : selectedLabels.filter((l) => l !== labelName),
                  );
                }}
              />
              {label.name}
            </label>
          ))}
        </div>
      </div>
      <input
        className="input-form"
        type="text"
        name="user"
        placeholder="Your username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      ></input>
      <input className="input-button" type="submit" value="Add"></input>
    </form>
  );
}

export default Form;