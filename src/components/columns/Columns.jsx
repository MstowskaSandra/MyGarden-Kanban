import * as S from "./Columns.styles";
import toast from "react-hot-toast";
import { useContext, useState } from "react";
import BoardContext from "../../context/boardContext";
import Column from "../column/Column";
import LabelFilters from "../labelFilters/LabelFilters";

function Columns() {
  const [activeLabels, setActiveLabels] = useState([]);
  const { columns, tasks, setTasks, labelsList, setIsModalOpen } =
    useContext(BoardContext);

  const onDrop = (e, column) => {
    e.preventDefault();

    const taskId = Number(e.dataTransfer.getData("taskId"));
    const task = tasks.find((t) => t.id === taskId);
    if (!task) return;

    const tasksInColumn = tasks.filter((t) => t.idColumn === column.id);
    if (tasksInColumn.length >= column.limit) {
      toast.error(`Too many in "${column.name}"! Limit ${column.limit} 🤏`);
      return;
    }

    const newTask = { ...task, idColumn: column.id };

    const updatedTasks = tasks.map((t) => (t.id === taskId ? newTask : t));
    setTasks(updatedTasks);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const filteredTasks =
    activeLabels.length === 0
      ? tasks
      : tasks.filter((task) =>
          task.labels?.some((label) => activeLabels.includes(label)),
        );

  return (
    <S.BoardContainer>
      <S.Toolbar>
        <button onClick={() => setIsModalOpen(true)}>+ Add new Task</button>
        <LabelFilters
          labelsList={labelsList}
          activeLabels={activeLabels}
          setActiveLabels={setActiveLabels}
        />
      </S.Toolbar>

      <S.ScrollArea>
        <S.BoardInner>
          <S.HeaderRow>
            {columns.map((column) => (
              <S.ColumnHeader key={column.id}>
                <S.HeaderWrapper>
                  <S.TxtWrapper>
                    <h4>{column.name}</h4>
                    <span>(Limit: {column.limit})</span>
                  </S.TxtWrapper>
                  <img
                    src={column.icon}
                    alt={column.name}
                    style={{ width: "2.5rem", height: "2.5rem" }}
                  />
                </S.HeaderWrapper>
              </S.ColumnHeader>
            ))}
          </S.HeaderRow>

          <S.ColumnsRow>
            {columns.map((column) => (
              <Column
                key={column.id}
                column={column}
                tasksInColumn={filteredTasks.filter(
                  (task) => task.idColumn === column.id,
                )}
                onDrop={onDrop}
                onDragOver={onDragOver}
              />
            ))}
          </S.ColumnsRow>
        </S.BoardInner>
      </S.ScrollArea>
    </S.BoardContainer>
  );
};

export default Columns;
