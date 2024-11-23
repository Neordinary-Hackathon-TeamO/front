import { useParams } from 'react-router-dom';
import {
  ButtonContainer,
  Container,
  ManitoContainer,
  ManitoContent,
  ManitoMe,
  ManitoOther,
  MissionCheckButton,
} from './style';

import tempImageUrl from '../../assets/match-temp.svg';

const Page = () => {
  const params = useParams();

  console.log(params);

  return (
    <Container>
      <ManitoContainer>
        <ManitoMe>닉네임님의 마니또 </ManitoMe>

        <ManitoContent src={tempImageUrl} />

        <ManitoOther>닉네임123님 </ManitoOther>
      </ManitoContainer>
      <ButtonContainer>
        <MissionCheckButton>오늘 미션 확인하기</MissionCheckButton>
      </ButtonContainer>
    </Container>
  );
};

export default Page;
