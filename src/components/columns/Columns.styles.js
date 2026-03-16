import styled from "styled-components";

export const BoardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  border: 3px solid #5e891b;
  border-radius: 12px;
  background: #c0ff72;

  overflow: hidden;
`;

export const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #e8f0d8;
  border-bottom: 3px solid #5e891b;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const ScrollArea = styled.div`
  flex: 1;
  overflow-x: auto;
  overflow-y: hidden;

  scrollbar-width: thin;
  scrollbar-color: #5e891b transparent;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #5e891b;
    border-radius: 4px;
  }
`;

export const BoardInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: max-content;
  min-width: 100%;
`;

export const HeaderRow = styled.div`
  display: flex;
  gap: 1rem;
  padding-top: 1rem;
`;

export const ColumnsRow = styled.div`
  flex: 1;
  display: flex;
  gap: 1rem;
  padding: 0.75rem;
`;

export const ColumnHeader = styled.div`
  flex: 0 0 280px;
  padding: 0.5rem;
  background: #f1f6e8;
  color: #283b0a;
  border-radius: 8px;
  box-shadow: 2px 2px 4px #283b0a;
  text-align: center;

  h4 {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  span {
    font-size: 0.85rem;
  }
`;
