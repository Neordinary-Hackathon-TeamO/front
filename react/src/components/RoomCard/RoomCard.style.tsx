import styled from 'styled-components';

export const RoomCard = styled.div`
  display: flex;
  padding: 16px;
  align-items: flex-start;
  border-radius: 8px;
  border: 1px solid rgba(112, 115, 124, 0.16);
  background: #497c6b;
  gap: 16px;
`;

export const GiftBoxImage = styled.div`
  width: 40px;
  height: 40px;
`;

export const RoomInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const RoomTitle = styled.span`
  color: var(--Semantic-Static-White, var(--Static-White, #fff));
  font-size: 17px;
  font-weight: 700;
  line-height: 25.5px;
`;

export const RoomDuration = styled.span`
  color: #fff;
  font-size: 13px;
  font-weight: 500;
  line-height: 19.5px;
`;
