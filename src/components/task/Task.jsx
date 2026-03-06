import React, { useState } from "react";

function Task({ id, name, user, updateTask, labels }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(name);

  const onDragStart = (e) => {
    e.dataTransfer.setData("taskId", id);
  };

  const handleEditClick = () => {
    setIsEditing(true);
    setEditName(name);
  };

  const handleSave = () => {
    if (editName.trim() && editName !== name) {
      updateTask(id, editName.trim());
    }
    setIsEditing(false);
  };

  return (
    <div className="task" draggable="true" onDragStart={onDragStart}>
      {isEditing ? (
        <>
          <input
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            onBlur={handleSave}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSave();
              if (e.key === "Escape") {
                setEditName(name);
                setIsEditing(false);
              }
            }}
            autoFocus
          />
          <button onClick={handleSave}>ok</button>
        </>
      ) : (
        <>
          {labels &&
            labels.map((labelName, index) => (
              <span key={`${id}-${labelName}-${index}`} title={labelName}>
                {labelName}
              </span>
            ))}
          <p>{name}</p>
          <span>{user}</span>

          <button onClick={handleEditClick} title="Edit">
            ✏️
          </button>
        </>
      )}
    </div>
  );
}

export default Task;
