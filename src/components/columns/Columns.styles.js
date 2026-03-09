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

export const LabelFilters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 12px;
  max-height: 40px;
  overflow-x: auto;
  background: #f5f5f5;
  border-bottom: 1px solid #eee;
`;

export const LabelChip = styled.button`
  padding: 4px 8px;
  border: 1px solid ${(p) => p.color};
  background: ${(p) => (p.active ? p.color : "transparent")};
  color: ${(p) => (p.active ? "white" : p.color)};
  border-radius: 12px;
  font-size: 11px;
  white-space: nowrap;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const ClearButton = styled.button`
  padding: 4px 8px;
  background: #ff4444;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 11px;
  cursor: pointer;
`;
