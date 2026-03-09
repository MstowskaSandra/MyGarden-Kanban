import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 2px solid black;
  width: 30%;
  height: 25rem;
  gap: 1rem;
  border-radius: 8px;
  padding: 1rem;
`;

export const FormLabel = styled.label`
  font-size: x-large;
  font-weight: 700;
  color: #333;
`;

export const TextArea = styled.textarea`
  width: 70%;
  height: 6rem;
  border-radius: 4px;
  text-align: center;
  border: 2px solid black;
  font-size: medium;
  cursor: pointer;
  color: blue;
  font-family: 'Comic Sans MS', cursive, sans-serif;
  background-color: #fff475;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15), 4px 0 6px rgba(0, 0, 0, 0.1);
  transform: rotate(-2deg);
  resize: none;
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
  }
`;

export const InputField = styled.input`
  width: 70%;
  height: 2rem;
  border-radius: 4px;
  text-align: center;
  border: 2px solid black;
  font-size: medium;
  cursor: pointer;
  color: blue;
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
  }
`;

export const SubmitButton = styled.input`
  width: 5rem;
  height: 2rem;
  text-align: center;
  border: 2px solid black;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: #fff475;
    color: black;
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

export const LabelsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 70%;
`;

export const LabelsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  max-height: 120px;
  overflow-y: auto;
  padding: 0.5rem;
  background: #f9f9f9;
  border-radius: 4px;
  border: 1px solid #ddd;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 14px;
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 4px;
  transition: background 0.2s;
  background-color: ${(props) => props.color || "#e0e0e0"};
`;

export const CheckboxInput = styled.input`
  width: auto;
  margin: 0;
`;

export const ErrorMessage = styled.p`
  color: #e53935;
  font-size: 0.8rem;
  margin-top: 4px;
`;
