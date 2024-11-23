import styled from 'styled-components';

export const MainPage = styled.div`
  width: 100%;
  max-width: 375px;
  margin: 0 auto;
`;

export const CreateRoomSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: -16px;
  height: 238px;
  background-image: url('/images/background-christmas.png');
  background-size: cover;
  background-position: center;
`;

export const CreateRoomButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  border: 1px solid var(--Line-Normal-Normal, rgba(112, 115, 124, 0.22));
  background: var(--Static-White, #fff);
  padding: 20px 33px;
  margin: 0 20px;
  width: 100%;
  gap: 10px;
  cursor: pointer;
`;

export const CreateRoomPlusIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 20px;
`;

export const CreateRoomText = styled.span`
  color: #4e5968;
  text-align: center;
  font-size: 17px;
  font-weight: 600;
  line-height: 141.2%;
`;

export const InvitationCodeSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 0;
  align-items: flex-start;
  gap: 10px;
  border-radius: 16px 16px 0 0;
  background: #fff;
`;

export const InvitationCodeForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InvitationCodeFormInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 16px 0;
  width: 100%;
`;

export const InvitationCodeFormTitle = styled.h3`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 24px;
  gap: 10px;
`;

export const InvitationCodeFormInput = styled.input.attrs(() => ({
  type: 'text',
}))<React.InputHTMLAttributes<HTMLInputElement>>`
  display: flex;
  align-items: center;
  margin: 0 20px;
  border-radius: 12px;
  border: 1px solid rgba(112, 115, 124, 0.22);
  background: #fff;
  padding: 14px 16px;
  gap: 10px;
  position: relative;
  line-height: 1;

  &::placeholder {
    color: rgba(55, 56, 60, 0.28);
  }
`;

export const InvitationCodeSubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 20px 20px;
  border-radius: 14px;
  background: #4e5968;
  padding: 12px 25px;
  color: #fff;
  gap: 10px;
  cursor: pointer;

  &:disabled {
    background: rgba(112, 115, 124, 0.16);
    color: rgba(55, 56, 60, 0.16);
  }
`;

export const RoomListSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 0 20px;
`;

export const RoomListTitle = styled.h2`
  color: #171719;
  font-size: 20px;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: -0.24px;
`;
export const RoomCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
