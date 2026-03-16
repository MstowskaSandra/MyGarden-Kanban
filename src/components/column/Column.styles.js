import styled from "styled-components";

export const ColumnContainer = styled.div`
  flex: 0 0 280px;
  min-height: 400px;
  max-height: 70vh;

  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  padding: 0.5rem;

  background: linear-gradient(180deg, #f9fbf5 0%, #e8f0d8 100%);

  border-radius: 12px;
  border: 2px solid #d2e0b8;

  box-shadow: 2px 2px 4px #283b0a;

  position: relative;

  overflow-y: auto;
  overflow-x: hidden;

  transition: all 0.2s ease;

  &:hover {
    box-shadow: 6px 6px 8px #283b0a;
    border-color: #283b0a;
  }

  &[data-active="true"] {
    background: #e8f0d8;
    border-color: rgb(184, 208, 98);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
  }

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #5e891b;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: gb(184, 208, 98);
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


