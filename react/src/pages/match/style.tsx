import styled from 'styled-components';
import backgroundUrl from '../../assets/match-background.png';

export const Container = styled.div`
  background-image: url('${backgroundUrl}');
  height: 100dvh;

  display: flex;
  flex-direction: column;
`;

export const ManitoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 54px;
  padding: 24px 60px;
  backdrop-filter: blur(8px);
`;

export const ManitoMe = styled.div`
  border-radius: 999px;
  background-color: #ffffff33;
  color: #ffffff;
  font-weight: 600;
  font-size: 20px;
  padding: 12px 36px;
`;

export const ManitoContent = styled.img`
  width: 220px;
  aspect-ratio: 1;
`;

export const ManitoOther = styled.div`
  border-radius: 999px;
  color: #171719;
  background-color: #ffffff;
  font-weight: 600;
  font-size: 20px;
  padding: 12px 36px;
`;

export const ButtonContainer = styled.div`
  flex-grow: 1;
  position: relative;
  display: flex;
  justify-content: center;
`;

export const MissionCheckButton = styled.button`
  position: absolute;
  bottom: 32px;

  border-radius: 12px;
  background-color: #ffffff;
  padding: 12px 24px;
  color: #4e5968;
  text-align: center;
  width: calc(100% - 32px);
`;
