import styled from "styled-components";

export const BoardContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  border-radius: 20px;
`;

export const BoardHeader = styled.div`
  width: 100%;
  background: #f8f9fa;
  border-bottom: 2px solid #e9ecef;
  border-radius: 20px 20px 0 0;
`;

export const HeaderRow = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
`;

export const ColumnHeader = styled.div`
  flex: 1;
  max-width: 220px;
  padding: 1rem;
  background: white;
  border-radius: 16px;
  border-bottom: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  border: 1px solid gray;

  h4 {
    margin: 0 0 0.5rem 0;
    font-size: 1.1rem;
    font-weight: 600;
    color: #495057;
  }

  span {
    font-size: 0.9rem;
    color: #6c757d;
  }
`;

export const BoardBody = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 500px;
`;

export const ColumnsRow = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  flex: 1;
  height: 100%;
`;

export const ColumnContainer = styled.div`
  flex: 1;
  width: 220px;
  min-height: 400px;
  max-height: 500px;
  background: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #dee2e6;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  position: relative;
  overflow-y: auto;
  padding-right: 0.5rem;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #adb5bd;
    border-radius: 3px;
  }

  &[data-active="true"] {
    background: #e3f2fd;
    border-color: #2196f3;
  }
`;

export const TaskWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 0.25rem;
  right: 1.75rem;
  width: 1.25rem;
  height: 1.25rem;
  padding: 0;
  background-color: transparent;
  border: none;
  color: red;
  font-weight: bold;
  font-size: 1rem;
  line-height: 1;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 50%;
  opacity: 1;
  background-color: rgba(255, 0, 0, 0.1);

  &:hover {
    background-color: red;
    color: black;
  }
`;