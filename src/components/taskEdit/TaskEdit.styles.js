import styled from "styled-components";

export const EditInput = styled.input`
  width: 100%;
  padding: 4px 8px;
  border: 2px solid #333;
  border-radius: 4px;
  font-size: 14px;
  font-family: 'Comic Sans MS', cursive;
  background: white;
  margin-bottom: 4px;
`;

export const EditButton = styled.button`
  position: absolute;
  bottom: 4px;
  right: 4px;
  padding: 2px 8px;
  background: #2196f3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  
  &:hover {
    background: #1976d2;
  }
`;

export const EditIcon = styled.button`
  width: 24px;
  height: 24px;
  background: transparent;
  cursor: pointer;
`;

export const LabelsEdit = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 6px 0;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  cursor: pointer;
`;