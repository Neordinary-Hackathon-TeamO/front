import { useEffect, useState } from 'react';
import {
  Container,
  Title,
  SantaList,
  SantaContainer,
  SantaImage,
  SantaNickname,
  SantaChecked,
  ButtonContainer,
  ResultButton,
} from './style';

import santa from '../../assets/santa.svg';
import check from '../../assets/CheckCircle.svg';
import checked from '../../assets/CheckedCircle.svg';
import Layout from '../../components/Layout/Layout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Page = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [selectedNickname, setSelectedNickname] = useState<string>('');

  const user = [
    { id: 1, nickname: '윰' },
    { id: 2, nickname: '로지' },
    { id: 3, nickname: '밤톨' },
    { id: 4, nickname: '윈터' },
    { id: 5, nickname: '차차' },
    { id: 6, nickname: '로빈' },
    { id: 7, nickname: '동자' },
    { id: 8, nickname: '올라잇' },
  ];

  const baseURL = import.meta.env.VITE_BASE_URL;

  const handleChecked = (nickname: string) => {
    setIsChecked(true);
    setSelectedNickname(nickname);
  };

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async() => {
    try {
      const response = await axios.get(`${baseURL}/team/rooms`);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const navigate = useNavigate();

  return (
    <Layout headerTitle="마니또 맞추기" showBackButton>
      <Container>
        <Title>내 마니또는 누구였을까?</Title>
        <SantaList>
          {user.map((u) => (
            <SantaContainer
              key={u.id}
              isChecked={isChecked && selectedNickname === u.nickname}
              onClick={() => handleChecked(u.nickname)}
            >
              <SantaImage src={santa} />
              <SantaNickname
                isChecked={isChecked && selectedNickname === u.nickname}
              >
                {u.nickname}
              </SantaNickname>
              <SantaChecked
                src={
                  isChecked && selectedNickname === u.nickname ? checked : check
                }
              />
            </SantaContainer>
          ))}
        </SantaList>

        <ButtonContainer>
          <ResultButton isChecked={isChecked} onClick={() => navigate('/open/1')}>결과 보기</ResultButton>
        </ButtonContainer>
      </Container>
    </Layout>
  );
};

export default Page;
