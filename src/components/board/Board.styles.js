import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: ${({ theme }) => theme.spacing.sm};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.background};
`;
