import styled from "styled-components";

export const BoardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  border: 3px solid ${({ theme }) => theme.colors.borderStrong};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.colors.surface};

  overflow: hidden;
`;

export const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.surfaceAlt};
  border-bottom: 3px solid ${({ theme }) => theme.colors.borderStrong};
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const ScrollArea = styled.div`
  flex: 1;
  overflow-x: auto;
  overflow-y: hidden;

  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.colors.borderStrong} transparent;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.borderStrong};
    border-radius: 4px;
  }
`;

export const BoardInner = styled.div`
  display: flex;
  flex-direction: column;
  width: max-content;
  min-width: 100%;
`;

export const HeaderRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.surface};
  border-bottom: 3px solid ${({ theme }) => theme.colors.borderStrong};
`;

export const ColumnsRow = styled.div`
  flex: 1;
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.background};
`;

export const ColumnHeader = styled.div`
  flex: 0 0 280px;
  padding: ${({ theme }) => theme.spacing.sm};
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.darkGreen};
  border-radius: ${({ theme }) => theme.radius.md};
  box-shadow: ${({ theme }) => theme.shadow.lg};
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
