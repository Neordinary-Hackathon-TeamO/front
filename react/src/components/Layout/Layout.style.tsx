import styled from 'styled-components';

export const Layout = styled.div<{ backgroundImageURL?: string }>`
  display: flex;
  flex-direction: column;
  ${({ backgroundImageURL }) =>
    backgroundImageURL
      ? `background-image : url("${backgroundImageURL}"); background-size: cover;`
      : ''}
  padding-bottom: 50px;
`;

export const HeaderContainer = styled.div`
  width: 100%;
`;

export const ContentContainer = styled.div``;

export const Content = styled.div`
  margin: 0 auto;
`;
