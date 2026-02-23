import React, { useState } from "react";

function Form({ onAddTask }) {
    const [taskName, setTaskName] = useState("");
    const [userName, setUserName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskName.length < 5 || userName.length < 3) {
            alert("Wypełnij formularz.");
            return;
            }
        onAddTask({ name: taskName, user: userName, idColumn: 1 });

        setTaskName("");
        setUserName("");
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
            <input 
                className="input-form"
                type="text"
                name="user"
                placeholder="Your username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            ></input>
            <input 
                className="input-button"
                type="submit"
                value="Add"
            ></input>
        </form>
    )
}

export default Form;