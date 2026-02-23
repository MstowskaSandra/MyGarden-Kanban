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
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
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
  
  &[data-active='true'] {
    background: #e3f2fd;
    border-color: #2196f3;
  }
`;

export const TaskWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding-right: 0.5rem;
`;


