import {
  ButtonWrapper,
  CalendarWrapper,
  CompletedMissionList,
  Container,
  LetterIcon,
  MatchButton,
  MessageBox,
  MessageBoxText,
  MissionContent,
  MissionDate,
  MissionVerificationButton,
  SenderToReceiver,
  SenderToReceiverWrapper,
} from '../mission/style';
import CompletedMission from '../../components/CompletedMission/CompletedMission';
import Layout from '../../components/Layout/Layout';

const Page = () => {
  return (
    <Layout headerTitle="미션방" showBackButton={true}>
      <Container>
        <MessageBox>
          <SenderToReceiver>
            <LetterIcon>💌</LetterIcon>
            <SenderToReceiverWrapper>{`(나) -> `}</SenderToReceiverWrapper>
          </SenderToReceiver>
          <MessageBoxText>마음을 녹이는 커피를 사세요.</MessageBoxText>
        </MessageBox>

        <MissionContent>
          <CalendarWrapper>
            <img src="/public/icons/icon-arrow-triangle-left.svg" />
            <MissionDate>12/24</MissionDate>
            <img src="/public/icons/icon-arrow-triangle-right.svg" />
          </CalendarWrapper>

          <CompletedMissionList>
            <CompletedMission nickname={'sender'} />
            <CompletedMission nickname={'sender'} />
          </CompletedMissionList>
        </MissionContent>

        <ButtonWrapper>
          <MissionVerificationButton>미션 인증하기</MissionVerificationButton>
          <MatchButton>마니또 맞추기 (종료일에 가능해요)</MatchButton>
        </ButtonWrapper>
      </Container>
    </Layout>
  );
};

export default Page;
