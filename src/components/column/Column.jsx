import * as S from "./Column.styles.js";
import Task from "../task/Task.jsx";
import { useContext, useState } from "react";
import BoardContext from "../../context/boardContext.js";
import DeleteModal from "../deleteModal/DeleteModal.jsx";

const Column = ({ column, onDragOver, onDrop, tasksInColumn }) => {
  const { removeTask } = useContext(BoardContext);
  const [deleteTaskId, setDeleteTaskId] = useState(null);

  const handleDeleteClick = (taskId) => setDeleteTaskId(taskId);
  const handleCancelDelete = () => setDeleteTaskId(null);

  return (
    <>
      <S.ColumnContainer
        onDrop={(e) => onDrop(e, column)}
        onDragOver={onDragOver}
        data-active={false}
      >
        {tasksInColumn.map((task) => (
          <S.TaskWrapper key={task.id}>
            <Task
              id={task.id}
              name={task.name}
              user={task.user}
              labels={task.labels || []}
            />
            {column.id === 5 && (
              <S.DeleteButton
                onClick={() => handleDeleteClick(task.id)}
                title="Remove task"
              >
                x
              </S.DeleteButton>
            )}
          </S.TaskWrapper>
        ))}
      </S.ColumnContainer>

      <DeleteModal
        isOpen={!!deleteTaskId}
        onConfirm={() => removeTask(deleteTaskId)}
        onCancel={handleCancelDelete}
      />
    </>
  );
};

export default Column;
