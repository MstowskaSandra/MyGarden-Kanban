import { useState, useContext } from "react";
import BoardContext from "../../context/boardContext";
import * as S from "./Form.styles";

function Form() {
  const [errors, setErrors] = useState({ taskName: "", userName: "" });
  const [taskName, setTaskName] = useState("");
  const [taskType, setTaskType] = useState("");
  const [userName, setUserName] = useState("");
  const [selectedLabels, setSelectedLabels] = useState([]);
  const { addTask, labelsList } = useContext(BoardContext);

  const validate = () => {
    const newErrors = {};

    if (taskName.trim().length < 5) {
      newErrors.taskName = "Task must be at least 5 characters";
    }

    if (userName.trim().length < 3) {
      newErrors.userName = "Username must be at least 3 characters";
    }

    if (!taskType) {
      newErrors.taskType = "Please select task type";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    addTask({
      name: taskName,
      type: taskType,
      user: userName,
      labels: selectedLabels,
    });

    setTaskName("");
    setTaskType("");
    setUserName("");
    setSelectedLabels([]);
    setErrors({});
  };

  return (
    <S.FormContainer onSubmit={handleSubmit}>
      <S.FormLabel>Add new task</S.FormLabel>
      <S.TextArea
        name="task"
        placeholder="New task"
        value={taskName}
        onChange={(e) => {
          setTaskName(e.target.value);
          setErrors((prev) => ({ ...prev, taskName: "" }));
        }}
      ></S.TextArea>
      {errors.taskName && <S.ErrorMessage>{errors.taskName}</S.ErrorMessage>}

      <S.TypeSelect
        name="type"
        placeholder="Task type"
        value={taskType}
        onChange={(e) => {
          setTaskType(e.target.value);
          setErrors((prev) => ({ ...prev, taskType: null }));
        }}
      >
        <option value="">🌱 Select type</option>
        <option value="vegetable">🥕 Vegetables</option>
        <option value="herbs">🌿 Herbs</option>
        <option value="flower">🌸 Flowers</option>
        <option value="fruits">🍓 Fruits</option>
      </S.TypeSelect>
      {errors.taskType && <S.ErrorMessage>{errors.taskType}</S.ErrorMessage>}

      <S.LabelsSection>
        <S.Label>Labels:</S.Label>
        <S.LabelsList>
          {labelsList?.map((label) => (
            <S.CheckboxLabel key={label.id} color={label.color}>
              <S.CheckboxInput
                type="checkbox"
                checked={selectedLabels.includes(label.name)}
                onChange={(e) => {
                  const labelName = label.name;
                  setSelectedLabels(
                    e.target.checked
                      ? [...selectedLabels, labelName]
                      : selectedLabels.filter((l) => l !== labelName),
                  );
                }}
              />
              {label.name}
              <img src={label.icon} alt={label.name} />
            </S.CheckboxLabel>
          ))}
        </S.LabelsList>
      </S.LabelsSection>
      <S.InputField
        type="text"
        name="user"
        placeholder="Your username"
        value={userName}
        onChange={(e) => {
          setUserName(e.target.value);
          setErrors((prev) => ({ ...prev, userName: "" }));
        }}
      ></S.InputField>

      {errors.userName && <S.ErrorMessage>{errors.userName}</S.ErrorMessage>}

      <S.SubmitButton type="submit" value="Add"></S.SubmitButton>
    </S.FormContainer>
  );
}

export default Form;
