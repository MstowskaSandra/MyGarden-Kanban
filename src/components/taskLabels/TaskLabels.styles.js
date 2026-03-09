import styled from "styled-components";

export const LabelChip = styled.span`
  display: inline-block;
  padding: 4px 8px;
  border-radius: 16px;
  font-size: 11px;
  font-weight: 500;
  margin: 2px 4px 2px 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  line-height: 1.2;
  min-width: 24px;
  text-align: center;
  font-family: "Comic Sans MS", cursive, sans-serif;

  background-color: ${(props) => props.color || "#e0e0e0"};

  color: #333;
`;