import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  background: #f9fbf5;
  border: 3px solid #283b0a;
  box-shadow: 2px 2px 6px #283b0a;
  padding: 1rem;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
`;

export const CloseButton = styled.button`
  display: flex;
  justify-self: right;
  border: none;
  background-color: transparent;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 0.25rem;
  margin-bottom: 0;

  &:hover {
    color: red;
  }
`;