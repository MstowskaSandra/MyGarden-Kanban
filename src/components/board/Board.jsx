import * as S from "./Board.styles";
import TaskContext from "../../context/taskContext";
import ColumnContext from "../../context/columnContext";
import SetTaskContext from "../../context/setTaskContext";
import Data from "../../../db/data.json";
import Column from "../column/Column";
import Form from "../form/Form";
import useStorage from "../../hooks/useStorage";

function Board() {
  const [tasks, setTasks] = useStorage("tasks", Data.tasks);
  const [columns, setColumns] = useStorage("columns", Data.columns);

  const addTask = (newTask) => {
    const startColumnId = 1;
    const startColumnLimit = 6;

    const tasksInStartColumn = tasks.filter(
      (task) => task.idColumn === startColumnId,
    );

    if (tasksInStartColumn.length >= startColumnLimit) {
      alert(
        `Limit ${startColumnLimit} tasków został osiągnięty dla kolumny startowej`,
      );
      return;
    }

    const id = tasks.length ? Math.max(...tasks.map((t) => t.id)) + 1 : 1;
    setTasks([...tasks, { id, ...newTask, idColumn: startColumnId }]);
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <ColumnContext.Provider value={columns}>
      <TaskContext.Provider value={tasks}>
        <SetTaskContext.Provider value={setTasks}>
          <S.Container>
            <Column removeTask={removeTask} />
            <Form onAddTask={addTask} />
          </S.Container>
        </SetTaskContext.Provider>
      </TaskContext.Provider>
    </ColumnContext.Provider>
  );
}

export default Board;
