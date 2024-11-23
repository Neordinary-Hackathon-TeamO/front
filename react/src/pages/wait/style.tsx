import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AttendeeListWrapper = styled.div`
  display: flex;
  padding: 20px 0px;
  flex-direction: column;
  gap: 20px;
  border-radius: 16px;
  background: #f7f7f8;
  margin: 0 20px;
`;

export const AttendeeListTitleWrapper = styled.div`
  display: flex;
  padding: 4px 20px;
  gap: 8px;
`;

export const AttendeeListTitle = styled.h2`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #171719;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: -0.24px;
`;

export const AttendeeNumberWrapper = styled.div`
  display: flex;
  padding: 4px 20px;
  align-items: center;
  gap: 8px;
  color: #171719;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: -0.24px;
`;

export const AttendeeNumber = styled.span`
  color: #171719;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: -0.24px;
`;

export const AttendeeTotal = styled.span`
  color: rgba(55, 56, 60, 0.61);
  font-size: 20px;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: -0.24px;
`;

export const AttendeeNameList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const AttendeeName = styled.span`
  display: flex;
  padding: 8px 16px;
  flex-direction: column;
  align-items: flex-start;
  color: #333d48;
  font-size: 17px;
  font-weight: 600;
  line-height: 141.2%;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 16px 32px 16px;
  align-items: flex-start;
  width: 100%;
  gap: 12px;
`;

export const ShareButton = styled.button`
  display: flex;
  padding: 12px 25px;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 10px;
  border-radius: 12px;
  border: 1px solid rgba(112, 115, 124, 0.22);
  background: #fff;
  cursor: pointer;
`;

export const ExitButton = styled.button`
  display: flex;
  padding: 12px 25px;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 10px;
  border-radius: 12px;
  background: #f04452;
  color: #fff;
  text-align: center;
  font-size: 17px;
  font-weight: 600;
  line-height: 141.2%;
  cursor: pointer;
`;
