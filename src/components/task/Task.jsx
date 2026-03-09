import { useState, useContext } from "react";
import * as S from "./Task.styles";
import BoardContext from "../../context/boardContext";

function Task({ id, name, user, updateTask, labels }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(name);
  const [editLabels, setEditLabels] = useState(labels || []);
  const { labelsList } = useContext(BoardContext);

  const onDragStart = (e) => {
    e.dataTransfer.setData("taskId", id);
  };

  const handleEditClick = () => {
    setIsEditing(true);
    setEditName(name);
    setEditLabels(labels || []);
  };

  const handleSave = () => {
    if (editName.trim()) {
      updateTask(id, editName.trim(), editLabels);
    }
    setIsEditing(false);
  };

  return (
    <S.TaskContainer draggable="true" onDragStart={onDragStart}>
      {isEditing ? (
        <>
          <S.EditInput
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSave();
              if (e.key === "Escape") {
                setEditName(name);
                setIsEditing(false);
              }
            }}
            autoFocus
          />

          <S.LabelsEdit>
            {labelsList.map((label) => (
              <S.CheckboxLabel key={label.id}>
                <input
                  type="checkbox"
                  checked={editLabels.includes(label.name)}
                  onChange={(e) => {
                    const labelName = label.name;

                    setEditLabels((prev) =>
                      e.target.checked
                        ? [...prev, labelName]
                        : prev.filter((l) => l !== labelName),
                    );
                  }}
                />
                {label.name}
              </S.CheckboxLabel>
            ))}
          </S.LabelsEdit>
          <S.EditButton onClick={handleSave}>ok</S.EditButton>
        </>
      ) : (
        <S.TaskContent>
          {labels &&
            labels.map((labelName, index) => {
              const labelObj = labelsList.find((l) => l.name === labelName);

              return (
                <S.LabelChip
                  key={`${id}-${labelName}-${index}`}
                  title={labelName}
                  color={labelObj?.color}
                >
                  {labelName}
                </S.LabelChip>
              );
            })}
          <S.TaskName>{name}</S.TaskName>
          <S.TaskUser>{user}</S.TaskUser>

          <S.EditIcon onClick={handleEditClick} title="Edit">
            ✏️
          </S.EditIcon>
        </S.TaskContent>
      )}
    </S.TaskContainer>
  );
}

export default Task;
