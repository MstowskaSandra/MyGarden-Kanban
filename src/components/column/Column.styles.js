import styled from "styled-components";

export const ColumnContainer = styled.div`
  flex: 0 0 280px;
  min-height: 400px;
  max-height: 70vh;

  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};

  padding: ${({ theme }) => theme.spacing.md};

  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.surface} 0%,
    ${({ theme }) => theme.colors.surfaceAlt} 100%
  );

  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};

  box-shadow: ${({ theme }) => theme.shadow.sm};

  position: relative;

  overflow-y: auto;
  overflow-x: hidden;

  transition: all 0.2s ease;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadow.md};
  }

  &[data-active="true"] {
    background: ${({ theme }) => theme.colors.surfaceAlt};
    border-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: ${({ theme }) => theme.shadow.md};
  }

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.borderStrong};
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
`;

export const TaskWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: transform 0.15s ease;

  &:hover {
    transform: translateY(-3px) scale(1.1);
  }
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0.25rem;
  background: none;
  font-size: 1.25rem;
  font-weight: bold;
  cursor: pointer;
  opacity: 0;
  transition: all 0.3s ease;

  ${TaskWrapper}:hover & {
    opacity: 1;
  }

  &:hover {
    transform: scale(1.1);
  }
`;
