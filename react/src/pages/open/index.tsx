import {
  Wrapper,
  Container,
  Title,
  Santa,
  ResultContainer,
  ResultTextContainer,
  ResultNumberContainer,
  ResultTitle,
  ResultText,
  Result,
  ResultListContainer,
  ResultList,
  ResultName,
  Arrow,
} from './style';
import santa from '../../assets/santa.svg';
import arrow from '../../assets/ArrowRight.svg';
import Layout from '../../components/Layout/Layout';
import background from '../../assets/match-background.png';

const Page = () => {
  const pairs = [
    { from: '윰', to: '로지' },
    { from: '로지', to: '윈터' },
    { from: '윈터', to: '밤톨' },
    { from: '밤톨', to: '동자' },
    { from: '동자', to: '차차' },
    { from: '차차', to: '올라잇' },
    { from: '올라잇', to: '로빈' },
    { from: '로빈', to: '윰' },
  ];

  const resultData = {
    week: 15,
    mission: 4,
    checked: 18,
    max: "윰"
  };

  return (
    <Layout
      headerTitle="정체 공개"
      showBackButton
      titleColor={'#FFF'}
      backgroundImageURL={background}
    >
      <Wrapper>
        <Container>
          <Title>우리 팀, 이만큼 친해졌어요!</Title>
          <ResultContainer>
            <Santa src={santa} />
            <ResultTitle>산타의 비밀친구들</ResultTitle>
            <ResultText> 은</ResultText>

            <ResultNumberContainer>
              <ResultTextContainer>
                <ResultTitle>👥 7일간 인증한 사람</ResultTitle>
                <Result>{resultData.week}명</Result>
              </ResultTextContainer>
              <ResultTextContainer>
                <ResultTitle>✅ 미션 인증 횟수</ResultTitle>
                <Result>평균 {resultData.mission}번</Result>
              </ResultTextContainer>
              <ResultTextContainer>
                <ResultTitle>🎯 마니또 맞춘 사람 수</ResultTitle>
                <Result>{resultData.checked}명</Result>
              </ResultTextContainer>
              <ResultTextContainer>
                <ResultTitle>👑 가장 많이 인증한 사람</ResultTitle>
                <Result>{resultData.max}</Result>
              </ResultTextContainer>
            </ResultNumberContainer>

            <ResultText>
              산타의 비밀친구들은 7일 동안 {resultData.week}명이 인증했어요. 7일 동안 평균 {resultData.mission}번
              인증했어요. 가장 많이 인증한 사람은 10번 인증한 {resultData.max}님 이에요.
              40명 중에 {resultData.checked}명이 마니또가 누구인지 맞췄어요.
            </ResultText>
          </ResultContainer>

          <ResultListContainer>
            {pairs.map((pair, index) => (
              <ResultList key={index}>
                <ResultName>{pair.from}</ResultName>
                <Arrow src={arrow} />
                <ResultName>{pair.to}</ResultName>
              </ResultList>
            ))}
          </ResultListContainer>
        </Container>
      </Wrapper>
    </Layout>
  );
};

export default Page;
