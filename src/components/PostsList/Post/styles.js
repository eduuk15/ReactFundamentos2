import styled from 'styled-components';

export const Container = styled.article`
  background: ${({ theme }) => theme.postBackgroundColor};
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.medium};
  border-radius: 10px;

  h2 {
    margin: 0 0 8px;
  }

  small {
    opacity: 0.7;
  }

  & + article {
    margin-top: ${({ theme }) => theme.spacing.small};
  }
`;
