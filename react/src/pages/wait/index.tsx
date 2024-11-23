import Layout from '../../components/Layout/Layout';
import {
  AttendeeListTitle,
  AttendeeListTitleWrapper,
  AttendeeListWrapper,
  AttendeeName,
  AttendeeNameList,
  AttendeeNumber,
  AttendeeNumberWrapper,
  AttendeeTotal,
  ButtonWrapper,
  Container,
  ExitButton,
  ShareButton,
} from './style';

const Page = () => {
  return (
    <Layout headerTitle="대기방" showBackButton={true}>
      <Container>
        <AttendeeListWrapper>
          <AttendeeListTitleWrapper>
            <AttendeeListTitle>참여자 리스트</AttendeeListTitle>
            <AttendeeNumberWrapper>
              <AttendeeNumber>40</AttendeeNumber>
              <AttendeeTotal>/40</AttendeeTotal>
            </AttendeeNumberWrapper>
          </AttendeeListTitleWrapper>
          <AttendeeNameList>
            <AttendeeName>닉네임</AttendeeName>
            <AttendeeName>닉네임</AttendeeName>
            <AttendeeName>닉네임</AttendeeName>
          </AttendeeNameList>
        </AttendeeListWrapper>

        <ButtonWrapper>
          <ShareButton>공유하기</ShareButton>
          <ExitButton>방 나가기</ExitButton>
        </ButtonWrapper>
      </Container>
    </Layout>
  );
};

export default Page;
