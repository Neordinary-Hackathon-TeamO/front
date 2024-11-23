import styled from 'styled-components';

export const MainPage = styled.div`
  width: 100%;
  max-width: 23.4375rem;
  margin: 0 auto;
`;

export const CreateRoomSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 14.87rem;
  background-image: url('/images/background-christmas.png');
  background-size: cover;
  background-position: center;
`;

export const CreateRoomButton = styled.div`
  display: flex;
  width: 21.0625rem;
  padding: 1.25rem 2.0625rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 1rem;
  border: 1px solid var(--Line-Normal-Normal, rgba(112, 115, 124, 0.22));
  background: var(--Static-White, #fff);
  cursor: pointer;
`;

export const CreateRoomPlusIcon = styled.div`
  display: flex;
  height: 1.25rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CreateRoomText = styled.span`
  color: #4e5968;
  text-align: center;
  font-size: 1.0625rem;
  font-weight: 600;
  line-height: 141.2%;
`;

export const InvitationCodeSection = styled.div``;
