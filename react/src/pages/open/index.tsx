import styled from 'styled-components';
import background from '../../assets/match-background.png';
import santa from '../../assets/santa.svg';
import arrow from "../../assets/ArrowRight.svg";

const Page = () => {
  return (
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
              <Result>15명</Result>
            </ResultTextContainer>
            <ResultTextContainer>
              <ResultTitle>✅ 미션 인증 횟수</ResultTitle>
              <Result>평균 4번</Result>
            </ResultTextContainer>
            <ResultTextContainer>
              <ResultTitle>🎯 마니또 맞춘 사람 수</ResultTitle>
              <Result>18명</Result>
            </ResultTextContainer>
            <ResultTextContainer>
              <ResultTitle>👑 가장 많이 인증한 사람</ResultTitle>
              <Result>김마니또</Result>
            </ResultTextContainer>
          </ResultNumberContainer>

          <ResultText>
            산타의 비밀친구들은 7일 동안 15명이 인증했어요. 7일 동안 평균 4번
            인증했어요. 가장 많이 인증한 사람은 10번 인증한 김마니또님 이에요.
            40명 중에 18명이 마니또가 누구인지 맞췄어요.
          </ResultText>
        </ResultContainer>

        <ResultListContainer>
          <ResultList>
            <ResultName>닉네임</ResultName>
            <Arrow src={arrow}/>
            <ResultName>닉네임최대10글자임</ResultName>
          </ResultList>
          <ResultList>
            <ResultName>닉네임</ResultName>
            <Arrow src={arrow}/>
            <ResultName>닉네임최대10글자임</ResultName>
          </ResultList>
          <ResultList>
            <ResultName>닉네임</ResultName>
            <Arrow src={arrow}/>
            <ResultName>닉네임최대10글자임</ResultName>
          </ResultList>
          <ResultList>
            <ResultName>닉네임</ResultName>
            <Arrow src={arrow}/>
            <ResultName>닉네임최대10글자임</ResultName>
          </ResultList>
        </ResultListContainer>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  background-image: url(${background});
  width: 100%;
  height: 100%;
  background-size: cover;
  overflow: hidden;
`;
const Container = styled.div`
  overflow: scroll;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  width: 100%;
`;
const Title = styled.h2`
  font-size: 16px;
  font-weight: 600;
  line-height: line-height: 1.358;
  color: #FFF;
`;

const Santa = styled.img`
  width: 141px;
  max-width: none;
  height: 141px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -81%) rotate(5.17deg);
  transform-origin: left;
  aspect-ratio: 1/1;
`;
const ResultContainer = styled.div`
  position: relative;
  margin-top: 130px;
  background-color: #fff;
  border-radius: 16px;
  padding: 32px 16px;
  width: 100%;
`;
const ResultTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ResultNumberContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 16px 0 32px;
`;
const ResultTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  line-height: 1.334;
  color: #2e2f33;
`;
const ResultText = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: #2e2f33;
  line-height: 1.571;
`;
const Result = styled.span`
  color: #497C6B;
  font-weight: 600;
  font-size: 17px;
  line-height: 1.358;
`;

const ResultListContainer = styled.div`
  margin-top: 20px;
  background-color: #fff;
  border-radius: 16px;
  padding: 20px 16px;
  width: 100%;
`;
const ResultList = styled.div`
  display: flex;
  align-items: center;
  margin: 2px 0;
  height: 40px;
`;
const ResultName = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: #333D48;
`;
const Arrow = styled.img`
  width: 24px;
  height: 24px;
  margin-left: auto;
  margin-right: 8px;
`;
export default Page;
