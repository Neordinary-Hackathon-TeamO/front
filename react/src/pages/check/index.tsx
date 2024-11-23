import { useState } from 'react';
import styled from 'styled-components';

import santa from '../../assets/santa.svg';
import check from '../../assets/CheckCircle.svg';
import checked from '../../assets/CheckedCircle.svg';

const Page = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleChecked = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Container>
      <Title>내 마니또는 누구였을까?</Title>
      <SantaList>
        <SantaContainer isChecked={isChecked} onClick={handleChecked}>
          <SantaImage src={santa} />
          <SantaNickname isChecked={isChecked}>닉네임</SantaNickname>
          <SantaChecked src={isChecked ? checked : check} />
        </SantaContainer>
        <SantaContainer isChecked={isChecked} onClick={handleChecked}>
          <SantaImage src={santa} />
          <SantaNickname isChecked={isChecked}>닉네임</SantaNickname>
          <SantaChecked src={isChecked ? checked : check} />
        </SantaContainer>
        <SantaContainer isChecked={isChecked} onClick={handleChecked}>
          <SantaImage src={santa} />
          <SantaNickname isChecked={isChecked}>닉네임</SantaNickname>
          <SantaChecked src={isChecked ? checked : check} />
        </SantaContainer>
        <SantaContainer isChecked={isChecked} onClick={handleChecked}>
          <SantaImage src={santa} />
          <SantaNickname isChecked={isChecked}>닉네임</SantaNickname>
          <SantaChecked src={isChecked ? checked : check} />
        </SantaContainer>
        <SantaContainer isChecked={isChecked} onClick={handleChecked}>
          <SantaImage src={santa} />
          <SantaNickname isChecked={isChecked}>닉네임</SantaNickname>
          <SantaChecked src={isChecked ? checked : check} />
        </SantaContainer>
        <SantaContainer isChecked={isChecked} onClick={handleChecked}>
          <SantaImage src={santa} />
          <SantaNickname isChecked={isChecked}>닉네임</SantaNickname>
          <SantaChecked src={isChecked ? checked : check} />
        </SantaContainer>
        <SantaContainer isChecked={isChecked} onClick={handleChecked}>
          <SantaImage src={santa} />
          <SantaNickname isChecked={isChecked}>닉네임</SantaNickname>
          <SantaChecked src={isChecked ? checked : check} />
        </SantaContainer>
        <SantaContainer isChecked={isChecked} onClick={handleChecked}>
          <SantaImage src={santa} />
          <SantaNickname isChecked={isChecked}>닉네임</SantaNickname>
          <SantaChecked src={isChecked ? checked : check} />
        </SantaContainer>
        <SantaContainer isChecked={isChecked} onClick={handleChecked}>
          <SantaImage src={santa} />
          <SantaNickname isChecked={isChecked}>닉네임</SantaNickname>
          <SantaChecked src={isChecked ? checked : check} />
        </SantaContainer>
        <SantaContainer isChecked={isChecked} onClick={handleChecked}>
          <SantaImage src={santa} />
          <SantaNickname isChecked={isChecked}>닉네임</SantaNickname>
          <SantaChecked src={isChecked ? checked : check} />
        </SantaContainer>
        <SantaContainer isChecked={isChecked} onClick={handleChecked}>
          <SantaImage src={santa} />
          <SantaNickname isChecked={isChecked}>닉네임</SantaNickname>
          <SantaChecked src={isChecked ? checked : check} />
        </SantaContainer>
        <SantaContainer isChecked={isChecked} onClick={handleChecked}>
          <SantaImage src={santa} />
          <SantaNickname isChecked={isChecked}>닉네임</SantaNickname>
          <SantaChecked src={isChecked ? checked : check} />
        </SantaContainer>
      </SantaList>

      <ButtonContainer>
        <ResultButton isChecked={isChecked}>결과 보기</ResultButton>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 20px;
  height: 100vh;
  padding-top: 30px;
  position: relative;
`;
const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.358;
  color: #171719;
`;

const SantaList = styled.main`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  margin-top: 20px;
  padding-bottom: 100px;
`;
const SantaContainer = styled.button<{ isChecked: boolean }>`
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 16px;
  border: 1px solid
    ${({ isChecked }) => (isChecked ? '#37383C' : 'rgba(112, 115, 124, 0.16)')};
  border-radius: 8px;
`;
const SantaImage = styled.img`
  width: 40px;
  height: 40px;
`;
const SantaNickname = styled.p<{ isChecked: boolean }>`
  font-size: 17px;
  font-weight: 600;
  line-height: 1.334;
  color: ${({ isChecked }) => (isChecked ? '#37383C' : '#70737C')};
`;
const SantaChecked = styled.img`
  width: 32px;
  height: 32px;
  margin-left: auto;
`;

const ButtonContainer = styled.div`
  padding: 20px 16px 32px;
  position: fixed;
  bottom: 0;
  width: 100%;
  margin: 0 -20px;
  background-color: #FFF;
`;

const ResultButton = styled.button<{ isChecked: boolean }>`
  width: 100%;
  text-align: center;
  background-color: ${({ isChecked }) =>
    isChecked ? '#4E5968' : 'rgba(112, 115, 124, 0.16)'};
  color: ${({ isChecked }) => (isChecked ? '#FFF' : 'rgba(55, 56, 60, 0.16)')};
  padding: 12px 0;
  border-radius: 12px;
`;

export default Page;
