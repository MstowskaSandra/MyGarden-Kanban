import styled from "styled-components";

export const TaskContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 2px solid black;
  margin-top: 1rem;
  border-radius: 6px;
  padding: 0.5rem;
  font-size: small;
  width: 80%;
  margin-bottom: 0.5rem;
  background-color: #fff475;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15), 4px 0 6px rgba(0, 0, 0, 0.1);
  transform: rotate(-2deg);
  font-family: 'Comic Sans MS', cursive, sans-serif;
  position: relative;  
`;

export const TaskContent = styled.div`
  position: relative;
  width: 100%;
`;

export const TaskName = styled.p`
  margin-bottom: 0.25rem;
`;

export const TaskUser = styled.span`
  font-size: x-small;
  align-self: flex-end;
  margin-right: 0.25rem;
  letter-spacing: 1px;
  margin-top: 0.75rem;
  color: blue;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const EditButton = styled.button`
  width: 24px;
  height: 24px;
  background: transparent;
  cursor: pointer;
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
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;


export const Arrows = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;

  button {
    border: none;
    background: #f3f3f3;
    padding: 0.3rem 0.6rem;
    border-radius: 6px;
    cursor: pointer;
  }

  button:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

