import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
`;

export const MessageBox = styled.div`
  display: flex;
  margin: 32px 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
  padding: 16px 20px 20px 20px;
  border-radius: 16px;
  background: var(--Background-Normal-Alternative, #f7f7f8);
`;

export const SenderToReceiver = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const LetterIcon = styled.div`
  color: var(--Semantic-Label-Normal, var(--Label-Normal, #171719));
  text-align: center;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.137px;
`;

export const SenderToReceiverWrapper = styled.p``;

export const MessageBoxText = styled.p`
  color: var(--Semantic-Label-Normal, var(--Label-Normal, #171719));
  font-size: 16px;
  line-height: 162.5%;
  letter-spacing: 0.091px;
`;

export const MissionContent = styled.div``;

export const CalendarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  gap: 32px;
`;

export const MissionDate = styled.span`
  color: var(--Semantic-Label-Normal, var(--Label-Normal, #171719));
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: -0.24px;
`;

export const CompletedMissionList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  gap: 40px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px 20px 32px;
`;

export const MissionVerificationButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 12px 25px;
  gap: 10px;
  border-radius: 14px;
  background: #4e5968;
  color: #fff;
  font-size: 17px;
  font-weight: 600;
  line-height: 141.2%;
`;

export const MatchButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 25px;
  gap: 10px;
  background: #4e5968;
  border-radius: 14px;
  text-align: center;
  font-size: 17px;
  font-weight: 600;
  line-height: 141.2%;
  color: #fff;

  &:disabled {
    background: rgba(112, 115, 124, 0.16);
    color: rgba(55, 56, 60, 0.16);
  }
`;
