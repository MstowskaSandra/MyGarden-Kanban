import styled from "styled-components";

export const Overlay = styled.div` 
  position: fixed; z-index: 1000; 
  inset: 0; background: rgba(0,0,0,0.5); 
  display: flex; place-items: center; 
`;

export const Modal = styled.div`
  background: white; 
  border-radius: 12px; 
  padding: 2rem; 
  width: min(90vw, 400px); 
  box-shadow: 0 25px 50px rgba(0,0,0,0.25);
`;

export const Icon = styled.div` font-size: 3rem; text-align: center; margin-bottom: 1rem; `;
export const Title = styled.h3` text-align: center; color: #333; margin: 0 0 2rem; `;
export const Actions = styled.div` 
  display: flex; gap: 1rem; justify-content: center; 
`;

export const DeleteButton = styled.button`
 border: 2px solid red;
`;

export const CancelButton = styled.button`
 border: 2px solid black;
`;

