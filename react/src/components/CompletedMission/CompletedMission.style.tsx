import styled from 'styled-components';

export const StyledCompletedMission = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const Title = styled.div`
  color: var(--Semantic-Label-Normal, var(--Label-Normal, #171719));
  font-size: 20px;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: -0.24px;
`;

export const ImageWrapper = styled.div`
  border-radius: 16px;
  border: 1px solid red;
  width: 100%;
  height: 100%;
  aspect-ratio: 1/1;
`;

export const MissionTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px;
`;

export const MissionText = styled.p<{ isExpanded: boolean }>`
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => (props.isExpanded ? 'unset' : 2)};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  justify-content: center;
  align-items: center;
  gap: 4px;
  color: var(--Semantic-Label-Normal, var(--Label-Normal, #171719));
  font-size: 15px;
  line-height: 160%;
  letter-spacing: 0.144px;
`;

export const MoreButton = styled.button`
  font-size: 15px;
  color: rgba(55, 56, 60, 0.61);
`;
