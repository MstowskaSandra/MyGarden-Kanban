import * as S from "./Column.styles";
import React, { useContext } from "react";
import ColumnContext from "../../context/columnContext";
import TaskContext from "../../context/taskContext";
import SetTaskContext from "../../context/setTaskContext";
import Task from "../task/Task";

function Column({ removeTask, labelsList }) {
  const columns = useContext(ColumnContext);
  const tasks = useContext(TaskContext);
  const setTasks = useContext(SetTaskContext);

  const onDrop = (e, column) => {
    e.preventDefault();

    const taskId = Number(e.dataTransfer.getData("taskId"));
    const task = tasks.find((t) => t.id === taskId);
    if (!task) return;

    const tasksInColumn = tasks.filter((t) => t.idColumn === column.id);
    if (tasksInColumn.length >= column.limit) {
      alert(
        `Limit (${column.limit}) dla kolumny "${column.name}" został osiagnięty`,
      );
      return;
    }

    const newTask = { ...task, idColumn: column.id };

    const updatedTasks = tasks.map((t) => (t.id === taskId ? newTask : t));
    setTasks(updatedTasks);
  };

  const updateTask = (taskId, newName, newLabels) => {
    const task = tasks.find((t) => t.id === taskId);
    const updatedTasks = tasks.map((t) =>
      t.id === taskId
        ? { ...t, name: newName, labels: newLabels || task?.labels || [] }
        : t,
    );
    setTasks(updatedTasks);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <S.BoardContainer>
      <S.BoardHeader>
        <S.HeaderRow>
          {columns.map((column) => (
            <S.ColumnHeader key={column.id}>
              <h4>{column.name}</h4>
              <span>(Limit: {column.limit})</span>
            </S.ColumnHeader>
          ))}
        </S.HeaderRow>
      </S.BoardHeader>

      <S.BoardBody>
        <S.ColumnsRow>
          {columns.map((column) => (
            <S.ColumnContainer
              key={column.id}
              onDrop={(e) => onDrop(e, column)}
              onDragOver={onDragOver}
              data-active={false}
            >
              {tasks
                .filter((task) => task.idColumn === column.id)
                .map((task) => (
                  <S.TaskWrapper key={task.id}>
                    <Task
                      id={task.id}
                      name={task.name}
                      user={task.user}
                      updateTask={updateTask}
                      labels={task.labels || []}
                      labelsList={labelsList}
                    />
                    {column.id === 5 && (
                      <S.DeleteButton
                        onClick={() => removeTask(task.id)}
                        title="Remove task"
                      >
                        x
                      </S.DeleteButton>
                    )}
                  </S.TaskWrapper>
                ))}
            </S.ColumnContainer>
          ))}
        </S.ColumnsRow>
      </S.BoardBody>
    </S.BoardContainer>
  );
};

export default Column;
