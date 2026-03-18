import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  padding: 0 1rem 0.5rem 1rem;
`;

export const FormLabel = styled.label`
  font-size: 1.5rem;
  font-weight: 600;
  color: #283b0a;
`;
export const Label = styled.label`
  font-size: 1rem;
  font-weight: 600;
  color: #283b0a;
`;

export const TextArea = styled.textarea`
  width: 80%;
  height: 6rem;
  border-radius: 4px;
  text-align: center;
  border: 2px solid black;
  font-size: medium;
  cursor: pointer;
  color: blue;
  padding: 1rem;
  font-family: "Comic Sans MS", cursive, sans-serif;
  background-color: #fff475;
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.15),
    4px 0 6px rgba(0, 0, 0, 0.1);
  transform: rotate(-2deg);
  resize: none;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
  }
`;

export const TypeSelect = styled.select`
  width: 60%;
  height: 2.5rem;
  border-radius: 6px;
  border: 2px solid black;
  text-align: center;
  font-size: medium;
  font-family: "Comic Sans MS", cursive, sans-serif;
  color: blue;
  background-color: #fff475;
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.15),
    4px 0 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
  }

  &:hover {
    transform: scale(1.02);
  }
`;

export const InputField = styled.input`
  width: 70%;
  height: 2rem;
  border-radius: 12px;
  text-align: center;
  border: 3px solid #283b0a;
  font-size: 1.2rem;
  cursor: pointer;
  color: blue;
  box-shadow: 2px 2px 6px black;

  &:hover {
    box-shadow: 4px 4px 8px #5e891b;
  }

  &:focus {
    outline: none;
    box-shadow: 4px 4px 8px #5e891b;
  }
`;

export const SubmitButton = styled.input`
  width: 5rem;
  height: 2rem;
  text-align: center;
  border: 3px solid #283b0a;
  border-radius: 12px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 2px 2px 6px black;

  &:hover {
    box-shadow: 4px 4px 8px #5e891b;
    transform: translateY(-2px);
  }
`;

export const LabelsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 70%;
  border: 3px solid #283b0a;
  box-shadow: 2px 2px 6px black;
  border-radius: 12px;
`;

export const LabelsList = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.75rem;
  max-height: 10rem;
  overflow-y: auto;
  padding: 0.5rem 1rem;
  background: #f9f9f9;
  border-radius: 4px;
  border: 2px solid #ddd;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  transition: background 0.2s;
  border: 3px solid ${(props) => props.color || "#e0e0e0"};
  text-transform: uppercase;

  img {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const CheckboxInput = styled.input`
  width: auto;
  margin: 0;
`;

export const ErrorMessage = styled.p`
  color: #e53935;
  font-size: 0.8rem;
  margin-top: 2px;
`;
