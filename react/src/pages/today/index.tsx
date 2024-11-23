import {
  Calendar,
  CompletedMissionList,
  Container,
  LetterIcon,
  MessageBox,
  MessageBoxText,
  MissionContent,
  SenderToReceiver,
  SenderToReceiverWrapper,
} from './style';
import CompletedMission from '../../components/CompletedMission/CompletedMission';
import Layout from '../../components/Layout/Layout';

interface PageProps {
  sender: string;
  receiver: string;
}

const Page: React.FC<PageProps> = ({ sender, receiver }) => {
  return (
    <Layout headerTitle="미션방" showBackButton={true}>
      <Container>
        <MessageBox>
          <SenderToReceiver>
            <LetterIcon>💌</LetterIcon>
            <SenderToReceiverWrapper>{`${sender}(나) -> ${receiver}`}</SenderToReceiverWrapper>
          </SenderToReceiver>
          <MessageBoxText>마음을 녹이는 커피를 사세요.</MessageBoxText>
        </MessageBox>

        <MissionContent>
          <Calendar>12/24</Calendar>
          <CompletedMissionList>
            <CompletedMission nickname={sender} />
          </CompletedMissionList>
        </MissionContent>
      </Container>
    </Layout>
  );
};

export default Page;
