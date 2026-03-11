import * as S from "./Board.styles";
import toast from "react-hot-toast";
import { useState } from "react";
import BoardContext from "../../context/boardContext";
import Data from "../../../db/data.json";
import Columns from "../columns/Columns";
import Form from "../form/Form";
import useStorage from "../../hooks/useStorage";
import TaskModal from "../taskModal/TaskModal";

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
      toast.error(
        `Too many in "${startColumn.name}"! Limit ${startColumn.limit} 🤏`,
      );
      return;
    }
    toast.success("New task added to Planning! 🌱");

    const id = tasks.length ? Math.max(...tasks.map((t) => t.id)) + 1 : 1;
    setTasks((prev) => [...prev, { id, ...newTask, idColumn: startColumn.id }]);
    setIsModalOpen(false);
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const updateTask = (taskId, newName, newLabels) => {
    setTasks(
      tasks.map((t) =>
        t.id === taskId
          ? { ...t, name: newName, labels: newLabels || t.labels || [] }
          : t,
      ),
    );
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
        updateTask,
        setIsModalOpen,
      }}
    >
      <S.Container>
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


