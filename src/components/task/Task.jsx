import React from "react";

function Task({ id, name, user }) {
    const onDragStart = (e) => {
        e.dataTransfer.setData("taskId", id);
    };

    return(
        <div className="task" draggable="true" onDragStart={onDragStart}>
            <p>{name}</p>
            <span>{user}</span>
        </div>
    );
}

export default Task;