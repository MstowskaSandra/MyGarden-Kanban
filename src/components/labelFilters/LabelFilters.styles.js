import styled from "styled-components";

export const LabelFilters = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: min(320px, 90vw);
  background: #5f5aa5;
  border-left: 3px solid #baaceb;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transform: translateX(${({ $isOpen }) => ($isOpen ? "0" : "100%")});
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
  overflow-y: auto;

  @media (max-width: 600px) {
    width: 100vw;
    border-left: none;
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
  transition: all 0.2s ease;

  img {
    width: 1.8rem;
    height: 1.8rem;
    object-fit: contain;
  }

  &:hover {
    background-color: #d3c8f8;
    transform: scale(1.08);
  }
`;

export const LabelChip = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  border: 3px solid ${(p) => (p.active ? "transparent" : p.color)};
  border-radius: 16px;
  background: ${(p) => (p.active ? p.color : "#F0F5E5")};
  color: ${(p) => (p.active ? "white" : p.color)};
  box-shadow: 2px 2px 4px #283b0a;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 3px 3px 6px #283b0a;
  }

  &:active {
    transform: translateY(0);
  }
`;

export const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  padding: 0.4rem 0.6rem;
`;

export const NameSpan = styled.span`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 0.05em;
  flex: 1;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background: white;
  border-radius: 8px;
  box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.2);

  img {
    width: 1.6rem;
    height: 1.6rem;
    object-fit: contain;
  }
`;

