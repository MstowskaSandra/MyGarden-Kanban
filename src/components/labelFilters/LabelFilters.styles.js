import styled from "styled-components";

export const LabelFilters = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  min-width: 200px;
  background: #5f5aa5;
  border-left: 3px solid #baaceb;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transform: translateX(${({ $isOpen }) => ($isOpen ? "0" : "100%")});
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
  overflow-y: auto;
`;

export const LabelChip = styled.button`
  border: 3px solid ${(p) => (p.active ? "transparent" : p.color)};
  box-shadow: 2px 2px 4px #283b0a;
  background: ${(p) => (p.active ? p.color : "#F0F5E5")};
  color: ${(p) => (p.active ? "white" : p.color)};
  border-radius: 16px;
  font-size: 1rem;

  &:hover {
    opacity: 0.8;
  }
`;

export const BtnsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding-bottom: 1rem;
  border-bottom: 3px solid #baaceb;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  width: 4rem;
  height: 3rem;
  box-shadow: 2px 2px 4px #283b0a;
  background: #baaceb;
  color: #283b0a;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;

  img {
    width: 1.8rem;
  }

  &:hover {
    background-color: #d3c8f8;
    transform: scale(1.1);
  }
`;

export const NameSpan = styled.span`
  margin-left: 1rem;
  text-transform: uppercase;
`;

export const LabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.25rem 0.5rem;
`;




