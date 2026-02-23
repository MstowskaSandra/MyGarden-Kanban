import React, { useContext } from "react";
import ColumnContext from "../../context/columnContext";
import TaskContext from "../../context/taskContext";
import SetTaskContext from "../../context/setTaskContext"
import Task from "../task/Task";

function Column({ removeTask }) {
    const columns = useContext(ColumnContext);
    const tasks = useContext(TaskContext);
    const setTasks = useContext(SetTaskContext);

    const onDrop = (e, column) => {
        e.preventDefault();

        const taskId = Number(e.dataTransfer.getData("taskId"));
        const task = tasks.find(t => t.id === taskId);
        if (!task) return;

        const tasksInColumn = tasks.filter(t => t.idColumn === column.id);
        if (tasksInColumn.length >= column.limit) {
            alert(`Limit (${column.limit}) dla kolumny "${column.name}" został osiagnięty`);
            return;
        }

        const newTask = { ...task, idColumn: column.id };

        const updatedTasks = tasks.map(t => t.id === taskId ? newTask : t);
        setTasks(updatedTasks);
    };

    const onDragOver = (e) => {
        e.preventDefault();
    };

    return (
       <table className="table-board">
            <thead>
                <tr className="header">
                    {columns.map((column) => (
                        <th key={column.id} className="table-head">
                            <h4>{column.name}</h4>
                            <span>(Limit: {column.limit})</span>
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                <tr className="tasks">
                    {columns.map(column => (
                        <td 
                            key={column.id} 
                            className="table-column"
                            onDrop={(e) => onDrop(e, column)}
                            onDragOver={onDragOver}
                        >
                            {tasks
                                .filter(task => task.idColumn === column.id)
                                .map(task => (
                                    <div className="task-wrapper">
                                        <Task key={task.id} id={task.id} name={task.name} user={task.user} />
                                        {column.id === 7 && (
                                            <button
                                                onClick={() => removeTask(task.id)}
                                                className="delete-button"
                                                title="Remove task"
                                            >
                                                x
                                            </button>
                                        )}
                                    </div>
                                ))
                            }
                        </td>
                    ))}
                </tr>
            </tbody>
        </table>    
       
    );
}

export default Column;