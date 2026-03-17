import { useState, useContext } from "react";
import * as S from "./Task.styles";
import toast from "react-hot-toast";
import BoardContext from "../../context/boardContext";
import TaskEdit from "../taskEdit/TaskEdit";
import TaskLabels from "../taskLabels/TaskLabels";
import DeleteModal from "../deleteModal/DeleteModal";
import useIsMobile from "../../hooks/useIsMobile";

function Task({ id, name, user, labels, columnId }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(name);
  const [editLabels, setEditLabels] = useState(labels || []);
  const [deleteTaskId, setDeleteTaskId] = useState(null);
  const { labelsList, updateTask, removeTask, moveTask, columns } =
    useContext(BoardContext);

  const isMobile = useIsMobile();
  const columnIndex = columns.findIndex((c) => c.id === columnId);

  const moveLeft = () => {
    if (columnIndex === 0) return;

    const prevColumn = columns[columnIndex - 1];
    moveTask(id, prevColumn.id);
  };

  const moveRight = () => {
    if (columnIndex === columns.length - 1) return;

    const nextColumn = columns[columnIndex + 1];
    moveTask(id, nextColumn.id);
  };

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
      toast.success("Task saved ✅");
    }
    setIsEditing(false);
  };

  return (
    <S.TaskContainer
      draggable={!isMobile}
      onDragStart={!isMobile ? onDragStart : undefined}
    >
      {isEditing ? (
        <TaskEdit
          editName={editName}
          editLabels={editLabels}
          onChangeName={setEditName}
          onChangeLabels={setEditLabels}
          onSave={handleSave}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <S.TaskContent>
          <TaskLabels labels={labels} labelsList={labelsList} />
          <S.TaskName>{name}</S.TaskName>

          {isMobile && (
            <S.Arrows>
              <button onClick={moveLeft} disabled={columnIndex === 0}>
                ←
              </button>
              <button
                onClick={moveRight}
                disabled={columnIndex === columns.lenght - 1}
              >
                →
              </button>
            </S.Arrows>
          )}

          <S.Wrapper>
            <S.TaskUser>{user}</S.TaskUser>
            <S.EditButton onClick={handleEditClick} title="Edit">
              ✏️
            </S.EditButton>

            {columnId === 5 && (
              <S.DeleteButton onClick={() => setDeleteTaskId(id)}>
                🗑️
              </S.DeleteButton>
            )}
            <DeleteModal
              isOpen={!!deleteTaskId}
              onConfirm={() => {
                if (deleteTaskId === id) removeTask(deleteTaskId);
                setDeleteTaskId(null);
              }}
              onCancel={() => setDeleteTaskId(null)}
            />
          </S.Wrapper>
        </S.TaskContent>
      )}
    </S.TaskContainer>
  );
}

export default Task;
