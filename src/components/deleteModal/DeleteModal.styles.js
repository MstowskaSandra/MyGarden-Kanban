import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  transform: none;
  background: rgba(0, 0, 0, 0.45);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  background: #fff475;
  border: 3px solid black;
  border-radius: 8px;

  padding: 2rem;
  width: min(90vw, 380px);

  font-family: "Comic Sans MS", cursive, sans-serif;

  box-shadow:
    0 6px 12px rgba(0, 0, 0, 0.25),
    4px 4px 0px rgba(0, 0, 0, 0.15);

  transform: rotate(-1deg);

  position: relative;
`;

export const Icon = styled.div`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 0.5rem;
`;

export const Title = styled.h3`
  text-align: center;
  color: #283b0a;
  margin: 0 0 1.5rem;

  font-size: 1.3rem;
`;

export const Actions = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

export const DeleteButton = styled.button`
  padding: 0.4rem 1rem;

  border: 3px solid #c1121f;
  border-radius: 8px;

  background: white;
  color: #c1121f;

  font-weight: bold;
  cursor: pointer;

  box-shadow: 2px 2px 4px rgba(0,0,0,0.2);

  transition: all 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 3px 3px 6px rgba(0,0,0,0.25);
  }
`;

export const CancelButton = styled.button`
  padding: 0.4rem 1rem;

  border: 3px solid #283b0a;
  border-radius: 8px;

  background: white;

  font-weight: bold;
  cursor: pointer;

  box-shadow: 2px 2px 4px rgba(0,0,0,0.2);

  transition: all 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 3px 3px 6px rgba(0,0,0,0.25);
  }
`;

