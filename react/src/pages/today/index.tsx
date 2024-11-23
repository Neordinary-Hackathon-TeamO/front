import {
  Container,
  LetterIcon,
  MessageBox,
  MessageBoxText,
  SenderToReceiver,
  SenderToReceiverWrapper,
} from './style';
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
      </Container>
    </Layout>
  );
};

export default Page;
