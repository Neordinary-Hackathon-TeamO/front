import {
  StyledCompletedMission,
  ImageWrapper,
  MissionText,
  Title,
} from './CompletedMission.style';

interface CompletedMissionProps {
  nickname: string;
}

const CompletedMission: React.FC<CompletedMissionProps> = ({ nickname }) => {
  return (
    <StyledCompletedMission>
      <Title>{`${nickname}님의 마니또`}</Title>
      <ImageWrapper />
      <MissionText>
        안녕하세요! 😊 오늘 드디어 마니또 미션을 성공적으로 완료하여 이렇게 인증
        글을 올립니다. 제 마니또를 위해 작은 선물을 준비했는데, 잘 전달되었기를
        바랍니다. 저는 마니또에게 따뜻한 메시지가 담긴 손편지와 함께 직접 만든
        초콜릿 쿠키를 선물했어요. 🍪✉️
      </MissionText>
    </StyledCompletedMission>
  );
};

export default CompletedMission;
