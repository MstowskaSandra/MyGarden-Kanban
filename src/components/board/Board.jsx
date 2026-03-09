import * as S from "./Board.styles";
import BoardContext from "../../context/boardContext";
import Data from "../../../db/data.json";
import Columns from "../columns/Columns";
import Form from "../form/Form";
import useStorage from "../../hooks/useStorage";
import { useState } from "react";
import TaskModal from "../modal/TaskModal";

function Board() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useStorage("tasks", Data.tasks);
  const [columns, setColumns] = useStorage("columns", Data.columns);
  const [labelsList, setLabelsList] = useStorage("labels", Data.labels);

  const addTask = (newTask) => {
    const startColumn = columns.find((c) => c.id === 1);

    const tasksInStartColumn = tasks.filter(
      (task) => task.idColumn === startColumn.id,
    );

    if (tasksInStartColumn.length >= startColumn.limit) {
      alert(
        `Limit ${startColumn.limit} tasków został osiągnięty dla kolumny startowej`,
      );
      return;
    }

    const id = tasks.length ? Math.max(...tasks.map((t) => t.id)) + 1 : 1;
    setTasks((prev) => [...prev, { id, ...newTask, idColumn: startColumn.id }]);
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <BoardContext.Provider
      value={{
        tasks,
        setTasks,
        columns,
        labelsList,
        addTask,
        removeTask,
      }}
    >
      <S.Container>
        <button onClick={() => setIsModalOpen(true)}>+ Add new Task</button>
        <Columns />

        {isModalOpen ? (
          <TaskModal onClose={() => setIsModalOpen(false)}>
            <Form />
          </TaskModal>
        ) : null}
      </S.Container>
    </BoardContext.Provider>
  );
}

export default Board;
